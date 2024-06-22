import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";

export const SDialog = styled(Dialog)(() => ({}));

export const SDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontSize: "24px",
  fontWeight: 700,
  background: `${theme.palette.background.paper}`,
  padding: "20px",
}));

export const SDialogContent = styled(DialogContent)(({ theme }) => ({
  background: `${theme.palette.background.paper}`,
}));

export const SDialogContentText = styled(DialogContentText)(() => ({
  padding: "10px 0",
}));

export const SSlide = styled(Slide)(() => ({}));
