import React, { FC } from "react";
import { AppBar as AppBarMui } from "@mui/material";
import { Typography, Toolbar } from "@mui/material";
import AppBarTabs from "../app-bar-tabs/AppBarTabs";

const AppBar: FC = () => {
  return (
    <AppBarMui position="static">
      <Toolbar>
        <Typography
          fontSize="1.3rem"
          textAlign="center"
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          ПО поддержки решения контактных задач
        </Typography>
      </Toolbar>
      <AppBarTabs />
    </AppBarMui>
  );
};

export default AppBar;
