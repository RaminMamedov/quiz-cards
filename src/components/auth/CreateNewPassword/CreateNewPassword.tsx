import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'
import { ControlledInput } from '@/components/controlled/ControlledInput'

const createPasswordSchema = z.object({
  password: z.string().min(3, 'Use 3 characters or more for your password'),
})

export type CreatePasswordValue = z.infer<typeof createPasswordSchema>

type Props = {
  onSubmit: (data: CreatePasswordValue) => void
}

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<CreatePasswordValue>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: { password: '' },
  })

  return (
    <Card className={s.formWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          type="password"
          className={s.input}
          placeholder="Password"
        />
        <Typography className={s.instructions} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
