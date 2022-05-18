import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Table1 from "./img/table_1.png";
import Table2 from "./img/table_2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Узлы и веса квадратурной формулы Гаусса
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              width="100%"
              maxWidth={500}
              display="block"
              margin="15px auto"
              component="img"
              src={Table1}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Коэффициент Пуассона и модуль упругости Юнга
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="block"
              width="100%"
              maxWidth={800}
              margin="15px auto"
              component="img"
              src={Table2}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Коэффициент трения
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default References;
