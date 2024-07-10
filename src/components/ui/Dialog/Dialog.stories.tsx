import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './Dialog'
import { Button } from '@/components/ui/Button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const DeletePack: Story = {
  args: {
    trigger: <Button variant={'secondary'}>Delete Pack</Button>,
    modalHeaderTitle: 'Delete Pack',
    itemName: 'First Pack',
    action: 'removeDeck',
    buttonTitle: 'Delete Pack',
    onClick: action('Clicked for Delete Pack button'),
  },
}

export const DeleteCard: Story = {
  args: {
    trigger: <Button variant={'secondary'}>Delete Card</Button>,
    modalHeaderTitle: 'Delete Card',
    itemName: 'First Card',
    action: 'removeCard',
    buttonTitle: 'Delete Card',
    onClick: action('Clicked for Delete Card button'),
  },
}
