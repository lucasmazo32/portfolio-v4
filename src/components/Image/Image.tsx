import { clx } from '@/utils'
import { memo, type FC, ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  overridePadding?: string
}

export const Image: FC<ImageProps> = memo(
  ({ overridePadding, className, ...props }) => {
    return (
      <div
        className={clx(
          'border border-dashed rounded-full w-fit',
          overridePadding,
          {
            ['p-1']: !overridePadding,
          }
        )}
      >
        <img className={clx(className, 'rounded-full')} {...props} />
      </div>
    )
  }
)

Image.displayName = 'Image'
