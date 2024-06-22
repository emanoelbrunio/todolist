import { useEffect, useState } from "react";
import ButtonCta from "../../components/Button";
import Header from "../../components/Header";
import HeaderList from "../../components/HeaderList";
import { TypeTask } from "../../components/Task";
import TaskList from "../../components/TaskList";

import * as S from "./style";
import ModalNewTask from "../../components/ModalNewTask";
import ModalEditTask from "../../components/ModalEditTask";
import ModalConfirmDeleteTask from "../../components/ModalConfirmDeleteTask";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  saveGetLocalStorage,
  saveLocalStorage,
  toggleCompleteTask,
} from "../../redux/todo/slice";
import { RootState } from "../../redux/store";

export type TypeSelectViewTasks = "all" | "pending" | "done";

export type TypeButtonSelectViewTasks = {
  buttonAll: boolean;
  buttonDone: boolean;
  buttonPeding: boolean;
};

export default function Home() {
  const dispatch = useDispatch();

  const tasks: TypeTask[] = useSelector((state: RootState) => state.tasks);

  const [showModalNewTask, setShowModalNewTask] = useState<boolean>(false);
  const [showModalEditTask, setShowModalEditTask] = useState<boolean>(false);
  const [showModalConfirmDeleteTask, setShowModalConfirmDeleteTask] =
    useState<boolean>(false);

  const [taskEdit, setTaskEdit] = useState<TypeTask | null>(null);
  const [taskIdDelete, setTaskIdDelete] = useState<string | null>(null);
  const [lengthDoned, setLengthDoned] = useState<number>(0);

  const [typeView, setTypeView] = useState<TypeSelectViewTasks>("all");

  const [buttonSelectViewTasks, setButtonSelectViewTasks] =
    useState<TypeButtonSelectViewTasks>({
      buttonAll: true,
      buttonDone: false,
      buttonPeding: false,
    });

  const handleShowModalNewTask = () => {
    setShowModalNewTask((prevState) => !prevState);
  };

  const handleShowModalEditTask = () => {
    setShowModalEditTask((prevState) => !prevState);
  };

  const handleShowModalConfirmDeleteTask = () => {
    setShowModalConfirmDeleteTask((prevState) => !prevState);
  };

  const handleSaveNewTask = (values: TypeTask) => {
    dispatch(addTask(values));
    dispatch(saveLocalStorage());
    handleShowModalNewTask();
  };

  const handleEditTask = (values: TypeTask) => {
    dispatch(editTask(values));
    dispatch(saveLocalStorage());
  };

  const handleContentModalEdit = (id: string) => {
    const taskTemp = tasks.find((task: TypeTask) => task.id === id);

    if (taskTemp) {
      setTaskEdit(taskTemp);
      handleShowModalEditTask();
    }
  };

  const handleContentModalConfirmDeleteTask = (id: string) => {
    setTaskIdDelete(id);
    handleShowModalConfirmDeleteTask();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskIdDelete));
    dispatch(saveLocalStorage());
    handleShowModalConfirmDeleteTask();
  };

  const handleConfirmDoneTask = (id: string) => {
    dispatch(toggleCompleteTask(id));
    dispatch(saveLocalStorage());
  };

  const handleButtonSelectViewTasksAndTypeView = (
    type: TypeSelectViewTasks
  ) => {
    if (type === "all") {
      setButtonSelectViewTasks({
        buttonAll: true,
        buttonDone: false,
        buttonPeding: false,
      });
      setTypeView("all");
      return;
    }
    if (type === "done") {
      setButtonSelectViewTasks({
        buttonAll: false,
        buttonDone: true,
        buttonPeding: false,
      });
      setTypeView("done");
      return;
    }
    setButtonSelectViewTasks({
      buttonAll: false,
      buttonDone: false,
      buttonPeding: true,
    });
    setTypeView("pending");
    return;
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch(saveGetLocalStorage(savedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    const numberTaskDoned = tasks.filter(
      (task: { done: boolean }) => task.done
    );
    setLengthDoned(numberTaskDoned.length);
  }, [tasks]);

  return (
    <S.SBox>
      <Header />
      <S.SMain>
        <HeaderList lengthDoned={lengthDoned} lengthTotal={tasks.length} />
        <ButtonCta
          title="Clique aqui para criar uma tarefa"
          active
          handleClick={handleShowModalNewTask}
        />
        <S.SButtonGroup>
          <ButtonCta
            title="Todas"
            notBackground={!buttonSelectViewTasks.buttonAll}
            handleClick={() => handleButtonSelectViewTasksAndTypeView("all")}
          />
          <ButtonCta
            title="Pendentes"
            notBackground={!buttonSelectViewTasks.buttonPeding}
            handleClick={() =>
              handleButtonSelectViewTasksAndTypeView("pending")
            }
          />
          <ButtonCta
            title="Concluídas"
            notBackground={!buttonSelectViewTasks.buttonDone}
            handleClick={() => handleButtonSelectViewTasksAndTypeView("done")}
          />
        </S.SButtonGroup>

        <TaskList
          tasks={tasks}
          handleEditTask={handleContentModalEdit}
          handleConfirmDeleteTask={handleContentModalConfirmDeleteTask}
          handleConfirmDoneTask={handleConfirmDoneTask}
          typeView={typeView}
        />

        <ModalNewTask
          showModal={showModalNewTask}
          handleCloseModal={handleShowModalNewTask}
          handleConfirmAction={handleSaveNewTask}
        />

        {showModalConfirmDeleteTask && (
          <ModalConfirmDeleteTask
            showModal={showModalConfirmDeleteTask}
            handleCloseModal={handleShowModalConfirmDeleteTask}
            handleConfirmAction={handleDeleteTask}
          />
        )}

        {taskEdit && (
          <ModalEditTask
            showModal={showModalEditTask}
            handleCloseModal={handleShowModalEditTask}
            values={taskEdit}
            handleConfirmAction={handleEditTask}
          />
        )}
      </S.SMain>
    </S.SBox>
  );
}
