import type { Meta, StoryObj } from '@storybook/react'

import { SignUp, SignUpFormValues } from '@/components/auth/SignUp/SignUp'

const meta = {
  title: 'Forms/SignUp',
  component: SignUp,
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: SignUpFormValues) => {
      alert(JSON.stringify(data))
    }

    return <SignUp onSubmit={onSubmit} />
  },
  args: {} as any,
}
