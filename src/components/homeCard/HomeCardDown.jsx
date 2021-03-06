import React from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { useGetAlbumsQuery } from '../../services/AllApi';

const HomeCardDown = () => {
	const { data: dbt, isSuccess } = useGetAlbumsQuery('');

	return (
		<div>
			<div>
				<div className='container flex w-full mx-auto min-h-full py-9 md:py-12 px-4 -mt-24 md:px-6'>
					{isSuccess && (
						<div className='flex flex-col  md:flex-row md:min-h-full   gap-5 mx-auto '>
							{dbt.data.slice(0, 6).map((items) => (
								<div key={items.id}>
									<div className='w-full shadow-md bg-white'>
										<img
											src={items.cover_medium}
											className='scale-100 hover:scale-75 -z-50  duration-300'
											alt=''
										/>
										<div className='p-4 '>
											<div>
												<h5 className='mb-2   text-start text-smooth-black  tracking-tight'>{`${items.title.substring(
													0,
													23
												)}......`}</h5>
												<h5 className='mb-2 text-sm font-bold text-smooth-black  text-start'>{`Fans - ${items.fans}`}</h5>
											</div>
											<p className='mb-3 font-normal  text-gray-700 dark:text-gray-400 text-smooth-black  text-start'>{`Release - ${items.release_date}`}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			{/* end card */}
		</div>
	);
};

export default HomeCardDown;
