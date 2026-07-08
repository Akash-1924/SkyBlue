import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="fixed navbar">
      
      <ul className=" md:block nav-links">
       
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;