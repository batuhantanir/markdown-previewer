import { configureStore } from "@reduxjs/toolkit";
import MarkDownSlice from "./Slices/MarkDownSlice";

export const store = configureStore({
  reducer: {
    markDown: MarkDownSlice,
  },
});
