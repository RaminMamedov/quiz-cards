import { forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './Avatar.module.scss'

type AvatarProps = {
  className?: string
  image?: string
  size?: string
  src?: string
  userName: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, image, size = 'small', src, userName, ...rest }, ref) => {
    const classNames = {
      fallback: s.fallback,
      image: s.image,
      root: clsx(s.root, s[size], className),
    }

    const initials = userName
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word[0].toUpperCase() ?? '')
      .join(' ')

    return (
      <AvatarPrimitive.Root className={classNames.root} ref={ref} {...rest}>
        {image ? (
          <AvatarPrimitive.Image
            alt={`${userName}'s avatar`}
            className={classNames.image}
            src={src}
          />
        ) : (
          <AvatarPrimitive.Fallback className={classNames.fallback}>
            {initials}
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
    )
  }
)
