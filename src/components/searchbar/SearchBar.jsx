import React, { useState } from 'react';
import styles from './../searchbar/StyleSearch.module.css';
import { FaSearch } from 'react-icons/fa';
import DropDown from '../dropdown/DropDown';
import { useGetAlbumsQuery, useGetRadioQuery, useGetRelatedQuery, useGetTopArtistQuery } from './../../services/AllApi';
import { Link } from 'react-router-dom';

const SearchBar = ({ placeholder }) => {
	const [query, setQuery] = useState("")

	/* Custom hooks */
	const { data: getRadios, isLoading, isSuccess, isError } = useGetRadioQuery('');
	const { data: getAllbumsData } = useGetAlbumsQuery('');
	const { data: getRelatedData } = useGetRelatedQuery('');
	const { data: getArtistTopicData } = useGetTopArtistQuery('');
	


	
	return (
			<div>
			<div className={styles.searchInput}>
				<div className='md:flex hidden'>
					<DropDown />
				</div>

					<input
						className={styles.search}
						type='text'
						placeholder={placeholder}
						onChange={(e) => setQuery(e.target.value)}
					/>
		
				<div className={styles.searchIcon}>
					<FaSearch
					 
					/>
				</div>
			</div>
			
			<span className='flex  m-2 p-auto grid-cols-8 xs:grid-cols-3 mx-60 mx-auto '>
				<ul
					style={
						query.length === 0
							? { display: 'none' }
							: {display: 'block'}
					}


					className={styles.list}>
					{getRadios?.data.filter((userTitle) => userTitle.title.toLowerCase().includes(query)
					).slice(0, 8).map((userTitle) => (
						<Link
							key={userTitle.id}
							className={styles.list__item}
							to=''>
							{userTitle.title}
						</Link>
					))}
				</ul>
			</span>
		</div>
	);
};

export default SearchBar;
