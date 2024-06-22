import * as Styled from "../../components/Header/style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/slice";

import ButtonIcon from "../../components/ButtonIcon";
import ExitToApp from "@mui/icons-material/ExitToApp";
import ContrastIcon from "@mui/icons-material/Contrast";
import ModalExitAccount from "../ModalExitAccount";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export default function Header() {
  const dispatch = useDispatch();

  const [showModalExitAccount, setShowModalExitAccount] =
    useState<boolean>(false);

  const handleShowModalExitAccount = () => {
    setShowModalExitAccount((prevState) => !prevState);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLoggout = async () => {
    await signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <Styled.SNav>
      <Styled.Sh2>Gerenciador de Tarefas</Styled.Sh2>

      <Styled.SButtonGroup>
        <ButtonIcon
          children={<ContrastIcon />}
          handleClick={handleToggleTheme}
        />
        <ButtonIcon
          children={<ExitToApp htmlColor="#ff0000" />}
          handleClick={handleShowModalExitAccount}
          exit
        />
      </Styled.SButtonGroup>

      <ModalExitAccount
        handleCloseModal={handleShowModalExitAccount}
        handleConfirmAction={handleLoggout}
        showModal={showModalExitAccount}
      />
    </Styled.SNav>
  );
}
