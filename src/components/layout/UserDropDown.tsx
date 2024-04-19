import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import LogOutOutline from '@/assets/icons/LogOutOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import { Avatar } from '@/components/ui/Avatar'
import { DropDownItem } from '@/components/ui/DropDown/DropDownItem'
import { DropDownMenu } from '@/components/ui/DropDown/DropDownMenu'
import { DropDownSeparator } from '@/components/ui/DropDown/DropDownSeparator'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import s from './UserDropDown.module.scss'

export type UserDropDownProps = {
  email: string
  onLogout: ComponentPropsWithoutRef<typeof DropDownItem>['onSelect']
  userName: string
}

export const UserDropDown = ({ email, onLogout, userName }: UserDropDownProps) => {
  return (
    <DropDownMenu trigger={<Avatar userName={'Ramin'} />}>
      <DropdownMenuPrimitive.Trigger>
        <button className={s.trigger}>
          <Typography className={s.name} variant={'subtitle1'}>
            {userName}
          </Typography>
          <Avatar userName={''} />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content>
        <DropdownMenuPrimitive.Label>
          <Avatar userName={''} />
          <div>
            <Typography className={s.userName} variant={'subtitle2'}>
              {userName}
            </Typography>
            <Typography className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuPrimitive.Label>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Link to={'/profile'}>
            <PersonOutline />
            My profile
          </Link>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem onSelect={onLogout}>
          <LogOutOutline />
          Sign out
        </DropDownItem>
      </DropdownMenuPrimitive.Content>
    </DropDownMenu>
  )
}
