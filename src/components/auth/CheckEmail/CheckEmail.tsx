import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import s from './CheckEmail.module.scss'
import { Link } from 'react-router-dom'
import Email from '@/assets/icons/Email'

type Props = {
  email: string
}

export const CheckEmail = ({ email = 'example@mail.com' }: Props) => {
  return (
    <Card className={s.formWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Check Email
      </Typography>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography className={s.instructions} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>
      <Button as={Link} fullWidth to={'/sing-in'}>
        Back to Sign in
      </Button>
    </Card>
  )
}
