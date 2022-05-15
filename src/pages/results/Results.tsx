import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Results = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ paddingTop: "15px" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Результаты
        </Typography>
      </Container>
    </Box>
  );
};

export default Results;
