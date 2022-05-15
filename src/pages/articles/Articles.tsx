import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Articles = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ paddingTop: "15px" }}>
        <Typography textAlign="center">Статьи</Typography>
      </Container>
    </Box>
  );
};

export default Articles;
