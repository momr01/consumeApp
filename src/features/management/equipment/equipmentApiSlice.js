import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";
import url from "../../../helpers/url";

apiSlice.enhanceEndpoints({ addTagTypes: ["Equipment"] });

const eqAdapter = createEntityAdapter({
  //selectId: (user) => user.id
});

const initialState = eqAdapter.getInitialState();

export const equipmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEq: builder.query({
      query: () => url.backend.getEquipments,
      transformResponse: (response) => {
        return eqAdapter.setAll(initialState, response.equipments);
      },
      transformErrorResponse: (response, meta, arg) => {
        response.status;
      },
      providesTags: (result, error, arg) => [
        { type: "Equipment", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Equipment", id })),
      ],
    }),
    addEq: builder.mutation({
      query: (body) => ({
        url: url.backend.equipmentRegister,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Equipment"],
    }),
    updateEq: builder.mutation({
      query: ({ id, body }) => ({
        url: url.backend.updateEquipment(id),
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Equipment"],
    }),
    deleteEq: builder.mutation({
      query: (id) => ({
        url: url.backend.deleteEquipment(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Equipment"],
    }),
    getTypes: builder.query({
      query: () => url.backend.getEqTypes,
      transformResponse: (response) => {
        return response.equipment_types_data;
      },
      transformErrorResponse: (response, meta, arg) => {
        response.status;
      },
    }),
  }),
});

export const {
  useGetEqQuery,
  useGetTypesQuery,
  useAddEqMutation,
  useUpdateEqMutation,
  useDeleteEqMutation,
} = equipmentApiSlice;

export const selectEqResult = equipmentApiSlice.endpoints.getEq.select();

const selectEqData = createSelector(
  selectEqResult,
  (eqResult) => eqResult.data
);

export const {
  selectAll: selectAllEq,
  selectById: selectEqById,
  selectIds: selectEqIds,
} = eqAdapter.getSelectors((state) => selectEqData(state) ?? initialState);
