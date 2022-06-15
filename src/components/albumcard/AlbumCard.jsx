import React from 'react'
import MusicBanner from './../../assets/music-banner.jpg'
import './styleAlbum.css'
import { IoIosPlay } from "react-icons/io";

const AlbumCard = () => {
    

        return (
                <div className="flex gap-2">
                        <div className="max-w-sm bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div><img src={ MusicBanner} alt="" /></div>
                        <div className="p-4">
                            <div>
                                <h5 className="mb-2 text-3xl  tracking-tight">My you bad</h5>
                                <h5 className="mb-2 text-sm font-bold">My you bad</h5>
                            </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Impact of Extrinsic</p>
                            <div className="inline-flex items-center hover:bg-smooth-black py-2 px-3 text-sm font-medium text-center text-white bg-blue">
                                <div className="text-white mx-2">
                                    <IoIosPlay/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default AlbumCard