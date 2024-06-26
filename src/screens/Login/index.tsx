import * as S from "./style";
import { useState } from "react";

import InputPassword from "../../components/InputPassword";
import ButtonCta from "../../components/Button";

import Input from "../../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebaseConnection";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [valueInputEmail, setValueInputEmail] = useState<string>("");
  const [valueInputPassword, setValueInputPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (valueInputEmail !== "" && valueInputPassword !== "") {
      await signInWithEmailAndPassword(
        auth,
        valueInputEmail,
        valueInputPassword
      )
        .then(() => {
          navigate("/home", { replace: true });
        })
        .catch(() => {
          alert("Erro ao fazer login, tente novamente!");
        });
    } else {
      alert("Preencha os campos");
    }
  };

  return (
    <S.SContainer>
      <S.SButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <S.SButton active>Entrar na conta</S.SButton>
        <Link to="/register">
          <S.SButton active={false}>Criar conta</S.SButton>
        </Link>
      </S.SButtonGroup>

      <S.SContent>
        <Input
          label="Digite seu e-mail"
          value={valueInputEmail}
          handleChangeValue={setValueInputEmail}
        />
        <InputPassword
          label="Digite sua senha"
          id="text-password"
          value={valueInputPassword}
          handleChangeValue={setValueInputPassword}
        />

        <ButtonCta
          title="Entrar na minha conta"
          active
          handleClick={handleLogin}
        />
      </S.SContent>
    </S.SContainer>
  );
}
