import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
