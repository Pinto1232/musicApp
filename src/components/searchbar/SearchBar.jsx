import React, { useState } from 'react';
import './StyleSearch.css';
import { FaSearch } from 'react-icons/fa';
import DropDown from '../dropdown/DropDown';
import { useGetAlbumsQuery, useGetRadioQuery, useGetRelatedQuery, useGetTopArtistQuery } from './../../services/AllApi';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	table: {
		minWidth: 774,
		

	},
});



const SearchBar = ({ placeholder }) => {
	const [ query, setQuery ] = useState('');
	const classes = useStyles();

	/* Custom hooks */
	const { data: getRadios, isLoading, isSuccess, isError } = useGetRadioQuery('');
	const { data: getAllbumsData } = useGetAlbumsQuery('');
	const { data: getRelatedData } = useGetRelatedQuery('');
	const { data: getArtistTopicData } = useGetTopArtistQuery('');

	//TODO: preview (getArtistTopicData)
	//TODO: Find nb_fan,  release_date, title, record_type, cover_small from Albums (getAllbumsData)
	//TODO: Get name, nb_album (getRelatedData)
	//TODO: get title, tracklist, md5_image, tracklist (Album) (getArtistTopicData)
	//TODO: Get  from contributors, role
	//TODO: Get title from (getRadios)
	 
	return (
		<div>
			<div>
				<div className='searchInput '>
					<div className='md:flex hidden'>
						<DropDown />
					</div>
					<input
						className='search'
						type='text'
						placeholder={placeholder}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<div className='searchIcon'>
						<FaSearch />
					</div>
				</div>
				<Paper
					className='list absolute tb__helper'
					style={query.length === 0 ? { display: 'none' } : { display: 'block' }}>
					<TableContainer>
						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align="center">
										Album Cover
									</TableCell>
									<TableCell align="center">
										Title
									</TableCell>
									<TableCell align="center">
										Year  RELESE
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{getAllbumsData?.data.slice(0, 18).filter((albumTitle =>
									albumTitle.title.toUpperCase().includes(query.toUpperCase())
								     )).map((albumTitle) =>
	                                (
								    <TableRow key={albumTitle.id}>
									<TableCell align="center" component="th" scope="row">
											<img src={albumTitle.cover_small} alt="" />
									</TableCell>
									< TableCell align="center">
											{albumTitle.title.substring(0,40)}
									</TableCell>
									<TableCell align="center">
											{albumTitle.fans}
									</TableCell>
									</TableRow>			
							    ))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</div>
		</div>
	);
};

export default SearchBar;

										