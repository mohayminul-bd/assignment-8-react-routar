import React, { useState } from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import DoctorsCard from "../components/DoctorsCard";

const Home = () => {
  const data = useLoaderData();
  const [doctors, setDoctors] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedDoctors = data.filter((doctor) =>
      doctor.name.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setDoctors(searchedDoctors);
  };
  console.log(data);
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
