import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "../../features/flightsSlice";
import filterReducer from "../../features/filtersSlice";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
