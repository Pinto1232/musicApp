import React from 'react';
import ArtistView from '../../components/artistview/ArtistView';
import CardUI from './../../UI/CardUI';
import AlbumCard from '../../components/albumcard/AlbumCard';

const ArtistList = () => {
	return (
		<div>
			<ArtistView />
			<CardUI className='my-0 px-20 mx-auto bg-bg-slate-200 '>
				<div className='flex flex-col flex-nowrap  flex-col min-h-full md:flex-row md:min-h-full   gap-5 mx-auto'>
					<AlbumCard />
				</div>
			</CardUI>
		</div>
	);
};

export default ArtistList;
