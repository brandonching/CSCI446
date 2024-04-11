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
          <Link to="/project" className="navbar-item">
            Projects Todo App
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/project" className="button is-light">
                  Project List
                </Link>
                <Link to="/project/new" className="button is-light">
                  New Project
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
