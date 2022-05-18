import { ReactNode } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "rgb(255,255,255)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(131,131,131,0.8)",
      disabled: "rgba(255,255,255,0.8)",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
};

const theme = createTheme(themeOptions);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
