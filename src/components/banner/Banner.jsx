import React, { useState, useEffect } from 'react'
import { useGetTopArtistQuery } from './../../services/AllApi'


const Banner = () => {
   /*  const [imageUrl, setImageUrl] = useState(""); */
    const { data: dataS, isLoading, isSuccess, isError } = useGetTopArtistQuery("")




  return (
      <div className="container min-w-full bg-smooth-black mx-auto py-9 md:py-12 px-4 mb-8 -mt-4 md:px-6">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
              <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                  <div className="flex flex-col  md:flex-row md:min-h-full">
                      <h1 className="text-3xl lg:text-4xl text-white  font-semibold text-gray-800">Best Deal</h1>
                      <p className="text-base lg:text-xl text-gray-800 text-white mt-2">
                          Save upto <span className="font-bold">50%</span>
                      </p>
                  </div>
                      {dataS?.data.slice(0, 3).map((x) => (
                          <div key={x.id}>
                              <div className="md:w-1/2  md:mt-0 flex w-full mx-auto justify-center md:justify-end">
                                  <div className=" ">
                                      <img src={x.album.cover_medium} alt="img" />
                                      <span className="  mx-auto text-white md:gap-8 sm:gap-8 "><span className="font-extrabold ">Name</span> <h1>{x.artist.name}</h1></span>
                                      <p className="text-white text-start mx-auto text-xs mt-1"><span className=" font-extrabold text-sm">Title:</span> {x.album.title}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                     
                  
              </div>
              <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                  <div className="flex flex-col justify-center">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-white text-gray-800">Game Console</h1>
                      <p className="text-base lg:text-xl text-white text-gray-800">
                          Save Upto <span className="font-bold">30%</span>
                      </p>
                  </div>
                  <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                      <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Banner