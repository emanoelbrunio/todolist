import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export type typeMode = {
  mode: PaletteMode;
};
const initialState: typeMode = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLightTheme: (state) => {
      state.mode = "light";
    },
    setDarkTheme: (state) => {
      state.mode = "dark";
    },
  },
});

export const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
