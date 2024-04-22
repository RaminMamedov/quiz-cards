import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  argTypes: {
    size: {
      control: 'select',
      description: 'Size of the avatar',
      options: ['small', 'large'],
    },
    src: { description: 'Image URL for the avatar', type: 'string' },
    userName: { description: 'User name for the avatar', type: 'string' },
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'Ramin',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    userName: 'Ramin',
  },
}
