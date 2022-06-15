import React from 'react'
    import { IoOptionsOutline } from "react-icons/io5";
    import {useGetAlbumsQuery} from '../../services/AllApi'

const HomeCardDown = () => {

    const { data:dbt, isSuccess, isLoading, isFetching, error } = useGetAlbumsQuery()

   
    return (
        <>
             <div className="m-8">
                {isLoading && <h2>Loading data...</h2>}
                {error && <h2>Something went wrong, please try again</h2>}
                {isSuccess && (
                    <div className="flex flex-col  md:flex-row gap-5 ">
                        
                        {
                        dbt.data.slice(0, 5).map((items) => (
                            <div key={items.id}>
                                <div className="w-full shadow-md dark:bg-gray-800 bg-white dark:border-gray-700">
                                        <img src={ items.cover_medium} alt="" />
                                        <div className="p-4 ">
                                            <div>
                                                <h5 className="mb-2   text-start text-smooth-black tracking-tight">{`${items.title.substring(0, 6)}....`}</h5>
                                            <h5 className="mb-2 text-sm font-bold text-smooth-black text-start">{`Fans - ${items.fans}`}</h5>
                                            </div>
                                            <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400 text-smooth-black text-start">{`Release date - ${items.release_date}`}</p>
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

export default HomeCardDown