import * as Styled from "./style";
import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type TypeInputPassword = {
  label: string;
  id: string;
  value: string;
  handleChangeValue: (e: string) => void;
};

export default function InputPassword({
  label,
  id,
  value,
  handleChangeValue,
}: TypeInputPassword) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassWord = () => setShowPassword((prevState) => !prevState);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Styled.SFormControl sx={{ m: 1 }} variant="filled" required>
      <Styled.SInputLabel>{label}</Styled.SInputLabel>

      <Styled.SFilledInput
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        endAdornment={
          <Styled.SInputAdornment position="end">
            <Styled.SIconButton
              onClick={handleShowPassWord}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </Styled.SIconButton>
          </Styled.SInputAdornment>
        }
      />
    </Styled.SFormControl>
  );
}
