import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import bgImage from "../../Assets/Images/banner-bg.png";
import Circle2 from "../../Assets/Images/circle (1).jpeg";
import Circle1 from "../../Assets/Images/circle (2).jpeg";
import Circle3 from "../../Assets/Images/circle (3).jpeg";
import Circle4 from "../../Assets/Images/circle (4).jpeg";
import line from "../../Assets/Images/line.png";
import { gsap } from "gsap";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) {
      // Line reveal animation
      gsap.fromTo(
        ".line",
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 3, ease: "power2.out" }
      );

      // Zoom-in animation on page load
      gsap.fromTo(
        ".circle",
        { scale: 0 },
        { scale: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
      );

      // Continuous random movement animation
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle) => {
        gsap.to(circle, {
          y: "random(-20, 20)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: Math.random() * 0.5,
        });
      });

      // Slide-in animation for Typography set
      gsap.fromTo(
        ".typography-set",
        { x: "-100%" },
        { x: "0%", duration: 1, ease: "power2.out", stagger: 0.2 }
      );
      gsap.fromTo(
        ".Paper-set",
        { y: "-100%" },
        { y: "0%", duration: 1, ease: "power2.out", stagger: 0.2 }
      );
    }
  }, [isMdUp]);

  return (
    <Box
      sx={{
        position: "relative",
        height: `calc(100vh - 60px)`,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: isMobile ? "20px" : "40px",
      }}
    >
      {isMdUp && (
        <Box
          className="line"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%", // Adjust width as needed
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: -2,
          }}
        >
          <img
            src={line}
            alt="line"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      )}
      {/* Circles Container */}
      {isMdUp && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%", // Adjust width as needed
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: -1, // Ensure circles are behind text content
          }}
        >
          <Box
            className="circle"
            sx={{
              position: "absolute",
              top: "2vh",
              right: "6vw",
              width: "40%",
              height: "48%",
              borderRadius: "50%", // Make the box circular
              overflow: "hidden", // Hide any overflow from images
            }}
          >
            <img
              src={Circle1}
              alt="Circle1"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            className="circle"
            sx={{
              position: "absolute",
              bottom: "10vh",
              left: "5vw",
              width: "38%",
              height: "46%",
              borderRadius: "50%", // Make the box circular
              overflow: "hidden", // Hide any overflow from images
            }}
          >
            <img
              src={Circle2}
              alt="Circle2"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            className="circle"
            sx={{
              position: "absolute",
              width: "20%",
              height: "25%",
              top: "10vh",
              left: "8vw",
              borderRadius: "50%", // Make the box circular
              overflow: "hidden", // Hide any overflow from images
            }}
          >
            <img
              src={Circle3}
              alt="Circle3"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            className="circle"
            sx={{
              position: "absolute",
              width: "20%",
              height: "25%",
              bottom: "10vh",
              right: "12vw",
              borderRadius: "50%", // Make the box circular
              overflow: "hidden", // Hide any overflow from images
            }}
          >
            <img
              src={Circle4}
              alt="Circle4"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      )}

      {/* Banner Content */}
      <Container>
        <Grid
          container
          direction="column"
          spacing={4}
          sx={{ maxWidth: "600px", color: theme.palette.text.primary }}
        >
          <Grid item className="typography-set">
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              It's a Big World Out there,{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Go & Explore
              </Box>
            </Typography>
          </Grid>
          <Grid item className="typography-set">
            <Typography variant={isMobile ? "h6" : "h4"} color="textSecondary">
              Travel, Discover, Experience More{" "}
            </Typography>
          </Grid>
          <Grid item className="Paper-set">
            <Paper elevation={3} sx={{ padding: "16px" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <SearchIcon color="primary" />
                    <Box>
                      <Typography variant="body2" fontWeight={"bold"}>
                        Search
                      </Typography>
                      <TextField
                        variant="standard"
                        placeholder="Insert Keyword"
                        InputProps={{
                          disableUnderline: true,
                          style: { fontSize: "12px" },
                        }}
                        fullWidth
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LocationOnIcon color="primary" />
                    <Box>
                      <Typography variant="body2" fontWeight={"bold"}>
                        Location
                      </Typography>
                      <TextField
                        variant="standard"
                        placeholder="Select Destination"
                        InputProps={{
                          disableUnderline: true,
                          style: { fontSize: "12px" },
                        }}
                        fullWidth
                      />{" "}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button variant="contained" color="primary" fullWidth>
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
