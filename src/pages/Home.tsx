import { memo, type FC } from "react"

export const Home: FC = memo(() => {
  return (
    <div className="flex mt-44 justify-center h-full">
      <h1 className="text-8xl font-semibold">A NEW EXPERIENCE</h1>
    </div>
  )
})

Home.displayName = "Home"

export default Home
