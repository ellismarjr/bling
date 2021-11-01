import { FiTrash2, FiMenu, FiX } from 'react-icons/fi';

import './styles.scss';
import { useTasks } from '../../hooks/useTasks';
import { useEffect, useRef } from 'react';

export function TasksList() {
  const {
    tasks,
    handleToggleTaskComplete,
    handleCreateNewTask,
    handleRemoveTask,
    newTaskTitle,
    setNewTaskTitle,
    clearNewTaskInput
  } = useTasks();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]);

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
              ref={inputRef}
              type="text"
              placeholder="Qual é a nova tarefa?"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
              autoFocus
            />
            <button type="button" className="clearText"
              onClick={clearNewTaskInput}>
              <FiX size={20} color="#666" />
            </button>
          </div>
          <button className="buttonAddNewTask"
            onClick={handleCreateNewTask}
          >Adicionar tarefa</button>
        </footer>
      </main>
    </section>
  );
}