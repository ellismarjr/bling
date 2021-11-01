import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";
import { TasksProvider } from "./hooks/useTasks";

import './styles/global.scss';

function App() {
  return (
    <TasksProvider>
      <Header />
      <TasksList />
    </TasksProvider>
  );
}

export default App;
