import Logo from '@/assets/icons/Logo'
import { UserDropDown } from '@/components/layout/UserDropDown'
import { Header } from '@/components/ui/Header/Header'
import { Decks } from '@/pages/decks'

export function App() {
  return (
    <div>
      <Header email={'frontend-dev@gmail.com'} isLoggedIn logout={() => {}} name={'Ramin'} />
      <Logo height={'36px'} width={'157px'} />
      <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>
        <UserDropDown email={'frontend-dev@gmail.com'} logout={() => {}} name={'Ramin'} />
      </div>
      <Decks />
    </div>
  )
}
