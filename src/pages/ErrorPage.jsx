import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
          <p className="text-lg text-gray-700 mb-6">
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
