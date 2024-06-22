import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

import Private from "./Private";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Public from "./Public";
import PageNotFound from "../screens/PageNotFound";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../styles/theme/theme";
import { typeMode } from "../redux/theme/slice";

export function AppRoutes() {
  const themeMode: typeMode = useSelector((state: RootState) => state.theme);
  const theme = themeMode.mode === "light" ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
