import { components, operations } from '@/services/schema'

export type Deck = components['schemas']['Deck']
export type GetDecksResponse = components['schemas']['PaginatedDecks']
export type GetDeckResponse = components['schemas']['DeckWithAuthor']
export type GetDecksArgs = operations['DecksController_findAllV2']['parameters']['query']
export type CreateDeckArgs = components['schemas']['CreateDeckRequest']
export type UpdateDeckArgs = { id: Deck['id'] } & Partial<CreateDeckArgs>
export type DeleteDeckArgs = operations['DecksController_remove']['parameters']['path']
