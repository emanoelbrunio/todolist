import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

type typeSButton = {
  active: boolean;
};

export const SButtonGroup = styled(ButtonGroup)(() => ({
  width: "100%",
  flex: 1,
  display: "flex",
  gap: "30px",
}));

export const SButton = styled(Button)(({ active }: typeSButton) => ({
  background: `${active ? "#056CF250" : "none"}`,
  color: `${active ? "#fff" : "#ffffff50"}`,
  fontWeight: `${active ? 700 : 400}`,
  textAlign: "center",
  borderRadius: "12px",
  padding: "15px 30px",
}));
