import React from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#2D3139",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F4F4F6",
      paper: "#FFFFFF",
    },
  },
};

export const theme = createTheme(themeOptions);

const CaseSystemTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CaseSystemTheme;
