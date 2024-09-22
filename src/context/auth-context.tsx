import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { env } from '../env'

interface IAuthContextData {
    accessToken: string | null
}

interface IProviderProps {
    children: ReactNode
}
const AuthContext = createContext<IAuthContextData>({accessToken: null})

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
}

export const AuthProvider = ({ children } : IProviderProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(null)

    useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem('access_token')
  
      if (!token && hash) {
        const params = new URLSearchParams(hash.substring(1))
        token = params.get('access_token')
        if (token) {
          window.localStorage.setItem('access_token', token)
          setAccessToken(token)
          window.location.hash = '' 
        }
      } else {
        setAccessToken(token)
      }
  
      if (!token) {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${env.VITE_SPOTIFY_APP_CLIENT_ID}&redirect_uri=http://localhost:5173&response_type=token`
      }
    }, [accessToken])

    return (
        <AuthContext.Provider value={{ accessToken }}>
            { children }
        </AuthContext.Provider>
    )
}