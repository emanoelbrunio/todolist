import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

type typeMyButton = {
  active: boolean;
};

export const MyButton = styled(Button)(({ active }: typeMyButton) => ({
  backgroundColor: `${active ? "#056CF2" : "#056CF250"}`,
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  width: "100%",
  padding: "12px",
}));

export const SLink = styled(Link)(() => ({
  width: "100%",
}));
