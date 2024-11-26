import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import footerBg from "../../Assets/Images/footerbg.jpg";
import footerBgmobile from "../../Assets/Images/footerbgmobile.jpg";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height={isMobile ? "500px" : "350px"}
      sx={{
        position: "relative",
        backgroundImage: isMobile
          ? `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${footerBgmobile})`
          : `linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${footerBg})`,
        backgroundSize: "cover",
        color: "white",
        py: isMobile ? 4 : 8,
        px: 2,
      }}
    >
      <Container>
        <Grid container spacing={isMobile ? 4 : 6} alignItems="flex-start">
          {/* Left Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Travel beyond your imagination, with our Travel Agency!
            </Typography>
          </Grid>

          {/* Center Column - Address and Social Icons */}
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Address:
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: 12 }}>
                  <br /> 1234 Main St,
                  <br /> City,
                  <br /> Country{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <IconButton>
                  <Facebook sx={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <Twitter sx={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <Instagram sx={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column - Contact */}
          <Grid item xs={12} md={4}>
            <Box textAlign={isMobile ? "left" : "right"}>
              <Typography variant="body1" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body1">
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:info@travel.com"
                >
                  info@travel.com
                </Button>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Phone: +123 456 7890
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
