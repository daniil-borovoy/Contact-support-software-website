import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const ListItem: FC<{ title: string; link?: string }> = ({ title, link }) => {
  return (
    <Box fontWeight="bold" component="li" marginBottom={1}>
      <Typography textAlign="justify">{title}</Typography>
      {link && (
        <>
          <Typography fontSize="smaller">Ссылка для скачивания: </Typography>
          <a target="_blank" href={link}>
            {link}
          </a>
        </>
      )}
    </Box>
  );
};

export default ListItem;
