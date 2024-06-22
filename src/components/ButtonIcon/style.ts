import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type TypeSButton = {
  exit?: boolean;
  notBackground?: boolean;
};

export const SButton = styled(Button)(
  ({ exit, notBackground }: TypeSButton) => ({
    background: `${notBackground ? "none" : exit ? "#FF9E97" : "#ABCFFF"}`,
    width: "100%",
    padding: `${notBackground ? "5px" : "10px"}`,
    borderRadius: "8px",
    border: "none",

    "&:hover": {
      border: "none",
      background: `${exit ? "#FF9E9780" : "#ABCFFF80"}`,
    },
  })
);
