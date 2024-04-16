import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './Tabs.module.scss'

type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  children?: ReactNode
  defaultValue?: string
  onValueChange?: (value: string) => void
  tabs: TabType[]
  tabsTitle?: string
  value?: string
} & ComponentPropsWithoutRef<typeof TabsRadixUI.Root>

export const Tabs = ({ children, className, defaultValue, tabs, tabsTitle, value }: TabsProps) => {
  const classNames = {
    list: s.list,
    root: clsx(s.root, className),
    title: s.title,
    triggerFirst: clsx(s.trigger, s.first),
    triggerLast: clsx(s.trigger, s.last),
    triggerMiddle: clsx(s.trigger, s.middle),
  }

  const definingBorders = (key: number, array: TabType[]) => {
    if (key === 0) {
      return classNames.triggerFirst
    }
    if (key === array.length - 1) {
      return classNames.triggerLast
    }

    return classNames.triggerMiddle
  }

  return (
    <TabsRadixUI.Root className={classNames.root} defaultValue={defaultValue} value={value}>
      <Typography className={classNames.title} variant={'body2'}>
        {tabsTitle}
      </Typography>
      <TabsRadixUI.List className={classNames.list}>
        {tabs.map((tab, key) => (
          <TabsRadixUI.Trigger
            className={definingBorders(key, tabs)}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            <Typography variant={'body1'}>{tab.title}</Typography>
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}

export type TabContentProps = {
  children: ReactNode
  value: string
}

export const TabContent = ({ children, value }: TabContentProps) => {
  return (
    <TabsRadixUI.Content className={s.content} value={value}>
      {children}
    </TabsRadixUI.Content>
  )
}
