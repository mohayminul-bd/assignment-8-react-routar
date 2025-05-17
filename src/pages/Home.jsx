import React, { useState } from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import DoctorsCard from "../components/DoctorsCard";
import Loader from "../components/Loader";

const Home = () => {
  const data = useLoaderData();
  const [doctors, setDoctors] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setDoctors(data);
    const searchedDoctors = data.filter((doctor) =>
      doctor.name.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setDoctors(searchedDoctors);
  };
  if (!doctors) {
    return <Loader />;
  }
  return (
    <div className="py-5">
      <Hero handleSearch={handleSearch} />
      <div className=" ">
        <DoctorsCard doctors={doctors} />
      </div>
    </div>
  );
};

export default Home;
