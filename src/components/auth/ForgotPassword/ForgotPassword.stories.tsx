import type { Meta, StoryObj } from '@storybook/react'

import {
  ForgotPassword,
  ForgotPasswordValue,
} from '@/components/auth/ForgotPassword/ForgotPassword'

const meta = {
  title: 'Forms/ForgotPassword',
  component: ForgotPassword,
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: ForgotPasswordValue) => {
      alert(JSON.stringify(data))
    }

    return <ForgotPassword onSubmit={onSubmit} />
  },
  args: {} as any,
}
