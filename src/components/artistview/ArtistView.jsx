import React from 'react'
import TopTrackCard from '../toptracks/TopTrackCard'
import { useGetTopArtistQuery, useGetRadioQuery, useGetRelatedQuery } from '../../services/AllApi'



const ArtistView = () => {
    const {data: getTopArtistData } = useGetTopArtistQuery("")
    const { data: radioData, isSuccess: successed, isLoading: loading, error: messageError } = useGetRadioQuery("")
    const { data: getRelatedData } = useGetRelatedQuery("")
    
   
  

    return (
            <div>
                  <div className="bg-transparent p-0 text-black-color grid lg:grid-cols-2x ">

                <div className='flex flex-col md:flex-row '>
                    {radioData?.data.slice(0, 1).map((item) => (
                        <div key={item.id}
                            style={{
                                backgroundColor: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
                                /* backgroundImage: `url(${(item.artist.picture_xl && item.album.cover_xl)})`,  */
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className="w-full"
                            >
                            <div className=' basis-6/12  h-full px-10  m-10 '>
                                <h1 className='prose text-lg
                                    leading-loose md:text-6xl
                                    text-blue uppercase
                                '>
                                   {/*  {item.artist.name} */}
                                </h1>
                                {getRelatedData?.data.slice(0, 1).map((itemRelated) => (
                                    <p className="text-white" key={itemRelated.link}>
                                        {`Number of Fans - ${itemRelated.nb_fan}`}
                                    </p>
                                ))}
                                <div className='divide-y mb-4 prose text-white'>________________</div>
                                <p className='text-md bg-smooth-black text-white opacity-90 
                                    xs:text-center sm:text-center md:justify md:text-center
                                    capitalize rounded-sm p-6 py-5 md:text-start text-2xl'>
                                    {getTopArtistData?.data.slice(0, 1).map((itemDescription) => (
                                        <span className="max-w-fit" key={itemDescription.duration}>
                                            {itemDescription.title}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                        <div className="basis-3/12 w-full justify-items-center justify-between">
                            <TopTrackCard />
                        </div>
                 </div>
            </div>
            </div>
     )
}

export default ArtistView