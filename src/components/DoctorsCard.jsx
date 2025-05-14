import React from "react";
import Cards from "./Cards";

const DoctorsCard = ({ doctors }) => {
  return (
    <div className=" pt-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
        {doctors.map((doctor) => (
          <Cards key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsCard;
