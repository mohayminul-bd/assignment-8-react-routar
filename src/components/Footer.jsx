import React from "react";
import { Link, NavLink } from "react-router";
import img from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div className="flex items-center gap-3">
          <img src={img} alt="" />
          <h1 className="text-2xl font-bold">Phudu</h1>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            to="/my-booking"
          >
            My-Booking
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            to="/blog"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </nav>
        <hr className=" border-t border-dashed border-gray-700" />
        <nav>
          <div className="grid grid-flow-col gap-6">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775
        1.017-.609 1.798-1.574 2.165-2.724
        -.951.564-2.005.974-3.127 1.195
        -.897-.957-2.178-1.555-3.594-1.555
        -3.179 0-5.515 2.966-4.797 6.045
        -4.091-.205-7.719-2.165-10.148-5.144
        -1.29 2.213-.669 5.108 1.523 6.574
        -.806-.026-1.566-.247-2.229-.616
        -.054 2.281 1.581 4.415 3.949 4.89
        -.693.188-1.452.232-2.224.084
        .626 1.956 2.444 3.379 4.6 3.419
        -2.07 1.623-4.678 2.348-7.29 2.04
        2.179 1.397 4.768 2.212 7.548 2.212
        9.142 0 14.307-7.721 13.995-14.646
        .962-.695 1.797-1.562 2.457-2.549z"
                ></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0
        -3.897.266-4.356 2.62-4.385 8.816
        .029 6.185.484 8.549 4.385 8.816
        3.6.245 11.626.246 15.23 0
        3.897-.266 4.356-2.62 4.385-8.816
        -.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                ></path>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667
        c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808
        c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                ></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48s1.32 2.98 2.98 2.98
        2.98-1.32 2.98-2.98S6.64 3.5 4.98 3.5zM2.4 21.5h5.16v-11H2.4v11zM9.6
        10.5v11h5.16v-6.16c0-1.48.02-3.4 2.08-3.4 2.08 0 2.08 1.78 2.08 3.5v6.06h5.16v-6.5c0-3.5-.76-6.16-4.92-6.16
        -2.08 0-3.28 1.16-3.8 2.28h-.08V10.5H9.6z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
