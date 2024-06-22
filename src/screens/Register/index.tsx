import * as S from "./style";
import InputPassword from "../../components/InputPassword";
import ButtonCta from "../../components/Button";

import Input from "../../components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebaseConnection";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [valueInputEmail, setValueInputEmail] = useState<string>("");
  const [valueInputPassword, setValueInputPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    if (valueInputEmail !== "" && valueInputPassword !== "") {
      await createUserWithEmailAndPassword(
        auth,
        valueInputEmail,
        valueInputPassword
      )
        .then(() => {
          navigate("/home", { replace: true });
        })
        .catch(() => {
          alert("Erro ao criar conta, tente novamente!");
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
        <Link to="/">
          <S.SButton active={false}>Entrar na conta</S.SButton>
        </Link>
        <S.SButton active>Criar conta</S.SButton>
      </S.SButtonGroup>

      <S.SContent>
        <Input
          label="Digite seu melhor e-mail:"
          value={valueInputEmail}
          handleChangeValue={setValueInputEmail}
        />
        <InputPassword
          label="Digite uma senha:"
          id="text-password"
          value={valueInputPassword}
          handleChangeValue={setValueInputPassword}
        />

        <ButtonCta
          title="Criar minha conta"
          active
          handleClick={handleCreateUser}
        />
      </S.SContent>
    </S.SContainer>
  );
}
