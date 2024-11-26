import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Home/Footer";
import HomePage from "./Pages/User/HomePage";
import PackagesPage from "./Pages/User/PackagesPage";
import TypologiesPage from "./Pages/User/TypologiesPage";
import PackageDetailPage from "./Pages/User/PackageDetailPage";
import LoginPage from "./Pages/User/LoginPage";
import SignupPage from "./Pages/User/SignUpPage";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/typologies" element={<TypologiesPage />} />
        <Route path="/package/:packageId" element={<PackageDetailPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
