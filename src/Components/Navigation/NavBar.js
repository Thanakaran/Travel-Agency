import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../Assets/Images/logo.png";
import { Container, Typography } from "@mui/material";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const navItems = ["Home", "Travel", "Packages", "Shop", "Blog", "Contact Us"];

  return (
    <Container>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "white", p: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box component={Link} href="/">
            <img src={logo} height={40} width={150} alt="Logo" />
          </Box>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="end"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
                keepMounted
              >
                {navItems.map((text) => (
                  <MenuItem
                    key={text}
                    component={Link}
                    to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                    onClick={handleMenuClose}
                  >
                    {text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((text) => (
                <Typography
                  key={text}
                  color="inherit"
                  component={Link}
                  to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  sx={{ textDecoration: "none" }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          )}
          {!isMobile && (
            <Button
              color="primary"
              variant="contained"
              sx={{ px: "25px", color: "white" }}
              onClick={navigateToLogin}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
