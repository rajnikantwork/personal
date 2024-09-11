import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark";

interface ThemeSliceState {
  theme: ThemeState;
}

const initialState: ThemeSliceState = {
  theme: (localStorage.getItem("theme") as ThemeState) || "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
