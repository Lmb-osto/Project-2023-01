import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/Products">
          <li>Products</li>
        </Link>
        <Link to="/users">
          <li>users</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </header>
  );
}
