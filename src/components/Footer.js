import { Box } from "@mui/system";
import logo from "../assets/logo.png";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-logo">
        <img className="footer-logo-img" src={logo} alt="QKart-icon"></img>
      </Box>
      <p className="footer-text">PAL Fashion House, Awas Vikas rudrapur,</p>
      <p className="footer-text">Contact no: 9536250175</p>
    </Box>
  );
};

export default Footer;
