import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-black-kappa.vercel.app/api/v1",
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: (accessToken) => ({
        url: `/user/me`,
        method: "Get",
        headers: {
          Authorization: accessToken,
        },
      }),
      providesTags: ["posts"],
    }),

    getAllPosts: builder.query({
      query: (params) => ({
        url: `/posts?${new URLSearchParams(params).toString()}`,
        method: "Get",
      }),
      providesTags: ["posts"],
    }),

    addPost: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/posts/add-post`,
        method: "POST",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["posts"],
    }),
    editPost: builder.mutation({
      query: ({ data, accessToken, postId }) => ({
        url: `/posts/edit-post/${postId}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["posts"],
    }),
    starPost: builder.mutation({
      query: ({ accessToken, postId }) => ({
        url: `/posts/${postId}`,
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["posts"],
    }),

    deletePost: builder.mutation({
      query: ({ accessToken, postId }) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["posts"],
    }),

    postEmail: builder.mutation({
      query: (data) => ({
        url: `/email`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetProfileQuery,
  useAddPostMutation,
  useEditPostMutation,
  usePostEmailMutation,
  useGetAllPostsQuery,
  useDeletePostMutation,
  useStarPostMutation,
} = api;
