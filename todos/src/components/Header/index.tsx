import './styles.scss';

export function Header() {
  return (
    <header>
      <div>
        <h1>Todo App</h1>
        <p>App para gerenciamento de tarefas do dia a dia</p>
      </div>

      <button type="button">Logout</button>
    </header>
  );
}