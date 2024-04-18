import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>
export const H1: Story = {
  args: {
    children: 'Text Example',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Text Example',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Text Example',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'Text Example',
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    children: 'Text Example',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Text Example',
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Text Example',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Text Example',
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Text Example',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'Text Example',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'Example Link1',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Example Link2',
    variant: 'link2',
  },
}
