import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "16px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="20px"
      pt="20px"
    >
      Made with ❤️ & Vite
    </Typography>
  </Box>
);

export default Footer;
