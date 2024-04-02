import * as React from "react";
import '../styles/navbar.css'


const Navbar = () => {
  return (
    <header>
      <div className="headings">
        <li>writings.dev</li>
      </div>
      <div className="headings">
        <li>Categories</li>
        <li>Articles</li>
        <li>About</li>
      </div>
    </header>
  );
}

export default Navbar;