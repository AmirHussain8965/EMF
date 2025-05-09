import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/form/stepsFormSlice.ts";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;