import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos></Todos>
    </div>
  );
}

export default App;
