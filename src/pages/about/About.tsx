import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
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
          Контактные данные
        </Typography>
        <Typography variant="h5">Пожарская Елизавета Дмитриевна</Typography>
        <Typography variant="h6">Cтудент группы МИН21</Typography>
        <Typography variant="subtitle1">
          Почта -{" "}
          <a href="mailto:pozharskaya.elizaveta@gmail.com">
            pozharskaya.elizaveta@gmail.com
          </a>
        </Typography>
        <Typography variant="subtitle1">
          Телефон - <a href="tel:89185131879">89185131879</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
