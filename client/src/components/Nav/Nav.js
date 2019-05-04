import React from "react";
import ('./Nav.css');

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navBar">
    <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/Quotes">
        Quotes
      </a>
      
      <a className="navbar-brand" href="/GameApp">
        Games
      </a>
      <a className="navbar-brand" href="/Recipe">
        Recipes
      </a>
    </nav>
  );
}

export default Nav;