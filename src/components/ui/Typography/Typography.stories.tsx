import type {Meta, StoryObj} from '@storybook/react';
import {Typography} from "./Typography";

const meta = {
    component: Typography,
    tags: ['autodocs'],
    title: 'Components/Typography',
} satisfies Meta<typeof Typography>
export default meta
type Story = StoryObj<typeof Typography>;
export const H1: Story = {
    args: {
        variant: "h1",
        children: "Text Example",
    },
};
export const H2: Story = {
    args: {
        variant: "h2",
        children: "Text Example"
    },
};export const H3: Story = {
    args: {
        variant: "h3",
        children: "Text Example"
    },
};
export const H4: Story = {
    args: {
        variant: "h4",
        children: "Text Example"
    },
};
export const Body1: Story = {
    args: {
        variant: "body1",
        children: "Text Example"
    },
};
export const Body2: Story = {
    args: {
        variant: "body2",
        children: "Text Example"
    },
};
export const Subtitle1: Story = {
    args: {
        variant: "subtitle1",
        children: "Text Example"
    },
};
export const Subtitle2: Story = {
    args: {
        variant: "subtitle2",
        children: "Text Example"
    },
};
export const Caption: Story = {
    args: {
        variant: "caption",
        children: "Text Example"
    },
};
export const Overline: Story = {
    args: {
        variant: "overline",
        children: "Text Example"
    },
};
export const Link1: Story = {
    args: {
        variant: "link1",
        children: "Example Link1"
    },
};
export const Link2: Story = {
    args: {
        variant: "link2",
        children: "Example Link2"
    },
};