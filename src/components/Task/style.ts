import { ButtonGroup, Box, Typography } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { styled } from "@mui/material/styles";

export const SButtonGroup = styled(ButtonGroup)(() => ({}));

export const SCheck = styled(Checkbox)(() => ({}));

export const SIconCheked = styled(CheckCircleIcon)(() => ({}));

export const SIconChek = styled(CheckCircleOutlineIcon)(() => ({
  opacity: 0.7,
}));

type TypeContainer = {
  done: boolean;
};
export const SContainer = styled(Box)(({ done, theme }: TypeContainer) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  borderRadius: "12px",
  border: `1px solid ${
    done ? `${theme.palette.primary["300"]}` : `${theme.palette.primary["100"]}`
  }`,
  alignItems: "flex-start",
  padding: "20px",
  justifyContent: "space-between",
  background: `${
    done ? `${theme.palette.primary["400"]}` : `${theme.palette.primary["200"]}`
  }`,
  color: `${
    done ? `${theme.palette.text.disabled}` : `${theme.palette.text.primary}`
  }`,
  textDecoration: `${done ? `line-through` : `none`}`,
  wordBreak: "break-word",
  wordWrap: "break-word",
}));

export const SLineTop = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const SCheckTitleTag = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const Sh2 = styled(Typography)(({ theme, done }: TypeContainer) => ({
  color: `${
    done ? `${theme.palette.text.disabled}` : `${theme.palette.text.primary}`
  }`,
  fontWeight: 700,
  padding: 0,
  margin: 0,
  fontSize: "18px",
}));
