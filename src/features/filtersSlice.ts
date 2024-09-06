import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  activeCompanies: string[];
  activeTransits: string[];
  displayedCount: number;
  sortCriteria: string | null;
}

const initialState: FiltersState = {
  activeCompanies: [],
  activeTransits: [],
  displayedCount: 3,
  sortCriteria: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCompanies(state, action: PayloadAction<string[]>) {
      state.activeCompanies = action.payload;
    },
    setActiveTransits(state, action: PayloadAction<string[]>) {
      state.activeTransits = action.payload;
    },
    incrementDisplayedCount(state) {
      state.displayedCount += 3;
    },
    setDisplayedCount(state, action: PayloadAction<number>) {
      state.displayedCount = action.payload;
    },
    setSortCriteria(state, action: PayloadAction<string | null>) {
      state.sortCriteria = action.payload;
    },
  },
});

export const {
  setActiveCompanies,
  setActiveTransits,
  incrementDisplayedCount,
  setDisplayedCount,
  setSortCriteria,
} = filtersSlice.actions;

export default filtersSlice.reducer;
export const selectActiveCompanies = (state: { filters: FiltersState }) =>
  state.filters.activeCompanies;
export const selectActiveTransits = (state: { filters: FiltersState }) =>
  state.filters.activeTransits;
export const selectDisplayedCount = (state: { filters: FiltersState }) =>
  state.filters.displayedCount;
export const selectSortCriteria = (state: { filters: FiltersState }) =>
  state.filters.sortCriteria;
