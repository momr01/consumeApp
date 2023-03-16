import { apiSlice } from "../../app/api/apiSlice";
import url from "../../helpers/url";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: url.backend.login,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: url.backend.logout,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
