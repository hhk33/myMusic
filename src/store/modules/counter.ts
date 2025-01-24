import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    message: "test",
  },
  reducers: {
    changeMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { changeMessage: changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
