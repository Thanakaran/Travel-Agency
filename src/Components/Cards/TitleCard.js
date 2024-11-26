import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TitleCard = ({ title, bgImage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "350px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
          zIndex: 1,
        }}
      />
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            position: "relative",
            zIndex: 2,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>{" "}
      </Container>
    </Box>
  );
};

export default TitleCard;
