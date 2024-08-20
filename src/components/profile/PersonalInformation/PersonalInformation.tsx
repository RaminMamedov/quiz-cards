import { useState } from 'react'

import s from './PersonalInformation.module.scss'
import {
  EditProfile,
  EditProfileValues,
} from '@/components/profile/PersonalInformation/EditProfile'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { AvatarUploader } from '@/components/profile/PersonalInformation/AvatarUploader/AvatarUploader'
import { ProfileInfo } from '@/components/profile/PersonalInformation/ProfileInfo'

export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  data: ProfileDataType
  update: (data: EditProfileValues) => void
}

export const PersonalInformation = ({ data, update }: Props): JSX.Element => {
  const { email, name, avatar } = data
  const [editMode, setEditMode] = useState(false)

  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    update(data)
    setEditMode(false)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'} as="h1">
        Personal Information
      </Typography>
      <AvatarUploader
        className={s.avatarUploader}
        avatar={avatar}
        name={name}
        editable={!editMode}
      />
      {editMode ? (
        <EditProfile onSubmit={onSubmit} initialValues={{ name }} />
      ) : (
        <ProfileInfo email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
