import React from 'react'
import { IoOptionsOutline } from "react-icons/io5";
import { useGetAlbumsQuery } from '../../services/AllApi'
import Banner from '../banner/Banner';
import './homeCard.css'

const HomeCard = () => {
    const { data: dbt, isSuccess, isLoading, isFetching, error } = useGetAlbumsQuery("")

  return (
    <div>
          <Banner/>
          <div>
              {isLoading && <h2 className="text-white text-center text-lg">Loading data...</h2>}
              {error && <h2 className='text-white text-center text-lg'>Something went wrong, please try again later...</h2>}
              {dbt?.data.slice(0, 1).map((icon) => (
                  <div key={icon.id}>
                      <div className="flext my-20 text-white md:text-left text-center text-2xl capitalize mb-8 mx-auto">
                          <IoOptionsOutline className=" ml-40 -my-8 md:text-left flex text-center" />
                          New Release
                      </div>
                  </div>
              ))}
          </div>
   
          <div>
              <div className="container flex w-full mx-auto py-9 md:py-12 px-4 -mt-4 md:px-6">
                  {isSuccess && (
                      <div className="flex flex-col  md:flex-row md:min-h-full   gap-5 mx-auto ">
                          {
                              dbt.data.slice(0, 6).map((items) => (
                                  <div key={items.id}>
                                      <div className="w-full shadow-md bg-white">
                                          <img src={items.cover_medium} className="scale-100 hover:scale-75 duration-300 skeleton " alt="" />
                                          <div className="p-4 ">
                                              <div>
                                                  <h5 className="mb-2   text-start text-smooth-black tracking-tight skeleton">{`${items.title.substring(0, 23)}......`}</h5>
                                                  <h5 className="mb-2 text-sm font-bold text-smooth-black  text-start skeleton">{`Fans - ${items.fans}`}</h5>
                                              </div>
                                              <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400 text-smooth-black skeleton text-start">{`Release - ${items.release_date}`}</p>
                                          </div>
                                      </div>
                                  </div>
                              ))
                          }
                      </div>
                  )}
              </div>
          </div>
    </div>
  )
}

export default HomeCard