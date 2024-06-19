import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";

export const SFormControl = styled(FormControl)(() => ({
  width: "100%",
  background: "#424242",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
}));

export const SInputLabel = styled(InputLabel)(() => ({
  width: "100%",
  color: "#9B9B9B",

  fontSize: "18px",
  "&.Mui-focused": {
    color: "#056CF2",
  },
}));

export const SFilledInput = styled(FilledInput)(() => ({
  width: "100%",
  color: "#fff",

  "&:after": {
    borderBottomColor: "#056CF2",
  },
}));

export const SInputAdornment = styled(InputAdornment)(() => ({
  color: "#fff",
}));

export const SIconButton = styled(IconButton)(() => ({
  width: "100%",
  color: "#9B9B9B",
}));
