import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { FiTrash2, FiMenu, FiX } from 'react-icons/fi';

import './styles.scss';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: uuidV4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskComplete(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="task-list">

      <main>
        <header>
          <FiMenu size={20} /> Lista De Tarefas
        </header>

        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''}>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskComplete(task.id)}
                  />
                </label>
                <p>{task.title}</p>
              </div>
              <button
                className="deleteButton"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash2 size={20} color="#ad273f" />
              </button>
            </li>
          ))}
        </ul>
        <footer>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Qual é a nova tarefa?"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle} />
            <FiX size={20} color="#666" />
          </div>
          <button className="buttonAddNewTask"
            onClick={handleCreateNewTask}
          >Adicionar tarefa</button>
        </footer>
      </main>
    </section>
  );
}