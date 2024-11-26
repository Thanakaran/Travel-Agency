import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import logo from "../../Assets/Images/logo.png";
import { Container } from "@mui/material";

const NavBarLogin = () => {
  return (
    <Container>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "white", p: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <img src={logo} height={40} width={150} alt="Logo" />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBarLogin;
