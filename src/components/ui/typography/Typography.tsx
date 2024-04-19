import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'h1', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
