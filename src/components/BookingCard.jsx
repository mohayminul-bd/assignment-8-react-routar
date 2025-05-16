import React from "react";

const BookingCard = ({ doctor, handleDelete }) => {
  const { name, education, consultation_fee, id } = doctor || {};
  return (
    <div>
      <div className="bg-white space-y-2 text-left rounded-2xl md:p-7 p-4 mt-5">
        <h4 className="text-xl">{name}</h4>
        <div className="flex items-center justify-between">
          <p>{education[0].degree}</p>
          <p>Appointment Fee : {consultation_fee}</p>
        </div>
        <hr className=" border-t border-dashed border-gray-400 py-2" />
        <div onClick={() => handleDelete(id)}>
          <button className="btn btn-outline btn-secondary w-full rounded-full">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
