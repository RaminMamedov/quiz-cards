import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Table.module.scss'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const rootClasses = clsx(s.root, className)

    return <table className={rootClasses} ref={ref} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const headClasses = clsx(s.thead, className)

    return <thead className={headClasses} ref={ref} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const bodyClasses = clsx(s.body, className)

    return <tbody className={bodyClasses} ref={ref} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const rowClasses = clsx(s.row, className)

    return <tr className={rowClasses} ref={ref} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const headCellClasses = clsx(s.headCell, className)

    return <th className={headCellClasses} ref={ref} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const cellClasses = clsx(s.cell, className)

    return <td className={cellClasses} ref={ref} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>

const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  (
    {
      children,
      className,
      text = 'This deck is empty. Click add new deck to fill this deck',
      ...restProps
    },
    ref
  ): JSX.Element => {
    const classNames = {
      emptyDescription: s.emptyDescription,
      root: clsx(s.empty, className),
    }
    const emptyClasses = clsx(s.empty, className)

    return (
      <div className={emptyClasses} ref={ref} {...restProps}>
        <Typography className={classNames.emptyDescription} variant={'body1'}>
          {text}
        </Typography>
        {children}
      </div>
    )
  }
)

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }
