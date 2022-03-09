// https://www.youtube.com/watch?v=ANcopd8Bmao&t=1379s

import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // リロードを回避する
    e.preventDefault();

    // Todoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todo.length,
      checked: false,
    };

    setTodo([newTodo, ...todo]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodo(newTodo);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodo(newTodo);
  };

  const handleDelete = (id: number) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <div>
        <h1>Todo App with React/TypeScript</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
            value={inputValue}
          />
          <input type="submit" value="追加" className="submitButton" />
        </form>

        <ul className="todoList">
          {todo.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(e) => handleChecked(todo.id, todo.checked)}
              />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
