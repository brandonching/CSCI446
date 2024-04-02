import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/todo" className="navbar-item">
            Todo App
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/todo" className="button is-light">
                  Todo List
                </Link>
                <Link to="/todo/new" className="button is-light">
                  New Todo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
