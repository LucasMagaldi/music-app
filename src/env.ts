import { z } from 'zod'

const envSchema = z.object({
    VITE_SPOTIFY_APP_CLIENT_ID: z.string(),
    VITE_SPOTIFY_APP_CLIENT_SECRET: z.string(),
    VITE_SPOTIFY_WEB_API_URL: z.string().url()
})

export const env = envSchema.parse(import.meta.env)