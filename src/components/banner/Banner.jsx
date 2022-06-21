import React, {  } from 'react'
import { motion,useAnimation } from "framer-motion"
import{
    useGetRadioQuery,
    useGetTopArtistQuery
} from '../../services/AllApi'
import './Banner.css'
import Video from '../__video/Video'


const Banner = () => {
    const { data: dataTopArtist, isLoading, isSuccess, isError } = useGetTopArtistQuery("")
    const { data: dataRadio } = useGetRadioQuery("")
    const controls = useAnimation()
    
    controls.start({
        x: "20%",
        transition: { duration: 3 },
    })


  return (
      <div>
          <div>
               {isLoading && <h2 className="text-white text-center text-lg">Loading data...</h2>}
               {isError && <h2 className='text-white text-center text-lg'>
                Something went wrong, please try again later...</h2>}
              <div
                  className="container -z-50 min-w-full 
                  bg-smooth-black mx-auto py-9 md:py-12
                   px-4 mb-8 -mt-4 md:px-6">
                  <div>
                      {dataRadio?.data.slice(0, 1).map((items) => (
                    <div key={items.id}>
                              <div className="flex items-strech justify-center flex-col md:flex-row 
                                    space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                                  <div className="flex flex-col md:flex-row items-strech
                                   justify-between bg-gray-50 py-6 px-6 md:py-12
                                  lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                                <div className="flex flex-col  md:flex-row md:min-h-full">
                                <motion.h1
                                    animate={{ x: 20 }} 
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    className="text-3xl  lg:text-4xl text-white mobile__helper 
                                    font-semibold text-gray-800">Great Content</motion.h1>
                                          <motion.p
                                               animate={{ x: [0, 100, 0] }}
                                              className="text-base lg:text-xl 
                                              text-gray-800 text-white mt-2
                                              mobile__helper">
                                              Save <span className="font-bold">50%</span>
                                    </motion.p>
                                </div>
                                
                                <div>
                                <div className="md:w-1/2 -z-50 gap-3 md:mt-0 flex w-fit 
                                    mx-auto justify-center md:justify-end">
                                        {dataTopArtist?.data.slice(0, 2).map((itemsVideo) => (
                                            <div key={itemsVideo.id}>
                                                <motion.img
                                                    className="image__mobile"
                                                    src={itemsVideo.album.cover_big} alt="Image" />
                                                <span className="text-white grid justify-center mobile__helper">
                                                    {itemsVideo.artist.name}
                                                </span>
                                            </div>
                                            ))}
                                        <div>
                                        </div>
                                    </div>
                                      </div>
                                          <motion.span
                                              animate={controls}
                                              className="text-white text-2xl mobile__helper">
                                              {/*  <Video /> */} {/* video component */}
                                          </motion.span>
                                   </div>
                                  <div className="md:w-4/12 lg:w-5/12 xl:w-4/12
                                    2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0
                                    md:px-4 lg:px-6 flex flex-col justify-center relative">
                                      <div className="flex flex-col justify-center">
                                          {dataTopArtist?.data.slice(0, 1).map((shortTitle) => (
                                              <h1 key={shortTitle.id} className="text-3xl lg:text-4xl
                                                font-semibold mobile__helper
                                                text-white text-gray-800">{shortTitle.album.title}</h1>
                                          ))}
                                       <div className="text-base lg:text-xl text-white text-gray-800 underline">
                                        {
                                            dataTopArtist?.data.slice(0, 1).map((itemName) => (
                                                <div className="mobile__helper -z-50" key={itemName.id}>
                                                    Singer -   <span className="font-bold mobile__helper">{itemName.artist.name}</span>           
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div  className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                                    {dataTopArtist?.data.slice(0, 1).map((itemsaCover) => (
                                        <div key={itemsaCover.id}>
                                            <span><img style={{ borderRadius: '50%'}} src={itemsaCover.album.cover_medium }  alt="" className="md:w-14 md:h-14  " /></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>
      </div>
     )
}

export default Banner