import React, { useState } from 'react';
import styles from './../searchbar/StyleSearch.module.css';
import { FaSearch } from 'react-icons/fa';
import DropDown from '../dropdown/DropDown';
import { useGetAlbumsQuery, useGetRadioQuery, useGetRelatedQuery, useGetTopArtistQuery } from './../../services/AllApi';
import { Link } from 'react-router-dom';

const SearchBar = ({ placeholder }) => {
	const [ searchInput ] = useState();
	/* Custom hooks */
	const { data: getRadios, isLoading, isSuccess, isError } = useGetRadioQuery('');
	const { data: getAllbumsData } = useGetAlbumsQuery('');
	const { data: getRelatedData } = useGetRelatedQuery('');
	const { data: getArtistTopicData } = useGetTopArtistQuery('');

	console.log('Radio', getRadios);
	console.log('Albums', getAllbumsData);
	console.log('Related', getRelatedData);
	console.log('Topics', getArtistTopicData);

	return (
		<div className='text-white'>
			<div className={styles.searchInput}>
				<div className='md:flex hidden'>
					<DropDown />
				</div>

				<form>
					<input className={styles.search} type='text' placeholder={placeholder} />
				</form>
				<div className={styles.searchIcon}>
					<FaSearch />
				</div>
			</div>
				<div>
					<ul className={styles.list}>
					<Link className={styles.list__item}
						to='""""'>
						Pinto
					</Link>
					<Link className={styles.list__item}
						to='"'>
						Pinto
					</Link>
					<Link className='list__item'
						to='"'>
						Pinto
					</Link>
					<Link className='list__item'
						to='"'>
						Pinto
					</Link>
				</ul>
			


				
			</div>
		</div>
	);
};

export default SearchBar;
