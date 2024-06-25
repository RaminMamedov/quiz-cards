import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, useRef } from 'react'
import { UploaderPayload, uploaderSchema } from '@/components/ui/Uploader/uploaderSchema'
import { clsx } from 'clsx'
import { ZodError } from 'zod'
import { Typography } from '@/components/ui/Typography'
import s from './Uploader.module.scss'

type UploaderProps = {
  children: ReactNode
  onLoadCover: (file: UploaderPayload) => void
  onLoadError: (error: string) => void
} & ComponentPropsWithoutRef<'input'>
export const Uploader = ({
  children,
  className,
  onLoadCover,
  onLoadError,
  ...restProps
}: UploaderProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
  }
  const uploaderClassName = clsx(s.uploader, className)
  return (
    <Typography
      className={uploaderClassName}
      variant={'subtitle2'}
      as="label"
      onClick={() => ref.current?.click()}
    >
      {children}
      <input ref={ref} className={s.input} type="file" onChange={onChangeHandler} {...restProps} />
    </Typography>
  )
}
