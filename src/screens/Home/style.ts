import { ButtonGroup, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  background: `${theme.palette.background.default}`,
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1920px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
  },
}));

export const SMain = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "10px 10px",
  justifyContent: "space-between",
  gap: "10px",
  minWidth: "360px",
  left: "50%",

  background: `${theme.palette.background.default}`,
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1500px",
    padding: "10px 100px",
  },
}));

export const SButtonGroup = styled(ButtonGroup)(() => ({
  background: "none",
}));
