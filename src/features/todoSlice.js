import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  headers: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTodos } = todoSlice.actions;

export default todoSlice.reducer;
