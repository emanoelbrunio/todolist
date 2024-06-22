import { ButtonGroup, Box } from "@mui/material";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

type typeSButton = {
  active: boolean;
};

export const SButtonGroup = styled(ButtonGroup)(() => ({
  width: "100%",
  display: "flex",
}));

export const SButton = styled(Button)(({ theme, active }: typeSButton) => ({
  background: `${active ? "#056CF250" : "none"}`,
  color: `${
    active ? `${theme.palette.text.primary}` : `${theme.palette.text.disabled}`
  }`,
  fontWeight: 700,
  textAlign: "center",
  borderRadius: "12px",
  padding: "15px 30px",
}));

export const SContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
}));

export const SContent = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
}));
