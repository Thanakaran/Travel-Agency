// src/Actions/packageActions.js
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchPackages = async () => {
  try {
    // console.log(API_BASE_URL);
    const response = await axios.get(`${API_BASE_URL}/packages`);
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};

export const fetchPackageDetails = async (packageId) => {
  try {
    console.log(packageId);
    const response = await axios.get(`${API_BASE_URL}/packages/${packageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching package details:", error);
    throw error;
  }
};
