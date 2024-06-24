import { CSSProperties, useState } from 'react'

import { Meta } from '@storybook/react'
import { ModalWindow } from '@/components/ui/ModalWindow/ModalWindow'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'

const meta = {
  title: 'Components/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalWindow>

export default meta

export const Modal = {
  render() {
    const [open, setOpen] = useState(false)

    const selectExampleArray = [
      { text: 'First select value', value: 'first' },
      { text: 'Second select value', value: 'second' },
      { text: 'Third select value', value: 'third' },
      { text: 'Fourth select value', value: 'fourth' },
      { text: 'Fifth select value', value: 'fifth' },
    ]

    const container: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
    }
    return (
      <>
        <ModalWindow trigger={<Button>Open</Button>} open={open} setOpen={setOpen} title="Title">
          <div style={container}>
            <Select items={selectExampleArray} value={'first'} placeholder={'Select-box'} />
            <Input label="Input" placeholder={'Input'} />
            <Input label="Input" placeholder={'Input'} />
            <Checkbox />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
              <Button variant={'secondary'}>Button Secondary</Button>
              <Button variant={'primary'}>Button primary</Button>
            </div>
          </div>
        </ModalWindow>
      </>
    )
  },
}
