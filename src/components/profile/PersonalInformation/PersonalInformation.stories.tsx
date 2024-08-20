import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  PersonalInformation,
  ProfileDataType,
} from '@/components/profile/PersonalInformation/PersonalInformation'
import { EditProfileValues } from '@/components/profile/PersonalInformation/EditProfile'

const meta: Meta<typeof PersonalInformation> = {
  title: 'Profile/PersonalInformation',
  component: PersonalInformation,
} satisfies Meta<typeof PersonalInformation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [profileData, setProfileData] = useState<ProfileDataType>({
      avatar: 'https://via.placeholder.com/150',
      email: 'example@mail.com',
      name: 'Ramin Mamedov',
    })

    const updateProfile = (data: EditProfileValues) => {
      setProfileData(prevData => ({
        ...prevData,
        name: data.name,
      }))
      alert(`Profile updated: ${JSON.stringify(data)}`)
    }

    return <PersonalInformation data={profileData} update={updateProfile} />
  },
  args: {} as any,
}
