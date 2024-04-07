import React, { ComponentPropsWithoutRef, ReactNode, RefAttributes, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './Select.module.scss'

type Item = {
  text: string
  value: string
}

type SelectProps = {
  ariaLabel?: string
  disabled?: boolean
  items: Item[]
  placeholder?: string
  title?: string
} & ComponentPropsWithoutRef<'button'>

type SelectItemProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  value: string
}

export const Select = (props: SelectProps) => {
  const { ariaLabel, disabled, items, placeholder, title } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={s.selectTitle}>{title}</div>
      <SelectRadix.Root
        onOpenChange={() => {
          setOpen(!open)
        }}
      >
        <SelectRadix.Trigger
          aria-label={ariaLabel}
          className={open ? `${s.selectTrigger} ${s.selectTriggerOpen}` : s.selectTrigger}
          disabled={disabled}
        >
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={s.selectIcon}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.selectContent} position={'popper'}>
            <SelectRadix.Viewport
              className={open ? `${s.selectViewport} ${s.selectViewportOpen}` : s.selectViewport}
            >
              <SelectRadix.Group>
                {items.map(i => (
                  <SelectItem key={i.value} value={i.value}>
                    {i.text}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}
const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: SelectItemProps & RefAttributes<HTMLDivElement>,
    forwardedRef: React.LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <SelectRadix.Item
        className={classnames(s.selectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
