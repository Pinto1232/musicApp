import React from 'react';
import HomeCard from '../../components/homeCard/HomeCard';
import HomeCardDown from '../../components/homeCard/HomeCardDown';

const Home = () => {
	return (
		<div>
			<div className='container min-w-full mx-auto py-9 md:py-12 px-4 mb-8 -mt-4 md:px-6'>
				<div className='flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8'>
					<div>
						<div className='mx-auto'>
							<HomeCard />
						</div>
					</div>
				</div>
			</div>
			<HomeCardDown />
		</div>
	);
};

export default Home;
