import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "../app-bar/AppBar";
import Literature from "../../pages/literature/Literature";
import Articles from "../../pages/articles/Articles";
import Methods from "../../pages/methods/Methods";
import Tasks from "../../pages/tasks/Tasks";
import References from "../../pages/references/References";
import Results from "../../pages/results/Results";
import About from "../../pages/about/About";
import AppBarTabs from "../app-bar-tabs/AppBarTabs";
import { ScrollToTop } from "../../providers/ScrollToTop";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <AppBar />
        <AppBarTabs />
        <Routes>
          <Route path="/" element={<Literature />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/references" element={<References />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppRouter;
