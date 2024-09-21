import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { spofifyAccountAPI } from "../lib/axios"

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

    const fetchSpotifyAccountAPI = async() => {
        const response = await spofifyAccountAPI()

        if(response) setAccessToken(response)
    }

    useEffect(() => {
        if(!accessToken) {
            fetchSpotifyAccountAPI()
        }
    }, [accessToken])

    return (
        <AuthContext.Provider value={{ accessToken }}>
            { children }
        </AuthContext.Provider>
    )
}