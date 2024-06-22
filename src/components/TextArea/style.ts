import { styled } from "@mui/system";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const STextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  background: `${theme.palette.background.default}`,
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  border: "none",
  outline: "none",
  color: `${theme.palette.text.primary}`,
  fontSize: "18px",
  padding: "15px",
  resize: "none",
  overflow: "hidden",
  margin: "10px 0",

  "::placeholder": {
    color: `${theme.palette.text.primary}`,
    fontWeight: 500,
  },
  ":focus": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));
