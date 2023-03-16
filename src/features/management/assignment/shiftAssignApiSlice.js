import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";
import url from "../../../helpers/url";

apiSlice.enhanceEndpoints({ addTagTypes: ["ShiftAssign"] });

const shiftAssignAdapter = createEntityAdapter({
  //selectId: (user) => user.id
});

const initialState = shiftAssignAdapter.getInitialState();

export const shiftAssignApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShiftsByPlant: builder.query({
      query: (id) => url.backend.getShiftAssign(id),
      transformResponse: (response) => {
        return shiftAssignAdapter.setAll(
          initialState,
          response.plant_shift_data
        );
      },
      transformErrorResponse: (response, meta, arg) => {
        response.status;
      },
      providesTags: (result, error, arg) => [
        { type: "ShiftAssign", id: "LIST" },
        ...result.ids.map((id) => ({ type: "ShiftAssign", id })),
      ],
    }),
    assignShift: builder.mutation({
      query: ({ idPlant, id }) => ({
        url: url.backend.shiftAssignRegister(idPlant, id),
        method: "POST",
      }),
      invalidatesTags: ["ShiftAssign"],
    }),
    deleteAssignShift: builder.mutation({
      query: ({ idPlant, id }) => ({
        url: url.backend.deleteShiftAssign(idPlant, id),
        method: "DELETE",
      }),
      invalidatesTags: ["ShiftAssign"],
    }),
  }),
});

export const {
  useGetShiftsByPlantQuery,
  useAssignShiftMutation,
  useDeleteAssignShiftMutation,
} = shiftAssignApiSlice;

export const selectAssignShiftResult =
  shiftAssignApiSlice.endpoints.getShiftsByPlant.select();

const selectAssignShiftData = createSelector(
  selectAssignShiftResult,
  (assignShiftResult) => assignShiftResult.data
);

export const {
  selectAll: selectAllAssignShift,
  selectById: selectAssignShiftById,
  selectIds: selectAssignShiftIds,
} = shiftAssignAdapter.getSelectors(
  (state) => selectAssignShiftData(state) ?? initialState
);
