import React, { useState } from "react";
import bannerImg from "../assets/banner-img-1.png";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="text-center space-y-4 md:px-20 px-4 bg-white md:py-10 py-5 rounded-lg">
        <h1 className="md:text-5xl text-3xl font-bold">
          Dependable Care, Backed by <br /> Trusted Professionals.
        </h1>
        <p className="text-gray-700">
          Dependable care tailored to you, delivered by trusted professionals,
          ensuring comfort, safety, <br /> and peace of mind, with your
          well-being as our top priority.
        </p>
        <div>
          <form
            className="flex sm:flex-row flex-col justify-center items-center md:gap-5"
            onSubmit={(e) => handleSearch(e, searchText)}
          >
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                className="grow"
                placeholder="Search"
              />
            </label>
            <button
              type="submit"
              className="btn btn-info rounded-full md:ml-5 md:mt-0 mt-5 text-white"
            >
              Search Now
            </button>
          </form>
        </div>
        <div className="flex items-center justify-around gap-3">
          <img
            className=" w-35 md:w-full mx-auto md:max-w-md"
            src={bannerImg}
            alt=""
          />
          <img
            className=" w-35 md:w-full mx-auto md:max-w-md"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
