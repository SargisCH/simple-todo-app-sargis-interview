import React from "react";
import { Link } from "react-router-dom"
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import { useUserStore } from "../../store/userStore";
const UserContainer = () => {
  const { users, add: addUser, removeUser } = useUserStore(state => state)
  const deleteUser = (id) => {
    removeUser(id);
  };

  const addTodoItem = (username) => {
    const newUser = {
      id: uuidv4(),
      username,
    };
    addUser(newUser)
  };

  return (
    <div className="container">
      <Link to="/">Todos</Link>
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
