// src/App.js
import React from "react";
import NavBar from "../../Components/Navigation/NavBar";
import Banner from "../../Components/Home/Banner";
import PlanATrip from "../../Components/Home/PlanATrip";
import Feedbacks from "../../Components/Home/Feedbacks";
import TravelDestionations from "../../Components/Home/TravelDestinations";
import TravelPackages from "../../Components/Home/TravelPackages";
import Footer from "../../Components/Home/Footer";
import { CssBaseline } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Banner />
      <PlanATrip />
      <Feedbacks />
      <TravelDestionations />
      <TravelPackages />
      <Footer />
    </div>
  );
};

export default HomePage;
