import React from "react";
import { Link } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";

const Cards = ({ doctor }) => {
  const { name, image, education, registration_number, experience, id } =
    doctor || {};
  return (
    <div>
      <div className="card bg-base-100  shadow-sm md:p-5">
        <figure>
          <img className="w-40 h-35 rounded-2xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-1">
            <button className="btn btn-soft btn-accent rounded-full ">
              Available
            </button>
            <button className="btn btn-soft btn-info rounded-full">
              {experience} Experience
            </button>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>
            {education[0].degree} , {education[0].institute}
          </p>
          <p>{education.degree}</p>
          <hr className=" border-t border-dashed border-gray-400" />
          <p className="flex items-center gap-1">
            <span>
              <PiTrademarkRegistered />
            </span>
            <span>{registration_number}</span>
          </p>
          <div className="card-actions justify-center">
            <Link to={`/doctor-details/${id}`}>
              <button className="btn btn-outline btn-info w-full px-20 rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
