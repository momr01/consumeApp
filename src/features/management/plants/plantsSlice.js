import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtn: {
    all: 0,
    mexico: 0,
    96390: 0,
    veracruz: 0,
  },
  filterActive: "all",
  search: "",
  pagination: {
    itemsPerPage: [0, 1],
    page: 1,
    total: 0,
  },
  dataFiltered: [],
};

const plantsSlice = createSlice({
  initialState,
  name: "plants",
  reducers: {
    setFilterBtn: (state, action) => {
      state.filterBtn[action.payload.name] = action.payload.value;
    },
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
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
  setSearch,
  setPagination,
  setDataFiltered,
} = plantsSlice.actions;

export const selectFilterBtn = (state) => state.plants.filterBtn;
export const selectFilterActive = (state) => state.plants.filterActive;
export const selectSearch = (state) => state.plants.search;
export const selectPagination = (state) => state.plants.pagination;
export const selectDataFiltered = (state) => state.plants.dataFiltered;

export default plantsSlice.reducer;
