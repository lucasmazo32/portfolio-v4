import { memo, type FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Main: FC = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  )
})

Main.displayName = 'Main'

export default Main
