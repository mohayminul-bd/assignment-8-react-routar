import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import StatsChart from "./StatsChart";

const DoctorsCard = ({ doctors }) => {
  const [displayDoctor, setDisplayDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  //
  // const [showAll, setShowAll] = useState(false);
  // useEffect(() => {
  //   if (showAll) {
  //     setDisplayPhones(phones);
  //   } else {
  //     setDisplayPhones(phones.slice(0, 6));
  //   }
  // }, [phones, showAll]);
  //
  useEffect(() => {
    if (showAll) {
      setDisplayDoctors(doctors);
    } else {
      setDisplayDoctors(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);
  return (
    <div className=" pt-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
        {displayDoctor.map((doctor) => (
          <Cards key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => {
            setShowAll((prv) => !prv);
            if (showAll) window.scrollTo(0, 400);
          }}
          className="btn btn-primary text-center items-center"
        >
          {showAll ? "Show Less " : "Show All Doctors"}
        </button>
      </div>
      <StatsChart />
    </div>
  );
};

export default DoctorsCard;
