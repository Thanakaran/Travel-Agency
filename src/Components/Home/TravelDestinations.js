import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCardTwo from "../Cards/ImageCardTwo";
import Destination1 from "../../Assets/Images/Destination (1).jpg";
import Destination2 from "../../Assets/Images/Destination (2).jpg";
import Destination3 from "../../Assets/Images/Destination (3).jpg";
import Destination4 from "../../Assets/Images/Destination (4).jpeg";
import { grey } from "@mui/material/colors";
import { ThemeColors } from "../../Theme";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const TravelDestinations = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    // GSAP animation for image cards with ScrollTrigger
    imageRefs.current.forEach((image, index) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "top 80%", // Animation starts when the top of the card is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation when triggered
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      bgcolor={grey[100]}
      sx={{
        position: "relative",
        padding: "40px 0",
        minHeight: "80vh",
      }}
    >
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
              Next Adventure
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={isMobile ? "h4" : "h2"}>
              Travel Destinations Available Worldwide
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" fontSize={12} color={"text.secondary"}>
              We have compiled a list of top destinations across the globe,
              scoured the world for the most alluring and fascinating places to
              visit. From the beautiful beaches of the Caribbean to the majestic
              mountains of Europe and the vibrant cities of Asia, our
              destination list has something for everyone.
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
          {[Destination1, Destination3, Destination2, Destination4].map(
            (destination, index) => (
              <Grid
                item
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
              >
                <ImageCardTwo
                  imageSrc={destination}
                  imageAlt={`Destination ${index + 1}`}
                  caption={`Caption ${index + 1}`}
                  description={`Description ${index + 1}`}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default TravelDestinations;
