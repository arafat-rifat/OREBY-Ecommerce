import React from "react";
import Banner from "../components/Banner";
import AdditionalInfo from "../components/AdditionalInfo";
import Add from "../components/Add";
import NewArrival from "../components/NewArrival";
import BestSaller from "../components/BestSaller";
import MiddleAdvertisement from "../components/MiddleAdvertisement";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Add />
      <NewArrival />
      <BestSaller />
      <MiddleAdvertisement />
      <Offer />
    </>
  );
};

export default Home;
