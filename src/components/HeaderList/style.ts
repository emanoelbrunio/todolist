import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: `${theme.palette.background.paper}`,
  width: "100%",
  border: "1px solid #056cf2",
  borderRadius: "12px",
  padding: "20px",
  alignItems: "center",
}));

export const SHeaderTitleDescribe = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "5px",
}));

export const Sh2 = styled(Typography)(({ theme }) => ({
  padding: 0,
  margin: 0,
  fontSize: "20px",
  fontWeight: "700",
  color: `${theme.palette.text.primary}`,
}));

export const Sp = styled(Typography)(({ theme }) => ({
  padding: 0,
  margin: 0,
  fontSize: "14px",
  fontWeight: "400",
  color: `${theme.palette.text.primary}`,
}));

export const SCircle = styled(Box)(({ theme }) => ({
  width: "90px",
  height: "90px",
  background: `${theme.palette.primary.main}`,
  borderRadius: "100000px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Sh3 = styled(Typography)(({ theme }) => ({
  padding: 0,
  margin: 0,
  fontSize: "24px",
  fontWeight: "700",
  color: `${theme.palette.text.primary}`,
}));
