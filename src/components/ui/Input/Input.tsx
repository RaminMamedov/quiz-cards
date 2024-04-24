import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import CloseOutline from '@/assets/icons/CloseOutline'
import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import SearchOutline from '@/assets/icons/SearchOutline'
import { clsx } from 'clsx'

import s from './Input.module.scss'

import { Typography } from '../Typography'

export type InputProps = {
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearInput?: () => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, errorMessage, label, onChange, onChangeValue, onClearInput, type, value, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordType = type === 'password'
    const isSearchType = type === 'search'
    const isShowClear = isSearchType && value?.length! > 0

    const toggleShowPassword = () => setShowPassword(prev => !prev)

    const classNames = {
      input: clsx(s.input, isSearchType && s.search, errorMessage && s.error),
      label: clsx(s.label, rest.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: clsx(s.searchIcon, rest.disabled && s.disabled),
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.target.value)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} htmlFor={rest.id} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <input
            {...rest}
            className={classNames.input}
            id={rest.id}
            onChange={onChangeValueHandler}
            ref={ref}
            type={isPasswordType && !showPassword ? 'password' : 'text'}
          />
          {isPasswordType && (
            <button className={s.button} disabled={rest.disabled} onClick={toggleShowPassword}>
              {showPassword ? <EyeOutline /> : <EyeOffOutline />}
            </button>
          )}
          {isShowClear && (
            <button className={s.button} onClick={onClearInput}>
              <CloseOutline />
            </button>
          )}
          {isSearchType && (
            <SearchOutline
              className={s.searchIcon}
              color={rest.disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'}
            />
          )}
        </div>
        {errorMessage && (
          <Typography className={s.errorMessage} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
