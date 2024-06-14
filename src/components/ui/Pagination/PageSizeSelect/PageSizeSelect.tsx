import { Select } from '@/components/ui/Select'
import { useCallback, useMemo } from 'react'

type PageSizeSelectProps = {
  onPageSizeChange: (size: number) => void
  pageSize: number
  pageSizeOptions?: number[]
}
export const PageSizeSelect: React.FC<PageSizeSelectProps> = ({
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 30],
  pageSize = 5,
}) => {
  const options = useMemo(
    () =>
      pageSizeOptions.map(size => {
        return {
          text: size.toString(),
          value: size.toString(),
        }
      }),
    [pageSizeOptions]
  )

  const onValueChange = useCallback(
    (value: string) => {
      const size = Number(value)
      if (!isNaN(size)) {
        onPageSizeChange(size)
      }
    },
    [onPageSizeChange]
  )

  return <Select items={options} onValueChange={onValueChange} small value={pageSize.toString()} />
}
