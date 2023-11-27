import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/other">
                Other stuff
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
