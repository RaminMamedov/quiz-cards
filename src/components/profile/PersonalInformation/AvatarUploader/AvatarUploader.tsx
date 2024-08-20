import s from './AvatarUploader.module.scss'
import { clsx } from 'clsx'
import { Uploader } from '@/components/ui/Uploader'
import EditOutline from '@/assets/icons/EditOutline'
import { Avatar } from '@/components/ui/Avatar'

type Props = {
  avatar?: string
  name: string
  editable?: boolean
  className?: string
}

export const AvatarUploader = ({
  avatar,
  name,
  editable = true,
  className,
}: Props): JSX.Element => {
  // const [updateProfile] = useUpdateProfileMutation()

  const avatarUploaderClasses = clsx(s.root, className)

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)

    // mutationNotificationHandler(updateProfile(formData), false, `Photo is successfully updated.`)
  }

  return (
    <div className={avatarUploaderClasses}>
      <Avatar image={avatar} userName={name} size="large" />
      {editable && (
        <Uploader
          className={s.uploader}
          onLoadCover={onLoadCover}
          onLoadError={() => {}}
          accept="image/*"
        >
          <button className={s.editAvatar}>
            <EditOutline />
          </button>
        </Uploader>
      )}
    </div>
  )
}
