import React, { useState } from "react";
import UserSelector from "./userSelector";
const TodoItem = ({ todo, handleChange, deleteTodo }) => {
  const [userSelected, setUserSelected] = useState()
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <UserSelector onChange={(selectedValue) => setUserSelected(selectedValue)} value={userSelected} />
    </li>
  );
}

export default TodoItem;
