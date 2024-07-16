import { useState } from 'react'

import EditOutline from '@/assets/icons/EditOutline'
import PlayCircleOutline from '@/assets/icons/PlayCircleOutline'
import TrashOutline from '@/assets/icons/TrashOutline'
import { Button } from '@/components/ui/Button'
import { Column, Sort, TableHeader } from '@/components/ui/Table'
import { Table } from '@/components/ui/Table/Table'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TableHeader> = {
  component: TableHeader,
  tags: ['autodocs'],
  title: 'Components/TableHeader',
}

export default meta

type Story = StoryObj<typeof meta>

const columns: Column[] = [
  { key: 'name', sortable: true, title: 'Name' },
  { key: 'cards', sortable: true, title: 'Cards' },
  { key: 'lastUpdated', sortable: true, title: 'Last Updated' },
  { key: 'createdBy', sortable: true, title: 'Created by' },
  { key: 'actions', sortable: false, title: '' },
]

const data = [
  { cards: 4, createdBy: 'Ivan Ivanov', lastUpdated: '18.03.2021', name: 'Pack Name' },
  { cards: 5, createdBy: 'John Doe', lastUpdated: '19.03.2021', name: 'Pack Name 2' },
  { cards: 6, createdBy: 'Jane Smith', lastUpdated: '20.03.2021', name: 'Pack Name 3' },
  // Add more rows as needed
]

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedData = [...data].sort((a, b) => {
      if (!sort) {
        return 0
      }
      const order = sort.direction === 'asc' ? 1 : -1

      return (
        a[sort.key as keyof typeof a]
          .toString()
          .localeCompare(b[sort.key as keyof typeof b].toString()) * order
      )
    })

    return (
      <Table.Root>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
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
