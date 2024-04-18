import iconsSprite from '../../../assets/images/icons-sprite.svg'

type IconProps = {
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = ({ height, iconId, viewBox, width }: IconProps) => {
  return (
    <svg
      fill={'none'}
      height={height || '16'}
      viewBox={viewBox || '0 0 16 16'}
      width={width || '16'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
