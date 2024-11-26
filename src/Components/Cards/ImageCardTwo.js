import React from "react";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";

const ImageCardTwo = ({ imageSrc, imageAlt, caption, description }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "15px",
        overflow: "hidden",
        width: isMobile ? "150px" : "250px",
        height: isMobile ? "200px" : "350px",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          padding: "25px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
          {caption}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#fff", fontWeight: 200, fontSize: 12 }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ImageCardTwo;
