import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Articles = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Container sx={{ padding: "15px" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Статьи и монографии
        </Typography>
        <Typography mb={2} textAlign="justify">
          Пожарская, Е.Д. Контактные задачи для неоднородного клина и цилиндра /
          Е.Д. Пожарская, Н.Б. Золотов, Д.А. Пожарский, С.А. Трюхан //
          Актуальные проблемы науки и техники. 2021. Материалы Всеросс.
          (национ.) науч.-практ. конф. (Ростов-на-Дону, 17-19 марта 2021 г.). ―
          Текст: электронный. ― Ростов-на-Дону: ДГТУ, 2021. ― С. 743―744.
        </Typography>
        <Typography>
          Пожарский, Д.А. Контактные задачи для неоднородного упругого клина с
          переменным коэффициентом Пуассона / Д.А. Пожарский, Е.Д. Пожарская //
          Вестник Пермского национального исследовательского политехнического
          университета. Механика. ― 2021. ― № 1. ― С. 63―71.
        </Typography>
        <a
          target="_blank"
          href="https://cyberleninka.ru/article/n/kontaktnye-zadachi-dlya-neodnorodnogo-uprugogo-klina-s-peremennym-koeffitsientom-puassona/viewer"
        >
          https://cyberleninka.ru/article/n/kontaktnye-zadachi-dlya-neodnorodnogo-uprugogo-klina-s-peremennym-koeffitsientom-puassona/viewer
        </a>
      </Container>
    </Box>
  );
};

export default Articles;
