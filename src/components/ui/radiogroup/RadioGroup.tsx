import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type Option = {
  label: string
  value: string
}
type RadioGroupProps = {
  ariaLabel?: string
  defaultValue?: string
  disabled?: boolean
  options: Option[]
} & ComponentPropsWithoutRef<'div'>

export const RadioGroup = (props: RadioGroupProps) => {
  const { ariaLabel, defaultValue, disabled, options } = props

  return (
    <form>
      <RadioGroupRadix.Root
        aria-label={ariaLabel}
        className={s.radioGroupRoot}
        defaultValue={defaultValue}
      >
        {options?.map(option => {
          return (
            <div key={option.value} style={{ alignItems: 'center', display: 'flex' }}>
              <RadioGroupRadix.Item
                className={s.item}
                disabled={disabled}
                id={`radio-${option.value}`}
                value={option.value}
              >
                <RadioGroupRadix.Indicator
                  className={disabled ? `${s.indicator} ${s.indicatorDisabled}` : s.indicator}
                />
              </RadioGroupRadix.Item>
              <label
                className={disabled ? `${s.label} ${s.labelDisabled}` : s.label}
                htmlFor={`radio-${option.value}`}
              >
                {option.label}
              </label>
            </div>
          )
        })}
      </RadioGroupRadix.Root>
    </form>
  )
}
