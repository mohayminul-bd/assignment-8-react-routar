import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
  return (
    <div className="md:py-16 py-5 text-center">
      <h1 className="mb-3 text-2xl md:text-4xl font-bold ">
        You Have Not Booked any Appointment
      </h1>
      <p className=" mb-5  text-xl text-gray-600  ">
        Book your medical appointment easily with our platform. Choose from
        expert doctors, <br /> view their profiles, and schedule consultations
        at your convenience.
      </p>
      <Link to="/">
        <button className="btn btn-outline btn-info  px-20 rounded-full">
          Book an Appointment
        </button>
      </Link>
    </div>
  );
};

export default EmptyState;
