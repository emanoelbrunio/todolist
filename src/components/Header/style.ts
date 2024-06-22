import { ButtonGroup, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SButtonGroup = styled(ButtonGroup)(() => ({}));

export const SNav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: `${theme.palette.background.paper}`,
  width: "100%",
  minWidth: "300px",

  [theme.breakpoints.up("xl")]: {
    maxWidth: "1500px",
    padding: "20px 100px",
  },
}));
export const Sh2 = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontWeight: "700",
  fontSize: "18px",
}));
