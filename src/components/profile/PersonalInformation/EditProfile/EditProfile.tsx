import s from './EditProfile.module.scss'
import { EditProfileValues, useEditProfile } from './useEditProfile'
import { ControlledInput } from '@/components/controlled/ControlledInput'
import { Button } from '@/components/ui/Button'

type Props = {
  onSubmit: (data: EditProfileValues) => void
  initialValues?: EditProfileValues
}

export const EditProfile = ({ onSubmit, initialValues }: Props): JSX.Element => {
  const { control, handleSubmit } = useEditProfile(initialValues)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput className={s.input} name="name" control={control} label="Nickname" />
      <Button type="submit" fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
