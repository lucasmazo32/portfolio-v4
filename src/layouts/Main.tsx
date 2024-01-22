import { NavbarContext } from "@/contexts"
import { Navbar } from "@/features"
import { memo, type FC } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Main: FC = memo(() => {
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate("/about")
  }
  const goToHome = () => {
    navigate("/")
  }
  return (
    <div>
      <NavbarContext.Provider
        value={{
          aboutOnClick: goToAbout,
          homeOnClick: goToHome,
        }}
      >
        <Navbar />
      </NavbarContext.Provider>
      <Outlet />
    </div>
  )
})

Main.displayName = "Main"

export default Main
