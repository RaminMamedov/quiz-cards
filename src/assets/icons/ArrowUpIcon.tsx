import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

const ArrowUpIcon = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={'24'}
          ref={ref}
          viewBox={'0 0 24 24'}
          width={'24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M13.0277 9.67591C13.028 9.83168 12.9738 9.98264 12.8744 10.1026C12.8184 10.1701 12.7497 10.2259 12.6721 10.2668C12.5945 10.3077 12.5097 10.3329 12.4224 10.3409C12.335 10.349 12.247 10.3397 12.1633 10.3137C12.0795 10.2877 12.0017 10.2454 11.9344 10.1892L8.36104 7.20258L4.78104 10.0826C4.71285 10.138 4.63438 10.1793 4.55016 10.2043C4.46593 10.2292 4.3776 10.2373 4.29025 10.228C4.2029 10.2187 4.11824 10.1922 4.04115 10.1501C3.96406 10.108 3.89605 10.0511 3.84104 9.98258C3.78035 9.9136 3.73457 9.83282 3.70658 9.74531C3.67858 9.65781 3.66898 9.56546 3.67837 9.47406C3.68776 9.38266 3.71594 9.2942 3.76114 9.21421C3.80634 9.13422 3.86759 9.06444 3.94104 9.00924L7.94104 5.78924C8.06033 5.69119 8.20996 5.63758 8.36437 5.63758C8.51879 5.63758 8.66842 5.69119 8.78771 5.78924L12.7877 9.12258C12.8684 9.18945 12.9322 9.27441 12.9739 9.37055C13.0156 9.46669 13.034 9.57131 13.0277 9.67591Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

const ForwardRef = forwardRef(ArrowUpIcon)
const Memo = memo(ForwardRef)

export default Memo
