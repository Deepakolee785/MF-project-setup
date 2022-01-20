import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posts = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useGetPostsQuery } = posts;
