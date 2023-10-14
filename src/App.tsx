import './App.css';
import Todo from './modles/todo'

// import compos
import ToDos from './components/Todos';

function App() {
  const todos = [
    new Todo('Catch more Fish'),
    new Todo('Eat more Fish')
  ]

  return (
    <div className="App">
     <h1>Hello World</h1>
     <ToDos items={todos}/>
    </div>
  );
}

export default App;
