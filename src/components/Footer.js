import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "60px",
          width: "100%",
          background: "#4B4B4B",
          marginBottom:"0px"
        }}
      >
        <Typography
          color="white"
          fontWeight="bold"
          align="center"
          mt={8}
          pt={2}
        >
          Made with ❤️ for the community
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
