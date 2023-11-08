import { NavbarContext } from '@/contexts'
import { Navbar } from '@/features'
import { memo, type FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Main: FC = memo(() => {
  return (
    <div>
      <NavbarContext.Provider value={{}}>
        <Navbar />
      </NavbarContext.Provider>
      <Outlet />
    </div>
  )
})

Main.displayName = 'Main'

export default Main
