import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/dragons">Dragons</Link>
      <Link to="/reserved">Reserved Dragons</Link>
    </nav>
  );
}

export default NavBar;
