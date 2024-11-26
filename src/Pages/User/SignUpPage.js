import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Box,
  useMediaQuery,
} from "@mui/material";
import { gsap } from "gsap";
import SignupImage from "../../Assets/Images/circle (4).jpeg";
import logo from "../../Assets/Images/logo.png";
import { theme } from "../../Theme";
import { registerUser } from "../../Actions/userActions";

const SignupPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const animateSignupForm = () => {
    gsap.from(".signup-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    animateSignupForm(); // Animate on component mount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userData = { fullName, email, password };
      const response = await dispatch(registerUser(userData));
      console.log("User registered successfully:", response);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle registration error (e.g., show error message)
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="flex-start"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {isMdUp && (
        <Grid item xs={12} md={6} height={"100vh"}>
          <Box style={{ height: "100%", overflow: "hidden" }}>
            <img
              src={SignupImage}
              alt="Signup"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <Grid container direction="column" spacing={1} paddingLeft={"5vw"}>
          <Box my={5} marginLeft={2} component={Link} href="/">
            <img src={logo} height={40} width={150} alt="Logo" />
          </Box>

          <Grid item>
            <Typography variant="h4" gutterBottom>
              <strong>Sign Up</strong>
            </Typography>
            <Typography variant="body2" gutterBottom color={"text.secondary"}>
              Create an account to get started.
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            className="signup-form"
            width={isMdUp ? "70%" : "90%"}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                margin="normal"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
