import { ComponentPropsWithoutRef, ElementRef, ForwardRefRenderFunction, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

const CheckboxComponent: ForwardRefRenderFunction<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckboxProps
> = (props, ref) => {
  const {
    checked = false,
    disabled,
    errorMessage,
    id,
    label,
    name,
    onCheckedChange,
    ...rest
  } = props

  return (
    <form>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <CheckboxRadix.Root
          className={disabled ? `${s.checkboxRoot} ${s.borderDisabled}` : s.checkboxRoot}
          defaultChecked={checked}
          disabled={disabled}
          id={name}
          name={name}
          onCheckedChange={onCheckedChange}
          ref={ref}
          {...rest}
        >
          <CheckboxRadix.Indicator
            className={
              disabled ? `${s.checkboxIndicator} ${s.indicatorDisabled}` : s.checkboxIndicator
            }
          >
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <label className={disabled ? s.labelDisabled : ''} htmlFor={name}>
          {label}
        </label>
        {errorMessage && <h3>{errorMessage}</h3>}
      </div>
    </form>
  )
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  CheckboxComponent
)
