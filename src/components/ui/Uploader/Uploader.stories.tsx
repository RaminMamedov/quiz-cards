import { Meta } from '@storybook/react'
import { useState } from 'react'
import { Uploader } from '@/components/ui/Uploader/Uploader'
import { Button } from '@/components/ui/Button'
import ImageIcon from '@/assets/icons/ImageIcon'

export default {
  title: 'Components/Uploader',
  component: Uploader,
} as Meta<typeof Uploader>

export const Default = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

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
        <Button onClick={() => {}} fullWidth variant={'secondary'}>
          <ImageIcon />
          Open uploader
        </Button>
      </Uploader>
      {file && (
        <div>
          <p>Loaded file: {file.name}</p>
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            style={{ maxWidth: '200px', marginTop: '10px' }}
          />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
