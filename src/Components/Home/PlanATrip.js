import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container, useMediaQuery } from "@mui/material";
import ImageCard from "../Cards/ImageCard";
import CityWalksTourImage from "../../Assets/Images/Section (1).png";
import ElectricBikesImage from "../../Assets/Images/Section (2).png";
import SkyscrapersViewImage from "../../Assets/Images/Section (3).png";
import CityImage from "../../Assets/Images/Card-bg.png";
import { theme, ThemeColors } from "../../Theme";
import TripCard from "../Cards/TripCard";
import { grey } from "@mui/material/colors";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const trips = [
  {
    image: CityImage,
    duration: "1 Week",
    location: "Mountain Name",
    country: "Thailand",
    description:
      "A beautiful journey through the mountains of Thailand.A beautiful journey through the mountains of Thailand.",
    price: "$1000",
  },
  {
    image: CityImage,
    duration: "1 Week",
    location: "Mountain Name",
    country: "Thailand",
    description:
      "A beautiful journey through the mountains of Thailand.A beautiful journey through the mountains of Thailand.",
    price: "$1000",
  },
  {
    image: CityImage,
    duration: "1 Week",
    location: "Mountain Name",
    country: "Thailand",
    description:
      "A beautiful journey through the mountains of Thailand.A beautiful journey through the mountains of Thailand.",
    price: "$1000",
  },
  // Add more trip objects here as needed
];

const PlanATrip = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageCardsRef = useRef([]);
  const tripCardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for image cards with ScrollTrigger
    imageCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Animation starts when the top of the card is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation when triggered
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });

    // GSAP animation for trip cards with ScrollTrigger
    tripCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 70%", // Animation starts when the top of the card is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation when triggered
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <Box bgcolor={grey[100]} sx={{ padding: "40px 0" }}>
      <Container>
        {/* Description Section */}
        <Grid
          container
          direction="column"
          spacing={2}
          width={isMobile ? "100%" : "60%"}
        >
          <Grid item>
            <Typography
              variant="subtitle1"
              fontSize={20}
              color={ThemeColors.themeGreen}
            >
              Dream Vacation Destination
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={isMobile ? "h4" : "h2"}>
              Plan the Trip of a Lifetime with Ease
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" fontSize={12} color={"text.secondary"}>
              Whether you're looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </Typography>
          </Grid>
        </Grid>

        {/* Images Section */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            marginBottom: "60px",
            justifyContent: "space-between",
          }}
        >
          {[CityWalksTourImage, ElectricBikesImage, SkyscrapersViewImage].map(
            (image, index) => (
              <Grid
                item
                key={index}
                ref={(el) => (imageCardsRef.current[index] = el)}
              >
                <ImageCard
                  imageSrc={image}
                  imageAlt={`Image ${index + 1}`}
                  caption={`Caption ${index + 1}`}
                />
              </Grid>
            )
          )}
        </Grid>

        {/* Trip Cards Section */}
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", justifyContent: "space-between" }}
        >
          {trips.map((trip, index) => (
            <Grid
              item
              key={index}
              ref={(el) => (tripCardsRef.current[index] = el)}
            >
              <TripCard {...trip} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PlanATrip;
