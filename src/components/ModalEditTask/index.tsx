import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { TransitionProps } from "@mui/material/transitions";
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
  values: TypeTask;
};

export default function ModalEditTask({
  showModal,
  handleCloseModal,
  handleConfirmAction,
  values,
}: TypeModalEditNewTask) {
  const [valueInputTitle, setValueInputTitle] = useState<string>(values.title);
  const [valueInputTextArea, setValueInputTextArea] = useState<string>(
    values.describe
  );

  useEffect(() => {
    if (values) {
      setValueInputTitle(values.title);
      setValueInputTextArea(values.describe);
    }
  }, [values]);

  const handleConfirm = () => {
    handleConfirmAction({
      describe: valueInputTextArea,
      done: values.done,
      id: values.id,
      title: valueInputTitle,
    });
    handleCloseModal();
  };

  return (
    <Styled.SDialog
      open={showModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <Styled.SDialogTitle>Editar tarefa:</Styled.SDialogTitle>

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
          <ButtonCta
            title="Salvar alterações"
            active
            handleClick={handleConfirm}
          />
        </Styled.SDialogContentText>
      </Styled.SDialogContent>
    </Styled.SDialog>
  );
}
