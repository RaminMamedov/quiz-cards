import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox/ControlledCheckbox'
import { ControlledInput } from '@/components/controlled/ControlledInput'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decksService'

export const Decks = () => {
  const { control, handleSubmit } = useForm()
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    name: search,
  })
  const [deckId, setDeckId] = useState<string>('')

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isDeckBeingUpdated }] = useUpdateDeckMutation()

  if (isLoading) {
    return <h1>LOADING...</h1>
  }

  // const mappedData = data?.items.map(deck => ({
  //   cards: deck.cardsCount,
  //   createdBy: deck.author.name,
  //   id: deck.id,
  //   lastUpdated: deck.updated,
  //   name: deck.name,
  // }))

  const paginationOptions = []

  for (let i = 0; i < (data?.pagination?.totalPages ?? 0); i++) {
    paginationOptions.push(i + 1)
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit(data => {
          createDeck(data as any)
        })}
        style={{ marginBottom: '40px' }}
      >
        <ControlledInput
          control={control}
          label={'Create deck'}
          name={'name'}
          style={{ marginBottom: '10px' }}
        />
        <ControlledCheckbox control={control} label={'Private'} name={'isPrivate'} />
        <Button disabled={isDeckBeingCreated}>Add new deck</Button>
      </form>
      <hr />
      <Input
        label={'Search deck'}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '40px' }}
        value={search}
      />
      <hr />
      {data?.items.map(deck => {
        return (
          <Fragment key={deck.id}>
            <div>Author: {deck.author.name}</div>
            <div>Deck: {deck.name}</div>
            <div>Private: {deck.isPrivate ? 'Yes' : 'No'}</div>
            <Button
              disabled={deckId === deck.id && isDeckBeingDeleted}
              onClick={() => {
                setDeckId(deck.id)
                deleteDeck({ id: deck.id })
              }}
            >
              Delete Deck
            </Button>
            <Button
              disabled={deckId === deck.id && isDeckBeingUpdated}
              onClick={() => {
                const newDeck = { isPrivate: false, name: 'test-edited' }

                setDeckId(deck.id)
                updateDeck({ id: deck.id, ...newDeck })
              }}
            >
              Update Deck
            </Button>
            <hr />
          </Fragment>
        )
      })}
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', marginTop: '40px' }}>
        {paginationOptions.map(i => {
          return (
            <Button
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{ padding: '5px', textAlign: 'center', width: '100px' }}
            >
              {i}
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
