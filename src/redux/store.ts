import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todo/slice";
import themeReducer from "./theme/slice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
