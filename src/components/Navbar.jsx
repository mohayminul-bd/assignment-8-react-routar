import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const detailsRef = useRef(null);

  // outside click handle
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (detailsRef.current && !detailsRef.current.contains(e.target)) {
        detailsRef.current.open = false;
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>

      {/* Products Dropdown */}
      <li>
        <details ref={detailsRef}>
          <summary className="font-medium cursor-pointer">Products</summary>

          <ul className="p-2 bg-base-100 rounded-box w-40">
            <li onClick={() => (detailsRef.current.open = false)}>
              <NavLink to="/products/perfume">Perfume</NavLink>
            </li>

            <li onClick={() => (detailsRef.current.open = false)}>
              <NavLink to="/products/attar">Attar</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          Brand<span className="text-neutral">Name</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-outline btn-primary mr-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
