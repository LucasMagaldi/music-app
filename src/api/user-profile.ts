import { api } from "../lib/axios"

export async function getUserProfile(token: string) {
    const response = await api(token).get('/me')
    console.log(response)
}