import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";

const TravelPackages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      bgcolor="#F5F5F5"
      py={isMobile ? 4 : 8}
      textAlign="center"
      justifyContent={"center"}
    >
      <Container justifyContent={"center"}>
        <Typography variant="subtitle1" gutterBottom color={"primary"}>
          Clear Price
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Affordable Travel Packages
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          We believe that everyone deserves to experience their dream vacation
          without breaking the bank. That's why we offer a price section on our
          website that features a range of affordable travel.
        </Typography>
        <Grid
          container
          spacing={1}
          mt={4}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                height: "400px",

                borderRadius: "15px",
                backgroundColor: "#6E6E6E",
                textAlign: "center",
                py: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="white"
                gutterBottom
              >
                Half Board
              </Typography>
              <Typography variant="h2" color="white" gutterBottom>
                $999
              </Typography>
              <Typography variant="body1" color="white" mb={2} fontWeight={200}>
                Transfers from Airport
                <br /> Minimum 3 Star Hotel
                <br /> Alcoholic beverages
                <br />
                Incl. Museum Tickets
                <br />
                Meals in Restaurants
              </Typography>
              <Button variant="contained" color="primary">
                View All
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                height: "450px",
                borderRadius: "15px",
                backgroundColor: theme.palette.primary.main,
                textAlign: "center",
                py: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="white"
                gutterBottom
              >
                All Inclusive
              </Typography>
              <Typography variant="h2" color="white" gutterBottom>
                $1299
              </Typography>
              <Typography variant="body1" color="white" mb={2} fontWeight={200}>
                Transfers from Airport
                <br /> Minimum 3 Star Hotel
                <br /> Alcoholic beverages
                <br />
                Incl. Museum Tickets
                <br />
                Meals in Restaurants
              </Typography>
              <Button variant="contained" color="primary">
                View All
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                height: "400px",
                borderRadius: "15px",
                backgroundColor: "#434A54",
                textAlign: "center",
                py: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="white"
                gutterBottom
              >
                Excursions Included
              </Typography>
              <Typography variant="h2" color="white" gutterBottom>
                $1499
              </Typography>
              <Typography variant="body1" color="white" mb={2} fontWeight={200}>
                Transfers from Airport
                <br /> Minimum 3 Star Hotel
                <br /> Alcoholic beverages
                <br />
                Incl. Museum Tickets
                <br />
                Meals in Restaurants
              </Typography>
              <Button variant="contained" color="primary">
                View All
              </Button>
            </Paper>
          </Grid>
        </Grid>{" "}
      </Container>
    </Box>
  );
};

export default TravelPackages;
