import type { Meta, StoryObj } from '@storybook/react'
import { CheckEmail } from '@/components/auth/CheckEmail/CheckEmail'

const meta = {
  title: 'Forms/CheckEmail',
  component: CheckEmail,
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'example@mail.com',
  },
}
