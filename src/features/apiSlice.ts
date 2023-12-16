import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IFixturesResult from "../interfaces/IFixturesResult.ts";
import IFixturesQuery from "../interfaces/IFixturesQuery.ts";

/**
 * All webservices helpers to fetch that from the server are implemented at here.
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    fixtures: builder.mutation<IFixturesResult, IFixturesQuery>({
      query: ({ date }) => ({
        url: `/football/fixtures`,
        params: ["date", date],
      }),
    }),
  }),
});

export const { useFixturesMutation } = apiSlice;
