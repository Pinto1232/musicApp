import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { useGetRadioQuery } from '../../services/AllApi'
import { useGetTopArtistQuery } from '../../services/AllApi'
import { FaThumbsUp } from "react-icons/fa";




const TopTrackCard = () => {
    const { data: topData, isSuccess, isLoading, error } = useGetTopArtistQuery("")
    const { data: radioData, isSuccess: successed, isLoading: loading, error: messageError } = useGetRadioQuery("")

      return (
            <>
              <div className="
                     p-10 
                     bg-white items-center
                     sm:p-8
                     h-full
                     md:w-full
                     ">
                        {topData?.data.slice(0, 3).map((item) => (
                            <div key={item.id}>
                                <div
                                    className="
                                       flex m-2xl justify-between
                                       items-center mb-4
                                         ">
                                    <h5
                                        className="
                                          text-md
                                         font-bold leading-none
                                         text-gray-300
                                         dark:text-white
                                        ">
                                           Top Tracks
                                    </h5>
                                    <a href="#"
                                        className="
                                            text-sm font-medium rounded-sm
                                            bg-smooth-black hadow-lg
                                            shadow-indigo-500/40  
                                            text-white px-3 py-1 
                                            hover:bg-blue dark:text-blue-500
                                        ">
                                        View all
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <ul role="list"
                                        className="
                                        divide-y
                                        divide-gray-200
                                        dark:divide-gray-700"
                                    >
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center
                                                      space-x-4">
                                                <div className="flex-shrink-0">
                                                    {`${item.rank}`}
                                                </div>
                                                <div
                                                    className="flex flex-1 min-w-0
                                                ">
                                                    <p
                                                        className="
                                                          text-sm font-medium
                                                          text-gray-900 truncate
                                                          dark:text-white
                                                    ">
                                                        {item.artist.name}
                                                    </p>
                                                    <span
                                                        style={{
                                                            marginTop: "2px",
                                                            padding: "2px",
                                                            borderRadius: "50%",
                                                            border: "2px solid rgba(255, 255, 255,)"
                                                        }}
                                                        className="
                                                           text-sm mx-2
                                                           inline-flex bg-cyan-500
                                                            p-2 hover:text-blue
                                                            cursor-pointer shadow-2xl
                                                            shadow-cyan-500/50
                                                            rounded-full
                                                        ">
                                                        <FaThumbsUp/>
                                                    </span>
                                                </div>
                                                <div
                                                    className="
                                                     inline-flex bg-cyan-500
                                                     p-2 hover:text-white
                                                     hover:bg-smooth-black
                                                     cursor-pointer shadow-lg
                                                     shadow-cyan-500/50
                                                     rounded-full items-center
                                                     text-base font-semibold
                                                     text-gray-900 dark:text-white
                                                     ">
                                                    <AiFillPlayCircle
                                                        className="text-clack-text
                                                    "/>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                </div>
             </>
        )
}

export default TopTrackCard