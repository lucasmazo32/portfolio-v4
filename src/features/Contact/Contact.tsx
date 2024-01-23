import { Button } from '@/components'
import { memo, type FC } from 'react'
import { ReactComponent as EmailIcon } from '@/assets/icons/email.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github.svg'
import { linkOpening } from '@/utils'

export const Contact: FC = memo(() => {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h3 className="text-2xl">Want to hire me?</h3>
      <h2 className="text-6xl font-bold">Let's Talk</h2>
      <div className="pt-6 flex justify-between">
        <Button color="primary" onClick={linkOpening.openEmail}>
          <span>Contact me by email</span>
          <EmailIcon className="stroke-base-100" />
        </Button>
        <Button color="primary" onClick={linkOpening.openGithub}>
          <span>Front-end engineer</span>
          <GithubIcon className="fill-base-100" />
        </Button>
      </div>
    </div>
  )
})

Contact.displayName = 'Contact'
