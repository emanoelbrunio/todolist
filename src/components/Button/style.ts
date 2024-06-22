import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type typeMyButton = {
  active?: boolean;
  notBackground?: boolean;
};

export const MyButton = styled(Button)(
  ({ theme, active, notBackground }: typeMyButton) => ({
    backgroundColor: `${
      notBackground
        ? "none"
        : active
        ? `${theme.palette.primary.main}`
        : `${theme.palette.primary["500"]}`
    }`,
    color: `${
      notBackground
        ? `${theme.palette.text.disabled}`
        : `${theme.palette.text.primary}`
    }`,
    fontSize: "16px",
    fontWeight: `${notBackground ? "400" : "700"}`,
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "none",

    "&:hover": {
      border: "none",
      background: `${"#ABCFFF80"}`,
      color: `${theme.palette.text.primary}`,
    },
  })
);
