import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const radioGroupExampleArray = [
  { label: 'First value', value: 'first' },
  { label: 'Second value', value: 'second' },
  { label: 'Third value', value: 'third' },
  { label: 'Fourth value', value: 'fourth' },
  { label: 'Fifth value', value: 'fifth' },
]

export const RadioGroupBasic: Story = {
  args: {
    options: radioGroupExampleArray,
  },
}

export const RadioGroupDefaultValue: Story = {
  args: {
    defaultValue: radioGroupExampleArray[1].value,
    options: radioGroupExampleArray,
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    defaultValue: radioGroupExampleArray[0].value,
    disabled: true,
    options: radioGroupExampleArray,
  },
}
