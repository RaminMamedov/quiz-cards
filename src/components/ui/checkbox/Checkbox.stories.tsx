import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const CheckboxUnchecked: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const CheckboxCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const CheckboxUncheckedDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const CheckboxWithTitle: Story = {
  args: {
    checked: true,
    disabled: false,
    id: 'c1',
    title: 'Check-box with title',
  },
}

export const CheckboxWithTitleDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    id: 'c1',
    title: 'Check-box with title disabled',
  },
}
