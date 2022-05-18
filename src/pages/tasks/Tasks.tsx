import React, { FC, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Highlighter from "../../components/highlighter/Highliter";

const Tasks: FC = () => {
  const [programText, setProgrammText] = useState<string>("");

  useEffect(() => {
    fetch("/programs/Gauss_linear_system_Fortran.txtlol")
      .then((response) => {
        return response.text();
      })
      .then((program) => {
        setProgrammText(program);
      });
  });

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ padding: "15px 15px 50px 15px" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Задачи
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Решение СЛАУ методом Гаусса
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding={2}
            >
              <Highlighter content={programText} />
              <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                sx={{ alignSelf: "flex-end", fontWeight: "bold" }}
                href="/programs/Gauss_linear_system_Fortran.txtlol"
                download
              >
                Скачать текст программы
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Вычисление функции Бесселя
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Вычисление Гамма-функции
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Метод нелинейных граничных уравнений
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Интегральное преобразование Фурье
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" variant="h5">
              Интегральное преобразование Меллина
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Tasks;
