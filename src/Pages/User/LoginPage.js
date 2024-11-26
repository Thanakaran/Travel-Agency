import React, { useState } from "react";
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
import LoginImage from "../../Assets/Images/circle (3).jpeg";
import logo from "../../Assets/Images/logo.png";
import { theme } from "../../Theme";
import { loginUser } from "../../Actions/userActions";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const animateLoginForm = () => {
    gsap.from(".login-form", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const userData = { email, password };
      const response = await dispatch(loginUser(userData));
      console.log("User logged in successfully:", response);
      // Handle successful login (e.g., redirect to dashboard page)
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error (e.g., show error message)
    }
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="flex-start"
      bgcolor={"grey.100"}
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Right Side - Login Form */}
      <Grid item xs={12} md={6}>
        <Grid container direction="column" spacing={1} paddingLeft={"10vw"}>
          <Box my={5} marginLeft={2} component={Link} href="/">
            <img src={logo} height={40} width={150} alt="Logo" />
          </Box>

          <Grid item>
            <Typography variant="h4" gutterBottom>
              <strong>Login</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Enter your credentials to access your account.
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            className="login-form"
            width={isMdUp ? "70%" : "90%"}
          >
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
              <Typography variant="body2">
                Don't have an account? <Link href="/signup">Sign up</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: "1rem" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Left Side - Image */}
      {isMdUp ? (
        <Grid item xs={12} md={6} height={"100vh"}>
          <div style={{ height: "100%", overflow: "hidden" }}>
            <img
              src={LoginImage}
              alt={`Circle`}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default LoginPage;
