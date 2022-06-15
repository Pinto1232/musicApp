import React from 'react'
import { IoIosAirplane } from "react-icons/io";


const TopTrackCard = () => {



      return (
                <>
                    <div className="p-10 max-w-md bg-white items-center sm:p-8">
                        <div className="flex m-2xl justify-between items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Tracks</h5>
                            <a href="#" className="text-sm font-medium rounded-sm bg-smooth-black hadow-lg shadow-indigo-500/40  text-white px-3 py-1 hover:bg-blue text-blue-600 dark:text-blue-500">View all</a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">1</div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex bg-cyan-500 p-2 hover:text-white hover:bg-smooth-black cursor-pointer shadow-lg shadow-cyan-500/50 rounded-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {/*  <img className="w-8  rounded-full" src="" alt="icon" /> */}
                                                <IoIosAirplane className="text-clack-text "/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
        )
}

export default TopTrackCard