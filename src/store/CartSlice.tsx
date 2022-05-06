import { createSlice } from "@reduxjs/toolkit";

// type Items = {
//   item: boolean;
// };
const initialState: any = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
    addData(state, action) {
      state.push(action.payload);
    },
    removeData(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { add, remove, addData, removeData } = cartSlice.actions;

export default cartSlice.reducer;

// 1. Create CartSlice File
// 2. Create Store File and import CartSlice
// 3. Import Store For App.js/ts File
// 4. Import All Data In (Provider {react-redux})
// 5. Product Page Btn Click To add Data Fucntion Create import CartSlice File
// 6. Header file in import useSelector for count products
// 7. useSelecoter to data find or count too add data
