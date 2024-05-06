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
      height={height || '24'}
      viewBox={viewBox || '0 0 24 24'}
      width={width || '24'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
