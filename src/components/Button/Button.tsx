import { DaisyTypes } from '@/types'
import { clx } from '@/utils'
import { memo, type FC, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: DaisyTypes.ButtonColors
}

export const Button: FC<ButtonProps> = memo(
  ({ className, color, ...props }) => {
    const classes = clx('btn', className, {
      [`btn-${color}`]: !!color,
      'bg-transparent hover:bg-transparent': color === 'ghost',
    })
    return (
      <button
        className={classes}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
