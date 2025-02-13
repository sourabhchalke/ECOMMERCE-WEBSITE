import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  severity: "info", 
  open: false,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.message = action.payload.message; 
      state.severity = action.payload.severity || "info"; 
      state.open = true;
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { openSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
