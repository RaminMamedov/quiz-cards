import { memo } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/assets/icons/Logo'
import { UserDropDown, UserDropDownProps } from '@/components/layout/UserDropDown'

import s from './Header.module.scss'

import { Button } from '../Button'

export type HeaderProps =
  | (Partial<UserDropDownProps> & {
      isLoggedIn?: false
    })
  | (UserDropDownProps & {
      isLoggedIn?: true
    })

export const Header = memo(({ email, isLoggedIn, logout, name }: HeaderProps) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link to={'/'}>
          <Logo height={'36px'} width={'157px'} />
        </Link>
        {isLoggedIn && <UserDropDown email={email} logout={logout} name={name} />}
        {!isLoggedIn && (
          <Button as={Link} to={'/sign-in'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})
