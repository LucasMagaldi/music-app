import { IoIosNotificationsOutline } from "react-icons/io"


import spotifyLogo from '../../assets/spotify-icon.svg'

export function Header() {
    return (
        <header className="flex items-center justify-between">
            <img src={spotifyLogo} alt="" />

            <input type="text" placeholder="What do you want to play"/>

            <div className="flex items-center">
                <span>Download app</span>
                <IoIosNotificationsOutline />

                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </header>
    )
}