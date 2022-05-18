import React, { FC } from "react";
import Equation1 from "./img/equation_1.png";
import Equation2 from "./img/equation_2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

const Methods: FC = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container
        sx={{
          padding: "15px",
        }}
      >
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Методы
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight="bold" variant="h5">
              Вычисление интеграла по квадратурной формуле Гаусса
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign="justify">
              Это аппроксимация определенного интеграла функции, обычно
              выражаемая как взвешенная сумма значений функции в заданных точках
              области интегрирования. Современная формулировка с использованием
              ортогональных многочленов была разработана Карлом Густавом Якоби в
              1826 году. Наиболее распространенная область интегрирования для
              такого правила принимается как [-1, 1], поэтому правило
              формулируется как
            </Typography>
            <Box
              display="block"
              margin="15px auto"
              width="100%"
              maxWidth={200}
              component="img"
              src={Equation1}
            />
            <Typography textAlign="justify">
              Интеграл по [a, b] должен быть изменен на интеграл по [-1, 1]
              перед применением правила гауссовой квадратуры. Это изменение
              интервала можно сделать следующим образом:
            </Typography>
            <Box
              display="block"
              margin="15px auto 0 auto"
              width="100%"
              maxWidth={400}
              component="img"
              src={Equation2}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Метод коллокации
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Метод Галанова (метод нелинейных граничных интегральных уравнений)
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Метод Гаусса
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Метод прямоугольников
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Methods;
