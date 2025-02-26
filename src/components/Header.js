import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo App
      </h1>
      <Link to="/users">Users</Link>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>

    </header>
  );
};

export default Header;
