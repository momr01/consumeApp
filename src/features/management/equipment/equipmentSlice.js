import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtn: {
    all: 0,
  },
  filterActive: "all",
  searchEq: "",
  pagination: {
    itemsPerPage: [0, 1],
    page: 1,
    total: 0,
  },
  dataFiltered: [],
};

const equipmentSlice = createSlice({
  initialState,
  name: "equipments",
  reducers: {
    setFilterBtn: (state, action) => {
      state.filterBtn[action.payload.name] = action.payload.value;
    },
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
    setSearchEq: (state, action) => {
      state.searchEq = action.payload;
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
  setSearchEq,
  setPagination,
  setDataFiltered,
} = equipmentSlice.actions;

export const selectFilterBtn = (state) => state.equipments.filterBtn;
export const selectFilterActive = (state) => state.equipments.filterActive;
export const selectSearchEq = (state) => state.equipments.searchEq;
export const selectPagination = (state) => state.equipments.pagination;
export const selectDataFiltered = (state) => state.equipments.dataFiltered;

export default equipmentSlice.reducer;
