import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { v4 as uuidV4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskContextData {
  tasks: Task[];
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  handleCreateNewTask: () => void;
  handleToggleTaskComplete: (id: string) => void;
  handleRemoveTask: (id: string) => void;
  clearNewTaskInput: () => void;
}

interface TaskProviderProps {
  children: ReactNode;
}


const TasksContext = createContext({} as TaskContextData);

function TasksProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleCreateNewTask = useCallback(() => {
    if (!newTaskTitle) return;

    const newTask = {
      id: uuidV4(),
      title: newTaskTitle,
      isComplete: false,
    };

    localStorage.setItem('@todos-app', JSON.stringify([...tasks, newTask]));

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }, [newTaskTitle, tasks]);

  const handleToggleTaskComplete = useCallback((id: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    localStorage.setItem('@todos-app', JSON.stringify(newTasks));
    setTasks(newTasks);
  }, [tasks]);

  const handleRemoveTask = useCallback((id: string) => {
    const newTasks = tasks.filter(task => task.id !== id);

    localStorage.setItem('@todos-app', JSON.stringify(newTasks));

    setTasks(newTasks);
  }, [tasks]);

  const clearNewTaskInput = useCallback(() => {
    setNewTaskTitle('');
  }, [setNewTaskTitle]);

  useEffect(() => {
    const tasks = localStorage.getItem('@todos-app');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <TasksContext.Provider value={{
      tasks,
      setNewTaskTitle,
      newTaskTitle,
      handleCreateNewTask,
      handleToggleTaskComplete,
      handleRemoveTask,
      clearNewTaskInput
    }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  return context;
}

export { TasksProvider, useTasks };
