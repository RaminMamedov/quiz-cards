import type { Meta, StoryObj } from '@storybook/react'
import {
  CreateNewPassword,
  CreatePasswordValue,
} from '@/components/auth/CreateNewPassword/CreateNewPassword'

const meta = {
  title: 'Forms/CreateNewPassword',
  component: CreateNewPassword,
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: CreatePasswordValue) => {
      alert(JSON.stringify(data))
    }

    return <CreateNewPassword onSubmit={onSubmit} />
  },
  args: {} as any,
}
