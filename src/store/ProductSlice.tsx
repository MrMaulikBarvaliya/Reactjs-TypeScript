import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const ProSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData(state, action) {
      state.push(action.payload);
    },
    removedata(state, action) {
      return state.filter((item:any) => item.id !== action.payload);
    },
  },
});

export const { addData, removedata } = ProSlice.actions;

export default ProSlice.reducer;
