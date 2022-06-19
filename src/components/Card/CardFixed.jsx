import React from 'react'
import './../Card/CardFixe.css'
import { useGetRadioQuery, useGetAlbumsQuery, useGetTopArtistQuery } from '../../services/AllApi'
import { FaPlay, FaStop } from "react-icons/fa";


const CardFixed = () => {
    const { data: dataRadio, isLoading, error, isSuccess } = useGetRadioQuery("")
    const {data: albumsData, } = useGetAlbumsQuery("") 
    const {data: topArtisData, } = useGetTopArtistQuery("") 



  return (
      <div>
           {isLoading && <h2 className="text-white text-center text-lg">Loading data...</h2>}
            {error && <h2 className='text-white text-center text-lg'>Something went wrong, please try again later...</h2>}
          <div style={{ marginTop: '15em', padding: '0', marginLeft: '15%' }}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-6 md:grid-cols-5  hidden lg:grid lg:grid-cols-4 gap-4 ">
              {albumsData?.data.slice(0, 8).map((items) => (
                  <div key={items.id}>

                      <div className="cardModule ">
                          <div className="image">
                              <div className="flex justify-center p-5 z-50  bg-smooth-black  text-center">
                                  {topArtisData?.data.slice(0, 1).map((artistName) => (
                                      <span key={artistName.id} className="text-white">{artistName.artist.name}</span> 
                                  ))}
                              </div>
                              <img src={items.cover_medium} />
                          </div>
                          <div className="details">
                              <div className="center">
                                  <h1>{items.title}<br /><span>{`Album Title: ${items.title}`}</span></h1>
                                  <span className="grid justify-center "><img src={`${items.cover}`} alt="" /></span>
                                  <ul>
                                      <li className="bg-transparent hover:text-blue w-17 cursor-pointer">
                                          <FaPlay
                                          />
                                      </li>
                                      <li className="bg-transparent hover:text-red w-17 cursor-pointer"><FaStop/></li>
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

export default CardFixed