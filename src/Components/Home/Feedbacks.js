import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import chinaWall from "../../Assets/Images/chinaWall.jpg";
import user1 from "../../Assets/Images/user1.jpeg";
import user2 from "../../Assets/Images/user2.jpeg";

const feedbacks = [
  {
    feedback:
      "My husband and I have been using this travel agency for years and they have never disappointed us.",
    userImage: user1, // Replace with actual image path
    userName: "John Doe",
    userCountry: "USA",
  },
  {
    feedback:
      "This agency provided us with the best travel experience we've ever had.",
    userImage: user2, // Replace with actual image path
    userName: "Jane Smith",
    userCountry: "Canada",
  },
];

const Feedbacks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height={isMobile ? "820px" : "600px"}
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${chinaWall})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* Main Heading */}
        <Box mb={4} width={isMobile ? "100%" : "60%"}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign={isMobile ? "center" : "left"}
          >
            Unforgettable Travel Experiences
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            gutterBottom
            fontWeight={200}
            textAlign={isMobile ? "center" : "left"}
          >
            Our customer's feedback is essential in building a great reputation
            and maintaining excellent service. By listening to our customer's
            needs, we can improve our offerings and provide an exceptional
            travel experience.
          </Typography>
        </Box>

        {/* Feedback Boxes */}
        <Grid
          container
          spacing={3}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          {feedbacks.map((feedback, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "rgba(27, 188, 155, 0.8)",
                  color: "white",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  {feedback.feedback}
                </Typography>
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ marginTop: "10px" }}
                >
                  <Grid item>
                    <Box
                      component="img"
                      src={feedback.userImage}
                      alt={feedback.userName}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {feedback.userName}
                    </Typography>
                    <Typography variant="body2">
                      {feedback.userCountry}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feedbacks;
