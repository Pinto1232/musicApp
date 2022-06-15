    import React from 'react'
    import { IoOptionsOutline } from "react-icons/io5";
    import {useGetAlbumsQuery} from '../../services/AllApi'
import Banner from '../banner/Banner';

    const HomeCard = () => {
        const { data:dbt, isSuccess, isLoading, isFetching, error } = useGetAlbumsQuery()

   
        return (
            <>
                <Banner />
                {dbt?.data.slice(0, 1).map((icon) => (
                    <div key={icon.id}>
                        <div
                            className="text-start flex text-2xl capitalize mb-8">
                            New Release
                            <IoOptionsOutline className="mt-2 ml-2" />
                        </div>
                    </div>
                ))}
             <div className="flex items-center justify-between">
                {isLoading && <h2>Loading data...</h2>}
                {error && <h2>Something went wrong, please try again</h2>}
                {isSuccess && (
                    <div className="flex flex-col md:flex-row gap-5 ">
                        
                        {
                        dbt.data.slice(0, 6).map((items) => (
                            <div key={items.id}>
                                <div className=" max-w-sm bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-full min-w-max">
                                        <img src={ items.cover_medium} alt="" />
                                        <div className="p-4">
                                            <div>
                                                <h5 className="mb-2  text-start text-smooth-black tracking-tight">{`${items.title.substring(0, 25)}....`}</h5>
                                            <h5 className="mb-2 text-sm font-bold text-smooth-black text-start">{`Fans - ${items.fans}`}</h5>
                                            </div>
                                                <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400 text-smooth-black text-start">{`Release date - ${items.release_date}`}</p>
                                            <div className="inline-flex py-2 px-3 text-sm font-medium text-center text-white ">
                                                <div className="text-white mx-2">
                                                    {/* <IoIosPlay/> */}
                                                </div>
                                            </div>
                                    </div>
                                </div>
                           </div>
                        ))
                      }
                 </div>
                ) }
            </div>
            </>
        )
    }

    export default HomeCard