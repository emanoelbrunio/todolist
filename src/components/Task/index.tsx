import { useState } from "react";
import * as Styled from "./style";

import ButtonIcon from "../ButtonIcon";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export type TypeTask = {
  title: string;
  describe: string;
  done: boolean;
  id: string;
  handleConfirmEdit?: (id: string) => void;
  handleConfirmDeleteTask?: (id: string) => void;
  handleConfirmDoneTask?: (id: string) => void;
};

export default function Task({
  describe,
  done,
  title,
  id,
  handleConfirmEdit,
  handleConfirmDeleteTask,
  handleConfirmDoneTask,
}: TypeTask) {
  const [taskDone, setTaskDone] = useState<boolean>(done);

  const handleTaskDone = () => {
    if (handleConfirmDoneTask) {
      handleConfirmDoneTask(id);
    }
    setTaskDone((prevState) => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const data = JSON.parse(savedTasks);
        data.map((task: { id: string }) =>
          task.id === id ? { ...task, done: prevState } : task
        );
        localStorage.setItem("tasks", JSON.stringify(data));
      }
      return !prevState;
    });
  };

  const handleClickEdit = () => {
    if (handleConfirmEdit) {
      handleConfirmEdit(id);
    }
  };
  const handleClickDeleteTask = () => {
    if (handleConfirmDeleteTask) {
      handleConfirmDeleteTask(id);
    }
  };

  return (
    <Styled.SContainer done={taskDone}>
      <Styled.SLineTop>
        <Styled.SCheckTitleTag>
          <Styled.SCheck
            icon={<Styled.SIconChek htmlColor="#056cf2" />}
            checkedIcon={<Styled.SIconCheked htmlColor="#056cf2" />}
            onClick={handleTaskDone}
            checked={taskDone}
          />

          <Styled.Sh2 done={taskDone}>{title}</Styled.Sh2>
        </Styled.SCheckTitleTag>

        <Styled.SButtonGroup>
          <ButtonIcon
            children={<EditOutlinedIcon />}
            handleClick={handleClickEdit}
            notBackground
          />
          <ButtonIcon
            children={<DeleteOutlineOutlinedIcon htmlColor="#F21305" />}
            handleClick={handleClickDeleteTask}
            notBackground
          />
        </Styled.SButtonGroup>
      </Styled.SLineTop>

      <p>{describe}</p>
    </Styled.SContainer>
  );
}
