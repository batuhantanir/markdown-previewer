import { configureStore } from "@reduxjs/toolkit";
import MarkDownSlice from "./MarkDownSlice/MarkDownSlice";

export const store = configureStore({
  reducer: {
    markDown: MarkDownSlice,
  },
});
