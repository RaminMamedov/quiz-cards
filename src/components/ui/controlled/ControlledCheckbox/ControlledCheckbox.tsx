import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/Checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'errorMessage' | 'name' | 'onBlur' | 'onCheckedChange' | 'ref'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
  })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      errorMessage={error?.message}
      name={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
