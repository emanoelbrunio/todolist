import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const STextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  background: `${theme.palette.background.paper}`,
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  "& .MuiInputLabel-root": {
    color: `${theme.palette.text.primary}`,
    fontSize: "18px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: `${theme.palette.text.primary}`,
  },
  "& .MuiFilledInput-root": {
    color: `${theme.palette.text.primary}`,
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: `${theme.palette.primary.main}`,
  },
}));
