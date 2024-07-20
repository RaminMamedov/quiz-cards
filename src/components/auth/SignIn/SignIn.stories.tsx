import type { Meta, StoryObj } from '@storybook/react'

import { SignIn, FormFields } from '../SignIn'

const meta = {
  title: 'Forms/SignIn',
  component: SignIn,
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: FormFields) => {
      alert(JSON.stringify(data))
    }

    return <SignIn onSubmit={onSubmit} />
  },
  args: {} as any,
}
