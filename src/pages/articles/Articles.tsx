import React, { FC } from "react";
import articlesList from "../../data/articles_and_monographs_list.json";
import { Box, Container, Typography } from "@mui/material";
import ListItem from "../../components/list-item/ListItem";

const Articles: FC = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", wordBreak: "break-word" }}>
      <Container sx={{ padding: "15px 30px" }}>
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
          {articlesList.map(({ title, link }, i) => (
            <ListItem title={title} link={link} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;
