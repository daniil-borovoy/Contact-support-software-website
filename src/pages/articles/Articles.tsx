import React from "react";
import { Box, Container, Typography } from "@mui/material";
import literatureList from "../../data/articles_and_monographs_list.json";
import ListItem from "../../components/list-item/ListItem";

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
        <Box paddingLeft="15px" component="ol">
          {literatureList.map(({ title, link }, i) => (
            <ListItem title={title} link={link} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;
