import { memo, type FC } from "react"
import { ReactComponent as Logo } from "@/assets/logo.svg"
import { Button } from "@/components"
import { useNavbarContext } from "@/contexts"

export const Navbar: FC = memo(() => {
  const { aboutOnClick, componentOnClick, homeOnClick } = useNavbarContext()
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Button color="ghost" onClick={homeOnClick}>
          <Logo />
        </Button>
      </div>
      <div className="navbar-center">
        <Button color="ghost" onClick={componentOnClick}>
          Components
        </Button>
        <Button color="ghost" onClick={aboutOnClick}>
          About
        </Button>
      </div>
      <div className="navbar-end">
        <Button color="ghost">Contact</Button>
      </div>
    </div>
  )
})

Navbar.displayName = "Navbar"
