import { createSlice } from "@reduxjs/toolkit";
import { TypeTask } from "../../components/Task";
import { v4 as uuidv4 } from "uuid";

const initialState: TypeTask[] = [];

export const userSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: TypeTask = {
        id: uuidv4(),
        describe: action.payload.describe,
        done: false,
        title: action.payload.title,
      };
      state.push(newTask);
    },
    toggleCompleteTask: (state, action) => {
      const updatedTasks = state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      return updatedTasks;
    },
    deleteTask: (state, action) => {
      console.log("alo");

      const indexDelete = state.findIndex((todo) => todo.id === action.payload);
      if (indexDelete !== -1) {
        state.splice(indexDelete, 1);
      }
    },
    editTask: (state, action) => {
      const updatedTasks = state.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
      return updatedTasks;
    },
    saveLocalStorage: (state) => {
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    saveGetLocalStorage: (state, action) => {
      const updatedTasks = JSON.parse(action.payload);
      return updatedTasks;
    },
  },
});

export const {
  addTask,
  toggleCompleteTask,
  deleteTask,
  saveLocalStorage,
  saveGetLocalStorage,
  editTask,
} = userSlice.actions;
export default userSlice.reducer;
