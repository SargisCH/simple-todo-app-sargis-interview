import React, { useState } from "react";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";

const UserContainer = () => {
  const [users, setUsers] = useState([

  ]);

  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const addTodoItem = (username) => {
    const newUser = {
      id: uuidv4(),
      username,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <Input handleSubmit={addTodoItem} />
      {users.map(user => {
        return <li key={user.id} className="todo-item">
          <span>{user.username}</span>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      })}
    </div>
  );
};
export default UserContainer;
