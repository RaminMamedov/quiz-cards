import { baseQueryWithReauth } from '@/services/baseQueryWithReauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'],
})
