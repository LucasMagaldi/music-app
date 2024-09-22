import { api } from "../lib/axios"

export interface ISpotifyUserData {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    type: string;
    uri: string;
    followers: {
      href: string | null;
      total: number;
    };
}

export async function fetchUserProfile() {
    const response = await api().get<ISpotifyUserData>('/me')
    return response.data
}