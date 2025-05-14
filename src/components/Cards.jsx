import React from "react";

const Cards = ({ doctor }) => {
  const { name, image, education } = doctor || {};
  return (
    <div>
      <div className="card bg-base-100 w-70 shadow-sm md:p-5">
        <figure>
          <img className="w-40 h-35 rounded-b-xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {education[0].degree} , {education[0].institute}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-info w-full rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
