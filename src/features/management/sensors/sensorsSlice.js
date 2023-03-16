import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtn: {
    all: 0,
  },
  filterActive: "all",
  searchSensor: "",
  pagination: {
    itemsPerPage: [0, 1],
    page: 1,
    total: 0,
  },
  dataFiltered: [],
};

const sensorsSlice = createSlice({
  initialState,
  name: "sensors",
  reducers: {
    setFilterBtn: (state, action) => {
      state.filterBtn[action.payload.name] = action.payload.value;
    },
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
    setSearchSensor: (state, action) => {
      state.searchSensor = action.payload;
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
  setSearchSensor,
  setPagination,
  setDataFiltered,
} = sensorsSlice.actions;

export const selectFilterBtn = (state) => state.sensors.filterBtn;
export const selectFilterActive = (state) => state.sensors.filterActive;
export const selectSearchSensor = (state) => state.sensors.searchSensor;
export const selectPagination = (state) => state.sensors.pagination;
export const selectDataFiltered = (state) => state.sensors.dataFiltered;

export default sensorsSlice.reducer;
