import React from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "@mui/material";

interface AppBarTabProps {
  label?: string;
  href?: string;
}

const AppBarTab = (props: AppBarTabProps) => {
  const navigate = useNavigate();

  const handleGoTo = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate(props.href || "/");
  };

  return (
    <Tab
      sx={({ palette }) => ({
        color: palette.text.disabled,
        fontWeight: 700,
      })}
      label={props.label}
      onClick={handleGoTo}
      component="a"
      {...props}
    />
  );
};

export default AppBarTab;
