import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtn: {
    all: 0,
  },
  filterActive: "all",
  searchShift: "",
  pagination: {
    itemsPerPage: [0, 1],
    page: 1,
    total: 0,
  },
  dataFiltered: [],
};

const shiftsSlice = createSlice({
  initialState,
  name: "shifts",
  reducers: {
    setFilterBtn: (state, action) => {
      state.filterBtn[action.payload.name] = action.payload.value;
    },
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
    setSearchShift: (state, action) => {
      state.searchShift = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination[action.payload.name] = action.payload.value;
    },
    setDataFiltered: (state, action) => {
      state.dataFiltered = action.payload;
    },
  },
});

export const {
  setFilterBtn,
  setFilterActive,
  setSearchShift,
  setPagination,
  setDataFiltered,
} = shiftsSlice.actions;

export const selectFilterBtn = (state) => state.shifts.filterBtn;
export const selectFilterActive = (state) => state.shifts.filterActive;
export const selectSearchShift = (state) => state.shifts.searchShift;
export const selectPagination = (state) => state.shifts.pagination;
export const selectDataFiltered = (state) => state.shifts.dataFiltered;

export default shiftsSlice.reducer;
