import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./features/group";

const store = configureStore({
  reducer: {
    groupState: groupSlice,
  },
});

export default store;
