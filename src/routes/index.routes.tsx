import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
