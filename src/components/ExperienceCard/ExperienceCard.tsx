import { memo, type FC, HTMLAttributes } from 'react'
import { Image } from '..'

export interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  company: string
  src: string
  position: string
  description: string
}

export const ExperienceCard: FC<ExperienceCardProps> = memo(
  ({ src, company, position, description, ...props }) => {
    return (
      <div className="flex flex-col items-center gap-2 p-2" {...props}>
        <Image className="h-12 w-12" overridePadding="p-px" src={src} />
        <h2 className="text-base leading-5 font-semibold">{company}</h2>
        <h3 className="text-sm leading-4 font-semibold">{position}</h3>
        <p className="text-sm font-normal">{description}</p>
      </div>
    )
  }
)

ExperienceCard.displayName = 'ExperienceCard'
