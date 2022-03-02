import './App.css';
import TaskItem from './components/TaskItem';

function App() {
  return (
    <div className='App'>
      <h1 className='App__title'>Список дел</h1>
      <TaskItem></TaskItem>
    </div>
  );
}

export default App;
