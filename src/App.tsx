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

  return (
    <div className="App">
      <h1>Todo App with React/TypeScript</h1>

      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="input"
          value={inputValue}
        />
        <input type="submit" value="追加" className="submit" />
      </form>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.inputValue}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
