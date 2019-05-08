import React from "react";
import ('./Nav.css');

function Nav() {
  return (
    //<nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navBar">
    <nav className="navbar navbar-default" id="navBar">

    <a className="navbar-brand" href="/">
       <font color="white">Home</font> 
      </a>
      <a className="navbar-brand" href="/Quotes">
        <font color="White">Quotes</font>
      </a>
      <a className="navbar-brand" href="/GameApp">
        <font color= "white">Game</font>
      </a>
      <a className="navbar-brand" href="/Recipe">
        <font color="white">Recipes</font>
      </a>
    </nav>
  );
}

export default Nav;