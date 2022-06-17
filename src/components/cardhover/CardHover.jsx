import React from 'react'
import './cardhover.css';
import { useGetRadioQuery } from '../../services/AllApi'
import { NavLink } from 'react-router-dom';
import { IoIosPlayCircle } from "react-icons/io";
import { MdStopCircle } from "react-icons/md";


const CardHover = () =>
{
    const { data: dataRadio, isLoading, error, isSuccess } = useGetRadioQuery("")


    return (
        <div>
            <div style={{
                marginTop: '10em',
                padding: '0',
                marginLeft: '15%'
            }}
                className="
                 grid grid-cols-1
                 xs:grid-cols-2
                 sm:grid-cols-6
                 md:grid-cols-5
                 lg:grid-cols-4 gap-4
                ">
                {dataRadio?.data.slice(0, 4).map((items) => (
                    <div key={items.id}>
                        <div className="cardModule ">
                            <div className="image">
                                <div
                                    className="
                                     flex 
                                     justify-center
                                     p-5 z-50
                                     bg-smooth-black
                                     text-center">
                                    <span
                                        className="
                                        text-white
                                         capitalize"
                                    >
                                    {/* {items.artist.name} */}
                                    </span>
                                </div>
                                {/* <img src={items.artist.picture_medium} /> */}
                            </div>
                            <div className="details">
                                <div
                                    className="center">
                                    <h1>{items.title}<br />
                                        <span>
                                            {/* {`Album Title: ${items.album.title}`} */}
                                        </span>
                                    </h1>
                                    <span
                                        className="
                                          grid justify-center
                                    ">
                                    <img className="
                                                scale-100
                                                hover:scale-100
                                                ease-in duration-300"
                                        /* src={`${items.album.cover}`} */
                                        alt="Album cover"
                                        /></span>
                                    <ul>
                                        <NavLink to='/'>
                                            <li>
                                                <IoIosPlayCircle
                                                    className="text-3xl
                                                      transition duration-150 
                                                      ease-out md:ease-in
                                                      ease-in duration-300
                                                      hover:text-blue
                                                  "
                                                />
                                            </li>
                                            <li>
                                                <MdStopCircle
                                                    className="text-3xl
                                                    transition duration-150 
                                                    ease-out md:ease-in
                                                      ease-in duration-300
                                                     hover:text-red
                                                  "
                                                />
                                            </li>
                                        </NavLink>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardHover