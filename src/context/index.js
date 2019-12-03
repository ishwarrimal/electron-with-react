import { createContext } from 'react'

export const LoginContext = createContext([{isAuthenticated: false, userName: ''}, () => {}])