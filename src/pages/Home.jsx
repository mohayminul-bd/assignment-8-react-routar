import React from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router";
import DoctorsCard from "../components/DoctorsCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="py-5">
      <Hero />
      <div className=" ">
        <DoctorsCard doctors={data} />
      </div>
    </div>
  );
};

export default Home;
