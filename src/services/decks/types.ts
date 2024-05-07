import { components, operations } from '@/services/schema'

export type Deck = components['schemas']['Deck']
export type GetDecksResponse = components['schemas']['PaginatedDecks']
export type GetDeckResponse = components['schemas']['DeckWithAuthor']
export type GetDecksArgs = operations['DecksController_findAllV2']['parameters']['query']
export type CreateDeckArgs = components['schemas']['CreateDeckRequest']
export type UpdateDeckArgs = Partial<CreateDeckArgs> & { id: Deck['id'] }
export type DeleteDeckArgs = operations['DecksController_remove']['parameters']['path']
