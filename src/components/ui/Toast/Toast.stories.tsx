import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Toast as ToastComponent } from '@/components/ui/Toast'
import { Button } from '@/components/ui/Button'

const meta = {
  argTypes: {
    stacked: { control: 'boolean' },
  },
  component: ToastComponent,
  tags: ['autodocs'],
  title: 'Components/Toast',
} satisfies Meta<typeof ToastComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Toast: Story = {
  render: args => {
    const notifyInfoHandler = () => toast.info('Informational toast')
    const notifySuccessHandler = () => toast.success('Success toast')
    const notifyWarningHandler = () => toast.warning('Warning toast')
    const notifyErrorHandler = () => toast.error('Error toast')

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <Button onClick={notifyInfoHandler}>Info</Button>
        <Button onClick={notifySuccessHandler}>Success</Button>
        <Button onClick={notifyWarningHandler}>Warning</Button>
        <Button onClick={notifyErrorHandler}>Error</Button>
        <ToastComponent {...args} />
      </div>
    )
  },
}
