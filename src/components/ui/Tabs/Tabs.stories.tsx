import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
  argTypes: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabsExampleArray = [
  { disabled: false, title: 'Sign in', value: 'sign-in' },
  { disabled: false, title: 'Radio Group', value: 'radio-group' },
  { disabled: false, title: 'Select', value: 'select' },
  { disabled: false, title: 'Checkbox', value: 'checkbox' },
  { disabled: false, title: 'Button', value: 'button' },
  { disabled: true, title: 'Disabled', value: 'disabled' },
]

export const TabsExample: Story = {
  args: {
    defaultValue: 'radio-group',
    tabs: tabsExampleArray,
    tabsTitle: 'Example title for Tabs',
  },
}
