import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";
import url from "../../../helpers/url";

apiSlice.enhanceEndpoints({ addTagTypes: ["Shift"] });

const shiftsAdapter = createEntityAdapter({
  //selectId: (user) => user.id
});

const initialState = shiftsAdapter.getInitialState();

export const shiftsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShifts: builder.query({
      query: () => url.backend.getShifts,
      transformResponse: (response) => {
        return shiftsAdapter.setAll(initialState, response.shifts);
      },
      providesTags: (result, error, arg) => [
        { type: "Shift", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Shift", id })),
      ],
    }),
    addShift: builder.mutation({
      query: (body) => ({
        url: url.backend.shiftRegister,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),
    updateShift: builder.mutation({
      query: ({ id, body }) => ({
        url: url.backend.updateShift(id),
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Shift"],
    }),
    deleteShift: builder.mutation({
      query: (id) => ({
        url: url.backend.deleteShift(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Shift"],
    }),
  }),
});

export const {
  useGetShiftsQuery,
  useAddShiftMutation,
  useUpdateShiftMutation,
  useDeleteShiftMutation,
} = shiftsApiSlice;

export const selectShiftsResult = shiftsApiSlice.endpoints.getShifts.select();

const selectShiftsData = createSelector(
  selectShiftsResult,
  (shiftsResult) => shiftsResult.data
);

export const {
  selectAll: selectAllShifts,
  selectById: selectShiftById,
  selectIds: selectShiftsIds,
} = shiftsAdapter.getSelectors(
  (state) => selectShiftsData(state) ?? initialState
);
