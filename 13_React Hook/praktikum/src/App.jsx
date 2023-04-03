import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ]);

  const _handleEditTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const _handleHapus = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const _handleAddNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      completed: false,
    };
    console.log(...todos);
    console.log(todos);
    setTodos([...todos, newTodo]);
    setNewTitle("");
  };

  const render = todos.map((todo, index) => (
    <p key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input checked={todo.completed} type="checkbox" onChange={() => _handleEditTodo(todo.id)} />
      {todo.title}
      <button onClick={() => _handleHapus(todo.id)} className="button-styled">
        Delete
      </button>
    </p>
  ));
  return (
    <div className="body-styled">
      <h1>Todos</h1>
      <div>
        <form>
          <input type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
          <button onClick={_handleAddNewTodo} className="button-styled">
            Submit
          </button>
        </form>
        {render}
      </div>
    </div>
  );
}

export default App;
