import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = (props) => {
  return (
    <div className="container">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/Posts"}>Posts</Link>
      </nav>
      <div className="main">
        <Outlet />
      </div>
      <footer>Email: 1 & Password: 1</footer>
    </div>
  );
};

export default Root;
