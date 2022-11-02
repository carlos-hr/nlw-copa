import { createContext, ReactNode } from 'react'

interface UserProps {
  name: string
  avatarUrl: string
}

export interface AuthContextData {
  user: UserProps
  signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {}

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'teste',
          avatarUrl: '',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
