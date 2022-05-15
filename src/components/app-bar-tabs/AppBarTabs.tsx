import React, { useState } from "react";
import { Paper, Tabs } from "@mui/material";
import AppBarTab from "../app-bar-tab/AppBarTab";

const AppBarTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={5}
      sx={({ palette }) => ({
        width: "100%",
        bgcolor: palette.primary.main,
      })}
    >
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
        centered
      >
        <AppBarTab label="Литература" href="/" />
        <AppBarTab label="Статьи" href="/articles" />
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
