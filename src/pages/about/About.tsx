import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ paddingTop: "15px" }}>
        <Typography textAlign="center">Об авторе</Typography>
      </Container>
    </Box>
  );
};

export default About;
