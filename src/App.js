
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';
function App() {
  return (
    <div className="App">
     <header className="App-header">
        <h2>Todo List using Redux</h2>
        <AddTodo />
        <List />
       
     </header>
        
    </div>
  );
}

export default App;
