import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAlbums } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoRadio } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoDuplicate } from "react-icons/io5";
import { IoFilm } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const DropdownLinks = () => {
    const dropdownLinks = [
          {
            submenu: true, 
            sublinks: [
                { 
                    Head: 'Best Topics',
                    sublink: [
                        {label: 'Artist', to: '/artist', id: 0, icon: <IoFilm className="mt-1 text-blue mx-3"/>},
                        {label: 'Artist Radio', to: '/radio', id: 0, icon: <IoRadio className="mt-1 mx-3 text-blue"/>},
                        {label: 'Related Artist', to: '/related', id: 1, icon: <IoDuplicate className="mt-1 mx-3  text-blue"/>},
                        {label: 'Top Artist', to: '/top-artist', id: 2, icon: <IoStatsChartSharp className="mt-1 mx-3 text-blue"/>},
                        {label: 'Playlist', to: '/playlist', id: 3, icon: <IoPlaySkipForwardSharp className="mt-1 mx-3 text-blue"/>},
                        {label: 'Albums', to: '/albums', id: 4, icon: <IoIosAlbums className="mt-1 mx-3 text-blue"/>},
                        {label: 'Home', to: '/', id: 4, icon: <FaHome className="mt-1 mx-3 text-blue"/>},
                    ]
                },
 
            ]
        },
    ]
  return (
      <>
          {dropdownLinks?.map((link) => (
              <div key={link.sublinks}>
                  <div className="px-3 z-50 p-5 text-left md:cursor-pointer group ">
                      {link.submenu && (
                          <div>
                              <div>
                                <div>
                                    {
                                     link.sublinks?.map((displayLinks) => (
                                        <div  key={displayLinks.Head}>
                                             <div>
                                                 <h1 className="text-lg font-semibold">{displayLinks.Head}</h1>
                                                 {displayLinks.sublink?.map((sSublin) => (
                                                     <div className="my-2.5" key={sSublin.id}>
                                                         <Link className=" flex capitalize hover:text-blue text-base" to={sSublin.to}>
                                                             { sSublin.icon}{sSublin.label}
                                                         </Link>
                                                     </div>
                                                 ))}
                                             </div>  
                                         </div>
                                       ))     
                                     } 
                               </div>
                              </div>
                          </div>
                     )} 
                  </div>
              </div>
          ))}
      </>
  )
}

export default DropdownLinks