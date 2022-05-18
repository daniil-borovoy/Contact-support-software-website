import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const About: FC = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ padding: "15px", wordBreak: "break-word" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Контактные данные
        </Typography>
        <Typography fontWeight="bold" variant="h5">
          Пожарская Елизавета Дмитриевна
        </Typography>
        <Typography variant="h6">
          Cтудент группы <b>МИН21</b>
        </Typography>
        <Typography fontWeight="bolder" variant="subtitle1">
          Почта:{" "}
          <a href="mailto:pozharskaya.elizaveta@gmail.com">
            pozharskaya.elizaveta@gmail.com
          </a>
        </Typography>
        <Typography fontWeight="bolder" variant="subtitle1">
          Телефон: <a href="tel:89185131879">89185131879</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
