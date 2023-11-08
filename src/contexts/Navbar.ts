import { MouseEventHandler, createContext, useContext } from 'react'

interface NavbarContextData {
  componentOnClick?: MouseEventHandler<HTMLButtonElement>
  aboutOnClick?: MouseEventHandler<HTMLButtonElement>
  contactOnClick?: MouseEventHandler<HTMLButtonElement>
}

export const NavbarContext = createContext<NavbarContextData>({})

export const useNavbarContext = (): NavbarContextData => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error(
      'useNavbarContext must be used within a NavbarContextProvider',
    )
  }
  return context
}
