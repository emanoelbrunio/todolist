import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import * as S from "./style";

type TypeInputPassword = {
  label: string;
  id: string;
};
export default function InputPassword({ label, id }: TypeInputPassword) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassWord = () => setShowPassword((prevState) => !prevState);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <S.SFormControl sx={{ m: 1 }} variant="filled" required>
      <S.SInputLabel>{label}</S.SInputLabel>

      <S.SFilledInput
        id={id}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <S.SInputAdornment position="end">
            <S.SIconButton
              onClick={handleShowPassWord}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </S.SIconButton>
          </S.SInputAdornment>
        }
      />
    </S.SFormControl>
  );
}
