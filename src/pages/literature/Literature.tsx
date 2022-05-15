import React, { FC } from "react";
import literatureList from "../../data/literature_list.json";
import { Box, Container, Typography } from "@mui/material";

const ListItem: FC<{ title: string; link?: string }> = ({ title, link }) => {
  return (
    <Box component="li" marginBottom={1}>
      <Typography>{title}</Typography>
      {link && (
        <>
          <Typography variant="caption">Ссылка для скачивания: </Typography>
          <a target="_blank" href={link}>
            {link}
          </a>
        </>
      )}
    </Box>
  );
};

const Literature = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", wordBreak: "break-word" }}>
      <Container sx={{ padding: "15px 0" }}>
        <Typography
          fontWeight="bold"
          variant="h1"
          fontSize="22px"
          textAlign="center"
          mb={5}
        >
          Литература
        </Typography>
        <Box component="ol">
          {literatureList.map(({ title, link }, i) => (
            <ListItem title={title} link={link} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Literature;
