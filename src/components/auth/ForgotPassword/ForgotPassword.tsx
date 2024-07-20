import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'
import { ControlledInput } from '@/components/controlled/ControlledInput'
import { Link } from 'react-router-dom'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Incorrect email' }),
})

export type ForgotPasswordValue = z.infer<typeof forgotPasswordSchema>

type Props = {
  onSubmit: (data: ForgotPasswordValue) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<ForgotPasswordValue>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  return (
    <Card className={s.formWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          name="email"
          label="Email"
          className={s.input}
          placeholder="Email"
        />
        <Typography className={s.instructionText} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth type={'submit'}>
          Send Instructions
        </Button>
        <Typography className={s.questionText} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={s.signInLink} to={'/sign-in'} variant={'link1'}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
