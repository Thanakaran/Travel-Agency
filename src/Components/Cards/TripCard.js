import React from "react";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ThemeRandomColors } from "../../Theme";
import { grey } from "@mui/material/colors";

const getRandomColor = () => {
  const colorValues = Object.values(ThemeRandomColors);
  const randomIndex = Math.floor(Math.random() * colorValues.length);
  return colorValues[randomIndex];
};

const TripCard = ({
  id,
  image,
  duration,
  location,
  country,
  description,
  price,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const randomColor = getRandomColor();

  const handleDetailsClick = () => {
    navigate(`/package/${id}`);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: "450px",
        width: "320px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)", // Customize the shadow as needed
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        sx={{ height: "150px", width: "100%", objectFit: "cover" }}
      />
      <Box p={2}>
        {/* Duration Section */}
        <Paper
          elevation={0}
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Customize the shadow as needed
          }}
        >
          <AccessTimeIcon sx={{ color: randomColor }} />
          <Typography variant="body2" sx={{ marginLeft: "10px" }}>
            Duration: {duration}
          </Typography>
        </Paper>

        {/* Trip Info Section */}
        <Box sx={{ padding: "10px", marginTop: "20px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {location}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <LocationOnIcon sx={{ color: randomColor }} />
            <Typography
              variant="body2"
              color={"text.secondary"}
              sx={{ marginLeft: "5px" }}
            >
              {country}
            </Typography>
          </Box>

          {/* Divider */}
          <Divider sx={{ margin: "10px 0" }} />

          {/* Description */}
          <Typography
            variant="body2"
            color={"text.secondary"}
            sx={{
              fontSize: "12px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>

          {/* Divider */}
          <Divider sx={{ margin: "10px 0" }} />

          {/* Footer Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: randomColor, color: "white" }}
              onClick={handleDetailsClick} // Add onClick handler
            >
              Details
            </Button>
            <Typography variant="h6" fontWeight={"bold"}>
              {price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default TripCard;
