import type { Meta, StoryObj } from '@storybook/react'

import EditOutline from '@/assets/icons/EditOutline'
import LogOutOutline from '@/assets/icons/LogOutOutline'
import MoreVerticalOutline from '@/assets/icons/MoreVerticalOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import PlayCircleOutline from '@/assets/icons/PlayCircleOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Avatar } from '@/components/ui/Avatar'
import { Typography } from '@/components/ui/typography'

import s from './DropDown.module.scss'

import { DropDownItem } from './DropDownItem'
import { DropDownMenu } from './DropDownMenu'
import { DropDownSeparator } from './DropDownSeparator'

const meta = {
  component: DropDownMenu,
  decorators: [Story => <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>{Story()}</div>],
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

const userData = {
  avatar: '',
  email: 'frontend-dev@gmail.com',
  name: 'Ramin',
}

export const WithUser: Story = {
  args: {
    children: (
      <>
        <DropDownItem asChild>
          <div className={s.photoAndEmail}>
            <Avatar size={'small'} userName={userData.name} />
            <div className={s.nameAndEmail}>
              <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
                {userData.name}
              </Typography>
              <Typography as={'div'} className={s.userEmail} variant={'caption'}>
                {userData.email}
              </Typography>
            </div>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <PersonOutline />
            <div>My Profile</div>
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <LogOutOutline />
            <div>Sign Out</div>
          </Typography>
        </DropDownItem>
      </>
    ),
    trigger: <Avatar userName={userData.name} />,
  },
}
export const WithOutUser: Story = {
  args: {
    children: (
      <>
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <PlayCircleOutline />
            <div>Learn</div>
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <EditOutline />
            <div>Edit</div>
          </Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} variant={'caption'}>
            <TrashOutline />
            <div>Delete</div>
          </Typography>
        </DropDownItem>
      </>
    ),
    trigger: <MoreVerticalOutline />,
  },
}
