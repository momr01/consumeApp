import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";
import url from "../../../helpers/url";

apiSlice.enhanceEndpoints({ addTagTypes: ["Plant"] });

const plantsAdapter = createEntityAdapter({
  //selectId: (user) => user.id
});

const initialState = plantsAdapter.getInitialState();

export const plantsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => url.backend.getPlants,
      transformResponse: (response) => {
        return plantsAdapter.setAll(initialState, response.plants);
      },
      transformErrorResponse: (response, meta, arg) => {
        response.status;
      },
      providesTags: (result, error, arg) => [
        { type: "Plant", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Plant", id })),
      ],
    }),
    addPlant: builder.mutation({
      query: (body) => ({
        url: url.backend.plantRegister,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Plant"],
    }),
    updatePlant: builder.mutation({
      query: ({ id, body }) => ({
        url: url.backend.updatePlant(id),
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Plant"],
    }),
    deletePlant: builder.mutation({
      query: (id) => ({
        url: url.backend.deletePlant(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Plant"],
    }),
  }),
});

export const {
  useGetPlantsQuery,
  useAddPlantMutation,
  useUpdatePlantMutation,
  useDeletePlantMutation,
} = plantsApiSlice;

export const selectPlantsResult = plantsApiSlice.endpoints.getPlants.select();

const selectPlantsData = createSelector(
  selectPlantsResult,
  (plantsResult) => plantsResult.data
);

export const {
  selectAll: selectAllPlants,
  selectById: selectPlantById,
  selectIds: selectPlantsIds,
} = plantsAdapter.getSelectors(
  (state) => selectPlantsData(state) ?? initialState
);
