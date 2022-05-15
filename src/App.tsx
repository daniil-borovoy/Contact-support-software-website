import AppRouter from "./components/app-router/AppRouter";
import { ThemeProvider } from "./providers/ThemeProvider";
import { FC } from "react";

const App: FC = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
