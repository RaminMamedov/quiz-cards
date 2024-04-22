import type { Meta, StoryObj } from '@storybook/react'

import { UserDropDown } from './UserDropDown'

const meta: Meta<typeof UserDropDown> = {
  argTypes: {
    onLogout: { action: 'logout' },
  },
  component: UserDropDown,
  decorators: [Story => <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>{Story()}</div>],
  tags: ['autodocs'],
  title: 'Components/UserDropDown',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'johndoe@gmail.com',
    onLogout: () => {},
    userName: 'John Doe',
  },
}
