import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    className:string
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'body1'
        | 'body2'
        | 'subtitle1'
        | 'subtitle2'
        | 'caption'
        | 'overline'
        | 'link1'
        | 'link2'

} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
    const { as: Component = 'p', className, variant = 'h1', ...rest } = props

    return (
        <Component
            className={`${s[variant]} ${className}`}
            {...rest}
        />
    )
}