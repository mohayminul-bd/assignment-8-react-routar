import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getBooking, removeDoctors } from "../utils/Doctor";
import BookingCard from "../components/BookingCard";
import EmptyState from "../ui/EmptyState";

import { ToastContainer, toast } from "react-toastify";
import PriceCharts from "../components/PriceCharts";

const MyBooking = () => {
  const [displayDoctor, setDisplayDoctors] = useState([]);
  // console.log(displayDoctor);
  useEffect(() => {
    const saveDoctors = getBooking();
    setDisplayDoctors(saveDoctors);
  }, []);

  const handleDelete = (id) => {
    removeDoctors(id);
    setDisplayDoctors(getBooking);

    toast.warn("Appointment booked Cancel");
  };
  if (displayDoctor.length < 1) return <EmptyState />;

  return (
    <div className=" pt-10 ">
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 "></div> */}
      <div>
        <PriceCharts displayDoctor={displayDoctor} />
      </div>
      <div className="text-center space-y-2 md:my-14 my-6">
        <h1 className="md:text-4xl text-2xl font-bold">
          My Today Appointments
        </h1>
        <p className="text-gray-400">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="text-center mt-5">
        <div>
          {displayDoctor.map((doctor) => (
            <BookingCard
              key={doctor.id}
              doctor={doctor}
              handleDelete={handleDelete}
            />
          ))}

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
