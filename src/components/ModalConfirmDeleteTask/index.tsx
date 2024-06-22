import React from "react";
import * as Styled from "./style";

import { TransitionProps } from "@mui/material/transitions";

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
  handleConfirmAction: () => void;
};

export default function ModalConfirmDeleteTask({
  showModal,
  handleCloseModal,
  handleConfirmAction,
}: TypeModalEditNewTask) {
  return (
    <Styled.SDialog
      open={showModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <Styled.SDialogTitle>
        "Tem certeza que deseja excluir essa tarefa?"
      </Styled.SDialogTitle>

      <Styled.SDialogActions>
        <Styled.SButton onClick={handleCloseModal}>Cancelar</Styled.SButton>
        <Styled.SButton warning onClick={handleConfirmAction}>
          Tenho certeza
        </Styled.SButton>
      </Styled.SDialogActions>
    </Styled.SDialog>
  );
}
