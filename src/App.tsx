import { useState } from 'react';

import './App.css';
import Todo from './modles/todo'

// import compos
import ToDos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) =>{
      return prevTodos.concat(newTodo);
    })
   }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <ToDos items={todos} />
    </div>
  );
}

export default App;
