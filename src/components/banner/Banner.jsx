import React, { useState, useEffect } from 'react'
import{
    useGetRadioQuery,
    useGetTopArtistQuery
} from '../../services/AllApi'


const Banner = () => {
    const { data: dataTopArtist, isLoading, isSuccess, isError } = useGetTopArtistQuery("")
    const { data: dataRadio, isLoading: loadMore, isSuccess: messageSuccess, isError: error } = useGetRadioQuery("")

    console.log("Topic",dataTopArtist);
    

  return (
      <div className="container min-w-full bg-smooth-black mx-auto py-9 md:py-12 px-4 mb-8 -mt-4 md:px-6">
          {dataRadio?.data.slice(0, 1).map((items) => (
              <div key={items.id}>
                  <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                      <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                          <div className="flex flex-col  md:flex-row md:min-h-full">
                              <h1 className="text-3xl lg:text-4xl text-white  font-semibold text-gray-800">Best Deal</h1>
                              <p className="text-base lg:text-xl text-gray-800 text-white mt-2">
                                  Save upto <span className="font-bold">50%</span>
                              </p>
                          </div>

                          <div>
                              <div className="md:w-1/2 gap-3 md:mt-0 flex w-fit mx-auto justify-center md:justify-end">
                                  {dataTopArtist?.data.slice(0, 2).map((itemsVideo) => (
                                      <div key={itemsVideo.id}>
                                          <img className="text-white w-fit" src={itemsVideo.album.cover_big} alt="Image" />
                                          <span className="text-white grid justify-center">{`Artist: ${itemsVideo.artist.name.substring(0, 10)}`}</span>
                                      </div>
                                  ))}
                                  <div>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                          <div className="flex flex-col justify-center">
                              <h1 className="text-3xl lg:text-4xl font-semibold text-white text-gray-800">{/* {items.title_short.substring(0, 12)} */}</h1>
                              <div className="text-base lg:text-xl text-white text-gray-800 underline">
                                  {
                                      dataTopArtist?.data.slice(0, 1).map((itemName) => (
                                          <div key={itemName.id}>
                                               Singer -   <span className="font-bold">{itemName.artist.name}</span>           
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>
                          <div  className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                              {dataTopArtist?.data.slice(0, 1).map((itemsaCover) => (
                                  <div key={itemsaCover.id}>
                                       <span><img style={{ borderRadius: '50%' }} src={itemsaCover.artist.cover_medium}  alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" /></span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Banner