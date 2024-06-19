import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";

export const STextField = styled(TextField)(() => ({
  width: "100%",
  background: "#424242",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",

  "& .MuiInputLabel-root": {
    color: "#9B9B9B",

    fontSize: "18px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#056CF2",
  },
  "& .MuiFilledInput-root": {
    color: "#fff",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#056CF2",
  },
}));
