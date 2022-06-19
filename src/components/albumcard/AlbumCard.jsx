import React from 'react';
import { useGetRelatedQuery } from './../../services/AllApi'
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";
import CardFixed from '../Card/CardFixed';

const AlbumCard = () => {
    const { data: relatedData, isLoading, error, isSuccess } = useGetRelatedQuery("")
    


  return (
      <div>
          <div className="grid grid-cols-1 xs:grid-cols-2 shadow-2xl  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 mx-auto mt-10  p-4 gap-8">
             
              {isLoading && <p className="text-white text-center text-lg">Loading data...</p>}
              {error && <p className='text-white text-center text-lg'>Something went wrong, please try again later...</p>}
              {relatedData?.data.slice(0, 14).map((items) => (
                  <div key={items.id}>
                      <div className=" Card shadow-2xl text-white bg-smooth-black w-full">
                          <div className="overflow-hidden  shadow-lg ">
                              <a href="#">
                                  <img src={items.picture_medium} className="block h-auto w-full 
                                  transform transition duration-500 hover:scale-110
                                  " alt="img" />
                              </a>
                          </div>
                          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 className="text-lg">
                                  <a className="no-underline hover:underline text-white " href="#">
                                      {items.name}
                                  </a>
                              </h1>
                              <p className="text-white text-sm">
                                  {`№ Fans ${items.nb_fan}`}
                              </p>
                          </header>

                          <article className="text-white ">
                              <p className="flex items-center justify-between p-2 md:p-4">
                                 
                              </p>
                          </article>

                          <footer className="flex items-center justify-between bg-blue leading-none p-2 md:p-4">
                              <a className="flex items-center no-underline hover:underline text-white" href="#">
                                  <span><FaThumbsUp></FaThumbsUp></span>
                              </a>
                              <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span><FaThumbsDown></FaThumbsDown></span>
                              </a>
                          </footer>
                      </div>  
                  </div>
              ))}
          </div>
          <CardFixed />
      </div>
  )
}

export default AlbumCard