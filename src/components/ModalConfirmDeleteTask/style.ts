import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";

import { Button } from "@mui/material";

type TypeButton = {
  warning?: boolean;
};

export const SDialog = styled(Dialog)(() => ({}));

export const SDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontSize: "24px",
  fontWeight: 700,
  background: `${theme.palette.background.paper}`,
  padding: "20px",
}));

export const SDialogActions = styled(DialogActions)(({ theme }) => ({
  background: `${theme.palette.background.paper}`,
  padding: "20px",
  paddingTop: "4px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
}));

export const SSlide = styled(Slide)(() => ({}));

export const SButton = styled(Button)(({ warning }: TypeButton) => ({
  backgroundColor: `${warning ? "#F21305" : "#fff"}`,
  color: `${warning ? "#fff" : "#000"}`,
  fontSize: "15px",
  fontWeight: 700,
  padding: "10px",
  borderRadius: "12px",
  width: "100%",

  ":hover": {
    background: "#056cf2",
  },
}));
