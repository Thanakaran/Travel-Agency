// src/Pages/PackagesPage.js
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Navigation/NavBar";
import TitleCard from "../../Components/Cards/TitleCard";
import Footer from "../../Components/Home/Footer";
import { Container, CssBaseline, Grid } from "@mui/material";
import PackagesBg from "../../Assets/Images/PackagesBg.jpg";
import { fetchPackages } from "../../Actions/packageActions";
import TripCard from "../../Components/Cards/TripCard";

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const packagesData = await fetchPackages();
        setPackages(packagesData);
      } catch (error) {
        console.error("Failed to load packages:", error);
      }
    };

    loadPackages();
  }, []);

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <TitleCard title="Our Packages" bgImage={PackagesBg} />
      <Container>
        <Grid
          container
          spacing={2}
          width={"100%"}
          style={{ minHeight: "100vh", padding: "20px" }}
        >
          {packages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg._id}>
              <TripCard
                id={pkg._id}
                image={pkg.images[0]}
                duration={pkg.duration}
                location={pkg.name}
                country={pkg.destination}
                description={pkg.description[0].content}
                price={pkg.price}
              />
            </Grid>
          ))}
        </Grid>{" "}
      </Container>

      <Footer />
    </div>
  );
};

export default PackagesPage;
