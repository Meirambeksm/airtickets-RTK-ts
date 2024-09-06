import { Flight } from "./types";
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";

const flightsAdapter = createEntityAdapter<Flight>();

interface FlightsState extends EntityState<Flight, number> {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FlightsState = flightsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchFlightsThunk = createAsyncThunk<Flight[]>(
  "flights/fetchFlights",
  async () => {
    const res = await fetchFlights();
    return res;
  }
);

const fetchFlights = async (): Promise<Flight[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFlightsThunk.fulfilled,
        (state, action: PayloadAction<Flight[]>) => {
          state.status = "succeeded";
          flightsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchFlightsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default flightsSlice.reducer;

export const { selectAll: selectAllFlights } = flightsAdapter.getSelectors(
  (state: { flights: FlightsState }) => state.flights
);
