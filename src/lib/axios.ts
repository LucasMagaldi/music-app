import axios from 'axios'
import { env } from '../env'

export const spofifyAccountAPI = async() => {

    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')
    params.append('client_id', env.VITE_SPOTIFY_APP_CLIENT_ID)
    params.append('client_secret', env.VITE_SPOTIFY_APP_CLIENT_SECRET)

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const { access_token } = response.data
        return access_token
    } catch (error) {
        console.log(error)
    }
}
