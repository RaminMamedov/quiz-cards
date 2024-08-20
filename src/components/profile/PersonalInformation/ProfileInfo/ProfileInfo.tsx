import s from './ProfileInfo.module.scss'
import { Typography } from '@/components/ui/Typography'
import EditOutline from '@/assets/icons/EditOutline'
import { Button } from '@/components/ui/Button'
import LogOutOutline from '@/assets/icons/LogOutOutline'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const ProfileInfo = ({ email, name, onEditProfile }: Props): JSX.Element => {
  // const [logout] = useLogoutMutation()
  //
  // const onLogout = () => {
  //   logout()
  // }

  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography className={s.user} variant={'h3'}>
          {name}
        </Typography>
        <button className={s.editNameButton} onClick={onEditProfile}>
          <EditOutline />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button className={s.button} variant={'secondary'} as="a">
        <LogOutOutline />
        Logout
      </Button>
    </div>
  )
}

// onClick={onLogout}
