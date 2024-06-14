
import { Decks } from '@/pages/decks'

export function App() {
  return (
    <div>
      <Header email={'frontend-dev@gmail.com'} isLoggedIn={true} onLogout={() => {}} userName={'Ramin'} />
      <Decks />
    </div>
  )
}
