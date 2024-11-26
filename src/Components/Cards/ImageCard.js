import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ImageCard = ({ imageSrc, imageAlt, caption }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "15px",
        overflow: "hidden",
        width: "320px",
        height: "80px",
      }}
    >
      <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "120px",
            color: "#fff",
            padding: "5px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {caption}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ImageCard;
