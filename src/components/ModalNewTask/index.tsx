import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransitionProps } from "@mui/material/transitions";

import * as Styled from "./style";
import Input from "../Input";
import TextArea from "../TextArea";
import ButtonCta from "../Button";
import { TypeTask } from "../Task";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Styled.SSlide direction="up" ref={ref} {...props} />;
});

type TypeModalEditNewTask = {
  showModal: boolean;
  handleCloseModal: () => void;
  handleConfirmAction: (values: TypeTask) => void;
};

export default function ModalNewTask({
  showModal,
  handleCloseModal,
  handleConfirmAction,
}: TypeModalEditNewTask) {
  const [valueInputTitle, setValueInputTitle] = useState<string>("");
  const [valueInputTextArea, setValueInputTextArea] = useState<string>("");

  const handleConfirm = () => {
    if (valueInputTitle.trim() && valueInputTextArea.trim()) {
      handleConfirmAction({
        describe: valueInputTextArea,
        done: false,
        id: uuidv4(),
        title: valueInputTitle,
      });
      setValueInputTextArea("");
      setValueInputTitle("");
    } else {
      alert("Campos invalidos!");
      setValueInputTextArea("");
      setValueInputTitle("");
    }
  };
  return (
    <Styled.SDialog
      open={showModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <Styled.SDialogTitle>Adicionar tarefa:</Styled.SDialogTitle>

      <Styled.SDialogContent>
        <Styled.SDialogContentText id="alert-dialog-slide-description">
          <Input
            label="Título"
            handleChangeValue={setValueInputTitle}
            value={valueInputTitle}
          />
          <TextArea
            handleChangeValue={setValueInputTextArea}
            value={valueInputTextArea}
          />
          <ButtonCta title="Salvar tarefa" active handleClick={handleConfirm} />
        </Styled.SDialogContentText>
      </Styled.SDialogContent>
    </Styled.SDialog>
  );
}
