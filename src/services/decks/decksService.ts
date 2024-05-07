import { baseApi } from '@/services/baseApi'
import {
  CreateDeckArgs,
  DeleteDeckArgs,
  GetDeckResponse,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDeckArgs,
} from '@/services/decks/types'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { PatchCollection } from '@reduxjs/toolkit/dist/query/core/buildThunks'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<GetDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          try {
            const result = await queryFulfilled

            decksService.util
              .selectInvalidatedBy(getState(), ['Decks'])
              .forEach(({ endpointName, originalArgs }) => {
                if (endpointName !== 'getDecks') {
                  return
                } else {
                  dispatch(
                    decksService.util.updateQueryData(endpointName, originalArgs, draft => {
                      draft.items.unshift(result.data)
                    })
                  )
                }
              })
          } catch {
            /* empty */
          }
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<GetDeckResponse, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        async onQueryStarted({ id, ...patch }, { dispatch, getState, queryFulfilled }) {
          const patchResults: PatchCollection[] = []

          decksService.util
            .selectInvalidatedBy(getState(), ['Decks'])
            .forEach(({ endpointName, originalArgs }) => {
              if (endpointName !== 'getDecks') {
                return
              } else {
                patchResults.push(
                  dispatch(
                    decksService.util.updateQueryData(endpointName, originalArgs, draft => {
                      const itemToUpdate = draft.items.find(deck => deck.id === id)

                      if (!itemToUpdate) {
                        return
                      }

                      Object.assign(itemToUpdate, patch)
                    })
                  )
                )
              }
            })

          try {
            await queryFulfilled
          } catch {
            patchResults.forEach(patch => patch.undo())
          }
        },
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
