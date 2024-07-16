import { useState } from 'react'

import ImageIcon from '@/assets/icons/ImageIcon'
import { Button } from '@/components/ui/Button'
import { Uploader } from '@/components/ui/Uploader/Uploader'
import { Meta } from '@storybook/react'

export default {
  component: Uploader,
  title: 'Components/Uploader',
} as Meta<typeof Uploader>

export const Default = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<null | string>(null)

  const handleLoadCover = (loadedFile: File) => {
    setFile(loadedFile)
    setError(null)
  }

  const handleLoadError = (errorMessage: string) => {
    setError(errorMessage)
    setFile(null)
  }

  return (
    <div style={{ padding: '20px' }}>
      <Uploader onLoadCover={handleLoadCover} onLoadError={handleLoadError}>
        <Button fullWidth onClick={() => {}} variant={'secondary'}>
          <ImageIcon />
          Open uploader
        </Button>
      </Uploader>
      {file && (
        <div>
          <p>Loaded file: {file.name}</p>
          <img
            alt={'preview'}
            src={URL.createObjectURL(file)}
            style={{ marginTop: '10px', maxWidth: '200px' }}
          />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
