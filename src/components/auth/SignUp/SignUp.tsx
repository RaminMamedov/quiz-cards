import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignUp.module.scss'
import { ControlledInput } from '@/components/controlled/ControlledInput'
import { Link } from 'react-router-dom'

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }).trim(),
    password: z.string().min(3, 'Use 3 characters or more for your password').trim(),
    confirmPassword: z.string().min(3, 'Use 3 characters or more for your password').trim(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Those passwords didn’t match. Try again.',
    path: ['confirmPassword'],
  })

export type SignUpFormValues = z.infer<typeof signUpSchema>

type Props = {
  onSubmit: (data: Omit<SignUpFormValues, 'passwordConfirmation'>) => void
}

export const SignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <Card className={s.formWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Sign Up
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
        <ControlledInput
          control={control}
          className={s.input}
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
        />
        <Button fullWidth type={'submit'}>
          Sign Up
        </Button>
        <Typography className={s.account} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} className={s.signInLink} to={'/sign-in'} variant={'link1'}>
          Sign In
        </Typography>
      </form>
    </Card>
  )
}
