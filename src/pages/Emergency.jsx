import React, { useState } from "react";
import { Link } from "react-router";

const Emergency = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage((prev) => !prev);
  };
  return (
    <div className="pt-5 -mb-50">
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 bg-gradient-to-br from-blue-200 via-green-200 to-violet-400 rounded-2xl">
        <button
          onClick={handleClick}
          className="btn btn-error text-white text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🚨 Emergency
        </button>

        {showMessage && (
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Emergency Page is Upcoming!
            </h2>
          </div>
        )}
        <Link to="/">
          <button className="px-5 py-2  mt-25 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Emergency;
