import { Button, Image } from '@/components'
import { memo, type FC } from 'react'
import { ReactComponent as JSIcon } from '@/assets/technologies/js.svg'
import { ReactComponent as FirebaseIcon } from '@/assets/technologies/firebase.svg'
import { ReactComponent as GCloudIcon } from '@/assets/technologies/gcloud.svg'
import { ReactComponent as ReactIcon } from '@/assets/technologies/react.svg'
import { ReactComponent as TSIcon } from '@/assets/technologies/ts.svg'
import { ReactComponent as ReduxIcon } from '@/assets/technologies/redux.svg'
import { ReactComponent as GoIcon } from '@/assets/technologies/go.svg'
import { ReactComponent as TailwindIcon } from '@/assets/technologies/tw.svg'
import { ReactComponent as GithubIcon } from '@/assets/icons/github.svg'
import profile from '@/assets/profile/profile.jpg'

export const About: FC = memo(() => {
  return (
    <div className="pt-6">
      <div className="max-w-4xl flex justify-center mx-auto gap-4">
        <div className="grid grid-cols-4 grid-rows-2 grow">
          <div className="flex-center">
            <JSIcon />
          </div>
          <div className="flex-center col-start-2 col-end-3 row-start-2 row-end-3">
            <FirebaseIcon />
          </div>
          <div className="flex-center col-start-3 col-end-4">
            <GCloudIcon />
          </div>
          <div className="flex-center col-start-4 col-end-5 row-start-2 row-end-3">
            <ReactIcon />
          </div>
        </div>
        <Image className="h-40 w-40" src={profile} alt="Profile pic" />
        <div className="grid grid-cols-4 grid-rows-2 grow">
          <div className="flex-center row-start-2 row-end-3">
            <TSIcon />
          </div>
          <div className="flex-center col-start-2 col-end-3">
            <ReduxIcon />
          </div>
          <div className="flex-center col-start-3 col-end-4 row-start-2 row-end-3">
            <GoIcon />
          </div>
          <div className="flex-center col-start-4 col-end-5">
            <TailwindIcon />
          </div>
        </div>
      </div>
      <div className="py-8 w-full flex justify-center">
        <h2 className="text-5xl font-medium">Lucas Mazo</h2>
      </div>
      <div className="w-full flex justify-center mb-10">
        <Button color="primary">
          <span>Front-end engineer</span>
          <GithubIcon className="fill-base-100" />
        </Button>
      </div>
    </div>
  )
})

About.displayName = 'About'

export default About
