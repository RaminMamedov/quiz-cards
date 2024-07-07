import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './Rating.module.scss'

import { clsx } from 'clsx'
import { RatingFilledIcon } from '@/assets/icons/RatingFilledIcon'
import { RatingEmptyIcon } from '@/assets/icons/RatingEmptyIcon'

type Props = {
  rating: number
  maxRating?: number
  size?: number
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, Props>(
  ({ rating, maxRating = 5, size = 1.6, className, ...restProps }, ref): JSX.Element => {
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    const ratingClasses = clsx(s.root, className)

    return (
      <div ref={ref} className={ratingClasses} {...restProps}>
        {stars.map((star, index) => {
          return rating >= star ? (
            <RatingFilledIcon key={index} color="var(--color-warning-300)" size={size} />
          ) : (
            <RatingEmptyIcon key={index} color="var(--color-warning-300)" size={size} />
          )
        })}
      </div>
    )
  }
)
