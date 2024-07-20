import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox/ControlledCheckbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'
import { ControlledInput } from '@/components/controlled/ControlledInput'
import { Link } from 'react-router-dom'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type FormFields = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormFields) => void
}

export const SignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.formWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          name="email"
          label="Email"
          className={s.input}
          placeholder="Email"
          rules={{ required: 'Email is required', minLength: 8 }}
        />
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          type="password"
          className={s.input}
          placeholder="Password"
          rules={{ required: 'Password is required', minLength: 3 }}
        />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.forgotLink}>
          <Typography
            as={Link}
            className={s.forgotPasswordLink}
            to={'/recover-password'}
            variant={'body2'}
          >
            Forgot password?
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          Sign in
        </Button>
        <Typography className={s.account} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={Link} className={s.signupLink} to={'/sign-up'} variant={'link1'}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
