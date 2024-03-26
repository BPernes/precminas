import { ReactNode, useState, createContext } from 'react'

const SnackbarContext = createContext({
  isDisplayed: false,
  displayMsg: () => {},
  onClose: () => {},
})

type SnackbarContextProviderProps = {
  children: ReactNode
}

let timer = 0

export const SnackbarContextProvider = ({
  children,
}: SnackbarContextProviderProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  const displayHandler = () => {
    setIsDisplayed(true)
    timer = setTimeout(() => {
      closeHandler()
    }, 3000)
  }
  const closeHandler = () => {
    clearTimeout(timer)
    setIsDisplayed(false)
  }

  return (
    <SnackbarContext.Provider
      value={{
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  )
}

export default SnackbarContext
