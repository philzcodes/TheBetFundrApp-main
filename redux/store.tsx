import {configureStore} from "@reduxjs/toolkit";
import firstReducer from "./home/firstSlice";
export const store = configureStore({
  reducer: {
    fetchalldata: firstReducer,
  },
});


