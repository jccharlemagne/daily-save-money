import React, { createContext, useCallback, useState } from "react"

export interface UserContextType {
  isLogged: boolean;
  updateIsLogged: (isLogged: boolean) => void,
}

const defaultUserContext: UserContextType = {
  isLogged: false,
  updateIsLogged: () => {},
}

export const UserContext = createContext(defaultUserContext)

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userContext, setUserContext] = useState<UserContextType>({...defaultUserContext})

  const updateIsLogged = useCallback((isLogged): void => {
    setUserContext({ ...userContext, isLogged })
  }, [userContext])

  return (
    <UserContext.Provider
      value={{
        ...userContext,
        updateIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) throw new Error('User context is undefined')
  return context
}
