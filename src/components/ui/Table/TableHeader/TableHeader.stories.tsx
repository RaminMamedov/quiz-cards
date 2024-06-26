import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Table } from '@/components/ui/Table/Table'
import PlayCircleOutline from '@/assets/icons/PlayCircleOutline'
import EditOutline from '@/assets/icons/EditOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Button } from '@/components/ui/Button'
import { Column, Sort, TableHeader } from '@/components/ui/Table'

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const columns: Column[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'cards', title: 'Cards', sortable: true },
  { key: 'lastUpdated', title: 'Last Updated', sortable: true },
  { key: 'createdBy', title: 'Created by', sortable: true },
  { key: 'actions', title: '', sortable: false },
]

const data = [
  { name: 'Pack Name', cards: 4, lastUpdated: '18.03.2021', createdBy: 'Ivan Ivanov' },
  { name: 'Pack Name 2', cards: 5, lastUpdated: '19.03.2021', createdBy: 'John Doe' },
  { name: 'Pack Name 3', cards: 6, lastUpdated: '20.03.2021', createdBy: 'Jane Smith' },
  // Add more rows as needed
]

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedData = [...data].sort((a, b) => {
      if (!sort) return 0
      const order = sort.direction === 'asc' ? 1 : -1
      return (
        a[sort.key as keyof typeof a]
          .toString()
          .localeCompare(b[sort.key as keyof typeof b].toString()) * order
      )
    })

    return (
      <Table.Root>
        <TableHeader columns={columns} sort={sort} onSort={setSort} />
        <Table.Body>
          {sortedData.map((row, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.cards}</Table.Cell>
              <Table.Cell>{row.lastUpdated}</Table.Cell>
              <Table.Cell>{row.createdBy}</Table.Cell>
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
    )
  },
}

export const Empty: Story = {
  render: () => {
    return (
      <Table.Empty>
        <Button>Add New Card</Button>
      </Table.Empty>
    )
  },
}
