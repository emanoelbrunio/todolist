import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";

export const SFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  background: `${theme.palette.background.paper}`,
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
}));

export const SInputLabel = styled(InputLabel)(({ theme }) => ({
  width: "100%",
  color: `${theme.palette.text.primary}`,

  fontSize: "18px",
  "&.Mui-focused": {
    color: `${theme.palette.text.primary}`,
  },
}));

export const SFilledInput = styled(FilledInput)(({ theme }) => ({
  width: "100%",
  color: `${theme.palette.text.primary}`,

  "&:after": {
    borderBottomColor: `${theme.palette.primary.main}`,
  },
}));

export const SInputAdornment = styled(InputAdornment)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
}));

export const SIconButton = styled(IconButton)(() => ({
  width: "100%",
  color: "#9B9B9B",
}));
