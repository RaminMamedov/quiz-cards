import { BrowserRouter } from 'react-router-dom'

import Logo from '@/assets/icons/Logo'
import { UserDropDown } from '@/components/layout/UserDropDown/UserDropDown'
import { Header } from '@/components/ui/Header/Header'

export function App() {
  return (
    <BrowserRouter>
      <Header email={'frontend-dev@gmail.com'} isLoggedIn logout={() => {}} name={'Ramin'} />
      <Logo height={'36px'} width={'157px'} />
      <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>
        {/*<DropDownMenu trigger={<Avatar userName={'Ramin'} />} />*/}
        {/*<div>*/}
        {/*  <DropDownMenu trigger={<MoreVerticalOutline />} />*/}
        {/*</div>*/}
        <UserDropDown email={'frontend-dev@gmail.com'} logout={() => {}} name={'Ramin'} />
      </div>
    </BrowserRouter>
  )
}
