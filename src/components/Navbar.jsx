import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="backdrop-blur-xs  fixed">
      <div className="hidden  h-screen  md:block ">
       <div class="w-64 grid grid-cols-1 items-center justify-between mx-auto p-4">
          <a
            href=""
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="src\components\icon.png"
              class="h-7"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
              [skyblue]
            </span>
          </a>
          <ul>
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
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
        </ul>
        </div>
      </div>

      <div className="block w-screen md:hidden ">
        <div class="h-14 flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            class="flex items-center  rtl:space-x-reverse"
          >
            <img
              src="src\components\icon.png"
              class="h-7"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
              [skyblue]
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul>
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
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
