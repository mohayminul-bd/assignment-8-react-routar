import React from "react";
import { Link } from "react-router";
const Contact = () => {
  return (
    <div>
      <div className="min-h-screen pt-5 flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486800.png"
          alt="Coming Soon"
          className="w-64 h-64 mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Contact Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This page will be available soon. Stay tuned!
        </p>
        <Link to="/">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
