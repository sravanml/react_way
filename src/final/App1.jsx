/**
 * @file TodoApp.jsx
 * @description A simple React Todo App using state management.
 * @version 1.0.0
 * @author SS
 * @Date 2024-01-11
 */

import React, { useState } from 'react';

const TodoApp = () => {

  // State to store the list of todos
  const [todoInput, setTodoInput] = useState('');
  // State to store the current todo being typed
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, { text: todoInput }]);
      setTodoInput('');
    }
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="whats your plan?"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>

    // this is same as above
  );
};

export default TodoApp;
