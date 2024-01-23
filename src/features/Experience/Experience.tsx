import { ExperienceCard } from '@/components'
import { memo, type FC } from 'react'
import duelbitsIcon from '@/assets/experience/duelbits.png'
import stanzaIcon from '@/assets/experience/stanza.png'
import blankfactorIcon from '@/assets/experience/blankfactor.png'
import novaIcon from '@/assets/experience/nova.png'

export const Experience: FC = memo(() => {
  return (
    <div className="grid grid-cols-2 py-8 gap-8 max-w-3xl mx-auto">
      <ExperienceCard
        company="Duelbits"
        src={duelbitsIcon}
        position="Front-end Developer"
        description="Lorem Ipsum"
      />
      <ExperienceCard
        company="Stanza"
        src={stanzaIcon}
        position="Front-end Developer"
        description="Lorem Ipsum"
      />
      <ExperienceCard
        company="Blankfactor"
        src={blankfactorIcon}
        position="Front-end Developer"
        description="Lorem Ipsum"
      />
      <ExperienceCard
        company="Nova"
        src={novaIcon}
        position="Mobile Developer"
        description="Lorem Ipsum"
      />
    </div>
  )
})

Experience.displayName = 'Experience'
