import { memo, type FC } from 'react'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { Button } from '@/components'

export const Navbar: FC = memo(() => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center">
        <Button color="ghost">Components</Button>
        <Button color="ghost">About</Button>
      </div>
      <div className="navbar-end">
        <Button color="ghost">Contact</Button>
      </div>
    </div>
  )
})

Navbar.displayName = 'Navbar'
