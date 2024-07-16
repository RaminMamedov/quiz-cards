import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TableHeader.module.scss'

import { Table } from '../Table'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Props = Omit<
  {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  } & ComponentPropsWithoutRef<typeof Table.Head>,
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, onSort, sort, ...restProps }, ref): JSX.Element => {
    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      if (sort?.key !== key) {
        return onSort({ direction: 'asc', key })
      }

      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    }

    return (
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ key, sortable, title }) => {
            const headCellClasses = clsx(sortable && s.activeHeadCell)

            return (
              <Table.HeadCell
                className={headCellClasses}
                key={key}
                onClick={handleSort(key, sortable)}
              >
                <Typography as={'span'} className={s.sortCell} variant={'subtitle2'}>
                  {title}
                  {sort && sort.key === key && (
                    <>
                      {sort.direction === 'asc' && <ArrowUpIcon className={s.sortIcon} />}
                      {sort.direction !== 'asc' && <ArrowDownIcon className={s.sortIcon} />}
                    </>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
