import { UserDropDown } from '@/components/layout'

export function App() {
  return (
    <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>
      {/*<DropDownMenu trigger={<Avatar userName={'Ramin'} />} />*/}
      {/*<div>*/}
      {/*  <DropDownMenu trigger={<MoreVerticalOutline />} />*/}
      {/*</div>*/}
      <UserDropDown email={'frontend-dev@gmail.com'} onLogout={() => {}} userName={'Ramin'} />
    </div>
  )
}
