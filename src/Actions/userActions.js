// src/Actions/actions.js
import axios from "axios";
import { authSuccess } from "../Reducers/authSlice";

// Configure Axios to send cookies with requests
const backendUrl = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

export const registerUser = (userData) => {
  return async (dispatch) => {
    console.log(backendUrl);
    try {
      const response = await axios.post(
        `${backendUrl}/users/register`,
        userData
      );

      const token = response.data.token;
      const user = response.data.user;

      // Set the token in cookie (example)
      document.cookie = `token=${token}; path=/`; // Adjust the cookie name and path as needed

      // Dispatch auth success action
      dispatch(authSuccess({ isAuthenticated: true, user }));

      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${backendUrl}/users/login`, userData);

      const token = response.data.token;
      const user = response.data.user;

      // Set the token in cookie (example)
      document.cookie = `token=${token}; path=/`; // Adjust the cookie name and path as needed

      // Dispatch auth success action
      dispatch(authSuccess({ isAuthenticated: true, user }));

      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };
};
