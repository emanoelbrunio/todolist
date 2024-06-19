import * as S from "./style";
import InputPassword from "../../components/InputPassword";
import ButtonCta from "../../components/Button";

import "./index.css";

import Input from "../../components/Input";
export default function Login() {
  return (
    <div className="container">
      <S.SButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <S.SButton active>Entrar na conta</S.SButton>
        <S.SButton active={false}>Criar conta</S.SButton>
      </S.SButtonGroup>

      <div className="content">
        <Input label="Digite seu e-mail" />
        <InputPassword label="Digite sua senha" id="text-password" />

        <ButtonCta title="Entrar na minha conta" active />
      </div>
    </div>
  );
}
