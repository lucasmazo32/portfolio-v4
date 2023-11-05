import { memo, type FC } from 'react'

export const Home: FC = memo(() => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
})

Home.displayName = 'Home'

export default Home
