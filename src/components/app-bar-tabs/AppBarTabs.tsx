import React, { useState } from "react";
import { Paper, Tabs } from "@mui/material";
import AppBarTab from "../app-bar-tab/AppBarTab";
import { useLocation } from "react-router-dom";
import { getInitialTabState } from "../../utils";

const AppBarTabs = () => {
  const location = useLocation();

  const [value, setValue] = useState<number>(
    getInitialTabState(location.pathname)
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={2}
      sx={({ palette }) => ({
        width: "100%",
        bgcolor: palette.primary.main,
        position: "sticky",
        zIndex: 2,
        borderRadius: 0,
        top: 0,
        display: "flex",
        justifyContent: "center",
      })}
    >
      <Tabs
        color="#fff"
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
      >
        <AppBarTab label="Литература" href="/" />
        <AppBarTab label="Статьи и монографии" href="/articles" />
        <AppBarTab label="Методы" href="/methods" />
        <AppBarTab label="Задачи" href="/tasks" />
        <AppBarTab label="Справочники" href="/references" />
        <AppBarTab label="Результаты" href="/results" />
        <AppBarTab label="Об авторе" href="/about" />
      </Tabs>
    </Paper>
  );
};

export default AppBarTabs;
