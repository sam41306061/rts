import './App.css';

// import compos
import ToDos  from './components/Todos';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <ToDos items={['Fold Socks', 'Buy Bitcoin', 'Store Water']}/>
    </div>
  );
}

export default App;
