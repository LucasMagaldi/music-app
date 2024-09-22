import { IoIosNotificationsOutline } from "react-icons/io"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { MdOutlineDownloading } from "react-icons/md"

import spotifyLogo from '../../assets/spotify-icon.svg'

interface IHeaderProps {
    profileImage: string | undefined
}

export function Header({ profileImage } : IHeaderProps) {
    return (
        <header className="flex items-center justify-between h-11 px-4 py-8 mx-2">
            <img src={spotifyLogo} alt="spofity logo" className="h-10 w-10 cursor-pointer"/>

            <div className="flex items-center min-w-[560px] bg-[#1f1f1f] px-4 py-3 rounded-3xl">
                <button className="mr-3">
                    <BsSearch size={24}/>
                </button>          
                <input type="text" placeholder="What do you want to play?" className="w-[500px] bg-transparent"/>
                <button className="border-l-2 pl-3">
                    <MdOutlineVideoLibrary size={24}/>
                </button>
            </div>

            <div className="flex items-center gap-10">
                <button className="flex items-center gap-1 font-semibold">
                    <MdOutlineDownloading size={22}/>
                    <span>Download app</span>
                </button>
                
                <IoIosNotificationsOutline size={22}/>
                <div>
                    <img src={profileImage} className="rounded-full w-12 h-12 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}