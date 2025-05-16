import React from "react";
import { useLoaderData, useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Button from "../ui/Button";
import { addBooking } from "../utils/Doctor";
const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  const {
    image,
    name,
    education,
    details,
    consultation_fee,
    availability,
    registration_number,
  } = singleDoctor || {};

  const handleBooking = () => {
    addBooking(singleDoctor);
  };

  return (
    <div className="pt-6 gap-7">
      <div className="md:px-30 p-5 md:py-10 bg-white rounded-2xl text-center">
        <h1 className="md:text-4xl text-2xl font-bold">
          Doctor's Profile Details
        </h1>
        <p className="text-gray-500">{details}</p>
        <p></p>
      </div>

      <div className="md:flex items-center p-5 md:p-11 md:pl-25  gap-5 md:mt-8  mt-5 bg-white rounded-2xl ">
        <div className="sm:items-center sm:justify-center">
          <img className="w-50 rounded-2xl" src={image} alt="" />
        </div>
        <div className=" md:pl-5 space-y-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-400">{education[0].degree}</p>
          <p className="font-bold">Working at</p>
          <h3 className="text-2xl font-bold">{education[0].institute}</h3>
          <hr className=" border-t border-dashed border-gray-400" />
          <p className="text-gray-400 flex items-center">
            <span>
              <PiTrademarkRegistered />
            </span>
            <span>{registration_number}</span>
          </p>
          <hr className=" border-t border-dashed border-gray-400" />
          <p className="font-bold">
            availability: <span className="text-gray-500">{availability}</span>
          </p>
          <p>
            <span className="font-bold">consultation_fee: </span>
            <span className="text-blue-600">
              Taka: {consultation_fee} Per consultation
            </span>
          </p>
        </div>
      </div>
      <div className=" md:mt-8 space-y-4 md:py-10  py-5 mt-5 bg-white rounded-2xl">
        <h3 className="text-2xl font-bold text-center">Book An Appointment</h3>
        <hr className=" border-t border-dashed border-gray-400 mx-5" />
        <div className="flex items-center justify-between p-4">
          <p className="font-bold">Availability</p>
          <p className="text-green-600 bg-green-100 border-green-500 border rounded-full p-1">
            Doctor Availability Today
          </p>
        </div>
        <hr className=" border-t border-dashed border-gray-400 mx-5" />
        <p className="text-orange-400 md:bg-amber-100 p-1 rounded-full md:flex md:items-center md:justify-center gap-2  mx-5">
          <span>
            <HiOutlineExclamationCircle />
          </span>
          <span>
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </span>
        </p>
        <div className="px-15">
          {/* <Link to="/my-booking">
            <button class="btn w-full rounded-full  btn-primary text-center">
              Book Appointment Now
            </button>
          </Link> */}
          <div onClick={handleBooking}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
