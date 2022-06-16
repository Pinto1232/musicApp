import React from 'react'
import TopTrackCard from '../toptracks/TopTrackCard'
import { useGetTopArtistQuery } from '../../services/AllApi'





const ArtistView = () => {
    const { data: topData, isSuccess, isLoading, isFetching, error } = useGetTopArtistQuery("")


    /* console.log(dataS?.data.map((x) => x.album)); */
    /* console.log(topData); */



    
    


        return (
            <div className='bg-white text-black-color'>
                {/* responsive way */}
                    <div className='flex flex-col md:flex-row '>
                        <div className="bg-[url('./src/assets/music-banner.jpg')]  bg-no-repeat bg-cover bg-center">
                            <div className=' basis-6/12 px-10  m-10 '>
                                <h1 className='prose text-lg leading-loose md:text-6xl text-white uppercase  '>Burna Boy</h1>
                                <p className='text-3xl text-white capitalize  '>234 fans</p>
                                <div className='divide-y mb-4 prose text-white'>________________</div>
                                    <p className='text-md bg-white text-smooth-black opacity-50  capitalize  rounded-sm p-6 py-5 md:text-start text-center text-2xl'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. perferendis tenetur adipisci minus ipsam delectus obcaecati 
                                </p>
                            </div>
                        </div>
                        <div className="basis-3/12 justify-items-center justify-between">
                            <TopTrackCard />
                        </div>
                 </div>
            </div>
     )
}

export default ArtistView