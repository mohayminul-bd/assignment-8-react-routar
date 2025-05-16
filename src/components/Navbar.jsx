import React from "react";
import { Link, NavLink } from "react-router";
import img from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/my-booking"
              >
                My-Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/blog"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="font-bold text-2xl text-green-500">
          <div className="flex items-center gap-2">
            <img className="w-7" src={img} alt="" />
            <h2>Phudu</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/my-booking"
            >
              My-Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
