// src/App.js
import React from "react";
import NavBar from "../../Components/Navigation/NavBar";
import Footer from "../../Components/Home/Footer";
import { Container, CssBaseline, Grid } from "@mui/material";
import TitleCard from "../../Components/Cards/TitleCard";
import PackagesBg from "../../Assets/Images/PackagesBg.jpg";
import ImageCardTwo from "../../Components/Cards/ImageCardTwo";

const TypologiesPage = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <TitleCard title="Typologies" bgImage={PackagesBg} />
      <Container>
        <Grid minHeight={"100vh"}>
          <ImageCardTwo
            caption={"Sports Activities"}
            description={"jhbjhbmbnb"}
            imageAlt={"Image"}
            imageSrc={PackagesBg}
          />{" "}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default TypologiesPage;
