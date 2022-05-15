import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Table1 from "./img/table_1.png";
import Table2 from "./img/table_2.png";

const References = () => {
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
          Справочники
        </Typography>
        <Typography variant="h5">
          Узлы и веса квадратурной формулы Гаусса
        </Typography>
        <Box display="block" margin="15px auto" component="img" src={Table1} />
        <Typography variant="h5">
          Коэффициент Пуассона и модуль упругости Юнга
        </Typography>
        <Box display="block" margin="15px auto" component="img" src={Table2} />
        <Typography variant="h5" mb={5}>
          Коэффициент трения
        </Typography>
      </Container>
    </Box>
  );
};

export default References;
