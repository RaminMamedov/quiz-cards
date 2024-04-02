import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
// @ts-ignore
import { CheckIcon } from '@radix-ui/react-icons'

import s from './Checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id?: string
  title?: string
} & ComponentPropsWithoutRef<'button'>

export const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, title } = props

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <CheckboxRadix.Root
          className={disabled ? `${s.checkboxRoot} ${s.borderDisabled}` : s.checkboxRoot}
          defaultChecked={checked}
          disabled={disabled}
          id={id}
        >
          <CheckboxRadix.Indicator
            className={
              disabled ? `${s.checkboxIndicator} ${s.indicatorDisabled}` : s.checkboxIndicator
            }
          >
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <label className={disabled ? s.labelDisabled : ''} htmlFor={id}>
          {title}
        </label>
      </div>
    </form>
  )
}
