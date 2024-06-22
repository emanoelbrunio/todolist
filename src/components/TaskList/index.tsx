import { TypeSelectViewTasks } from "../../screens/Home";
import Task, { TypeTask } from "../Task";
import * as Styled from "./style";

type TypeTaskList = {
  tasks: TypeTask[];
  handleEditTask: (e: string) => void;
  handleConfirmDeleteTask: (e: string) => void;
  handleConfirmDoneTask: (e: string) => void;
  typeView: TypeSelectViewTasks;
};

export default function TaskList({
  tasks,
  handleEditTask,
  handleConfirmDeleteTask,
  handleConfirmDoneTask,
  typeView,
}: TypeTaskList) {
  const filteredTasks = tasks.filter((task) => {
    if (typeView === "all") return true;
    if (typeView === "done") return task.done;
    if (typeView === "pending") return !task.done;
    return true;
  });

  return (
    <Styled.SContainer>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          describe={task.describe}
          done={task.done}
          id={task.id}
          handleConfirmEdit={handleEditTask}
          handleConfirmDeleteTask={handleConfirmDeleteTask}
          handleConfirmDoneTask={handleConfirmDoneTask}
        />
      ))}
    </Styled.SContainer>
  );
}
