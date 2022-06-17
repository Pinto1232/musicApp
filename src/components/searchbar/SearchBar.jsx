import React from 'react';
import styles from './../searchbar/StyleSearch.module.css';
import { FaSearch } from 'react-icons/fa';
import DropDown from '../dropdown/DropDown';

const SearchBar = ({ placeholder }) => {
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
		</div>
	);
};

export default SearchBar;
