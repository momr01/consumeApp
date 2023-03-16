import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import url from "../../helpers/url";

apiSlice.enhanceEndpoints({ addTagTypes: ["User"] });

const usersAdapter = createEntityAdapter({
  //selectId: (user) => user.id
});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => url.backend.getAllUsers,
      transformResponse: (response) => {
        return usersAdapter.setAll(initialState, response.users);
      },
      transformErrorResponse: (response, meta, arg) => {
        response.status;
      },
      providesTags: (result, error, arg) => [
        { type: "User", id: "LIST" },
        ...result.ids.map((id) => ({ type: "User", id })),
      ],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: url.backend.userRegister,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: url.backend.updateProfile(id),
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    enableUser: builder.mutation({
      query: ({ id }) => ({
        url: url.backend.enableUser(id),
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
    disableUser: builder.mutation({
      query: ({ id }) => ({
        url: url.backend.disableUser(id),
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
    changePwd: builder.mutation({
      query: ({ id, body }) => ({
        url: url.backend.changePwd(id),
        method: "PUT",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
    getRoles: builder.query({
      query: () => url.backend.getRoles,
      transformResponse: (response) => {
        return response.roles;
      },
    }),
    getLanguages: builder.query({
      query: () => url.backend.languages,
      transformResponse: (response) => {
        return response.available_languages;
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useEnableUserMutation,
  useDisableUserMutation,
  useGetRolesQuery,
  useGetLanguagesQuery,
} = usersApiSlice;

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
