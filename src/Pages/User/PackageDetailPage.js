import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Container,
} from "@mui/material";
import NavBar from "../../Components/Navigation/NavBar";
import Footer from "../../Components/Home/Footer";
import TitleCard from "../../Components/Cards/TitleCard";
import PackagesBg from "../../Assets/Images/PackagesBg.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { ThemeColors } from "../../Theme";
import { fetchPackageDetails } from "../../Actions/packageActions";

const PackageDetailPage = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        const data = await fetchPackageDetails(packageId);
        setPackageDetails(data);
      } catch (error) {
        console.error("Failed to fetch package details", error);
      }
    };

    getPackageDetails();
  }, [packageId]);

  if (!packageDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ bgcolor: "gray.100" }}>
      <CssBaseline />
      <NavBar />
      <TitleCard title={packageDetails.name} bgImage={PackagesBg} />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Section 1 */}
          <Grid
            item
            xs={12}
            sx={{ bgcolor: "grey.200", p: 2, minHeight: "150px" }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4">{packageDetails.name}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <LocationOnIcon color="primary" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 1 }}
                    color="text.secondary"
                  >
                    {packageDetails.destination}
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} md={6} spacing={2}>
                <Grid item xs={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTimeIcon color="primary" />
                    <Box sx={{ ml: 1 }}>
                      <Typography color="text.secondary">Duration</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {packageDetails.duration}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ThumbUpIcon color="primary" />
                    <Box sx={{ ml: 1 }}>
                      <Typography color="text.secondary">Difficulty</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {packageDetails.difficulty}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon color="primary" />
                    <Box sx={{ ml: 1 }}>
                      <Typography color="text.secondary">Min Age</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {packageDetails.minAge}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Section 2 */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mt: 4 }}>
              {packageDetails.description.map((item, index) => (
                <Box key={index} sx={{ mt: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" fontWeight={"bold"}>
                itinerary
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                We have carefully planned out each day to give you the best
                possible experience. From exploring historic landmarks to
                tasting delicious local cuisine, each day is packed with
                adventure and excitement. Join us as we take you on a journey
                through some of the most fascinating destinations in the world.
              </Typography>
              {packageDetails.itinerary.map((item, index) => (
                <Box key={index} sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={ThemeColors.themeGreen}
                  >
                    Day {item.day}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.activities}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)" }}
            >
              <CardContent>
                <Box p={2}>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Price</span>
                    <span>${packageDetails.price}</span>
                  </Typography>
                </Box>
                <Divider />
                <Box p={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      fontWeight: "bold",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Date</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{packageDetails.date}</span>
                  </Typography>
                </Box>
                <Divider />
                <Box
                  p={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Adults</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <span>{packageDetails.adults}</span>
                    </Typography>
                  </Box>
                  <Box alignItems="center" gap={1} sx={{ display: "flex" }}>
                    <RemoveCircle color="primary" />
                    <Typography>4</Typography>
                    <AddCircle color="primary" />
                  </Box>
                </Box>
                <Divider />
                <Box
                  p={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Children</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <span>{packageDetails.children}</span>
                    </Typography>
                  </Box>
                  <Box alignItems="center" gap={1} sx={{ display: "flex" }}>
                    <RemoveCircle color="primary" />
                    <Typography>1</Typography>
                    <AddCircle color="primary" />
                  </Box>
                </Box>
                <Divider />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: ThemeColors.themeGreen,
                    px: 2,
                    m: 2,
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default PackageDetailPage;
