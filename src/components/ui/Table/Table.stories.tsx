import EditOutline from '@/assets/icons/EditOutline'
import PlayCircleOutline from '@/assets/icons/PlayCircleOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Button } from '@/components/ui/Button'
import { Table } from '@/components/ui/Table/Table'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Cards</Table.HeadCell>
          <Table.HeadCell>Last Updated</Table.HeadCell>
          <Table.HeadCell>Created by</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button>
                  <PlayCircleOutline />
                </button>
                <button>
                  <EditOutline />
                </button>
                <button>
                  <TrashOutline />
                </button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
}

export const Empty = {
  render: () => {
    return (
      <Table.Empty>
        <Button>Add New Card</Button>
      </Table.Empty>
    )
  },
}
