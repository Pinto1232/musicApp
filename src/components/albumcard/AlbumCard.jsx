import React from 'react'

import './styleAlbum.css'
import { IoIosPlay } from "react-icons/io";
import { useGetRelatedQuery } from './../../services/AllApi'

const AlbumCard = () => {
    const { data: relatedData, isLoading, error, isSuccess } = useGetRelatedQuery("")
    console.log(relatedData);
    
    /* console.log(albumData?.data.map((x) => x.artist));  */


  return (
      <>
          <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 mx-auto  p-4 gap-8">
             
              {isLoading && <h2 className="text-white text-center text-lg">Loading data...</h2>}
              {error && <h2 className='text-white text-center text-lg'>Something went wrong, please try again later...</h2>}
              {relatedData?.data.slice(0, 5).map((items) => (
                  <div key={items.id}>
                      <div className=" Card  text-white bg-white w-full ">
                          <div className="overflow-hidden  shadow-lg p">
                              <a href="#" className="">
                                  <img src={items.picture_medium} className="block h-auto " alt="img" />
                              </a>
                          </div>
                          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 className="text-lg">
                                  <a className="no-underline hover:underline text-smooth-black " href="#">
                                      {items.name}
                                  </a>
                              </h1>
                              <p className="text-smooth-black  text-sm">
                                  {`№ Fans ${items.nb_fan}`}
                              </p>
                          </header>

                          <article className="text-smooth-black ">
                              <p className="flex items-center justify-between p-2 md:p-4">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nostrum facilis molestiae quis ad debitis mollitia expedita hic rem suscipit!
                              </p>
                          </article>

                          <footer className="flex items-center justify-between bg-white leading-none p-2 md:p-4">
                              <a className="flex items-center no-underline hover:underline text-black" href="#">
                                  <img alt="Placeholder" className="block rounded-full" src="" />
                            
                              </a>
                              <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span className=" text-smooth-black">{items.type}</span>
                                  <i className="fa fa-heart text-smooth-black"></i>
                              </a>
                          </footer>
                      </div>  
                  </div>
              ))}
        </div>
      </>
  )
}

export default AlbumCard