import React, { useState } from 'react';
import './StyleSearch.css';
import { FaSearch } from 'react-icons/fa';
import DropDown from '../dropdown/DropDown';
import Typography from "@mui/material/Typography";
import { FaChartLine } from "react-icons/fa";


import{
		useGetAlbumsQuery,
	    useGetRadioQuery,
	    useGetRelatedQuery,
		useGetTopArtistQuery
} from './../../services/AllApi';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';







const SearchBar = ({ placeholder }) => {
	const [ query, setQuery ] = useState('');

	/* Custom hooks */
	const { data: getRadios, isLoading, isSuccess, isError } = useGetRadioQuery('');
	const { data: getAllbumsData } = useGetAlbumsQuery('');
	const { data: getRelatedData } = useGetRelatedQuery('');
	const { data: getArtistTopicData } = useGetTopArtistQuery('');

	//TODO: 
	//TODO: 
	//TODO: 
	//TODO: 
	//TODO: 
	//TODO: 
	 
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
					className='list absolute tb__helper '
					style={query.length === 0 ? { display: 'none' } : { display: 'block' }}>
					<TableContainer>
						<Table
							
							style={{
								minWidth: 774,
								backgroundColor: '#ffffffd9',
							}}
						
							 aria-label='simple table'>
							<TableHead className="bg-smooth-black">
								<TableRow style={{color: 'white'}} className="z-50">
									<TableCell align="center" className='text-white'>
										<Typography color="common.white">
												Album Cover
										</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color="common.white">
                                               Music Title
										</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color="common.white">
                                            Year  RELESE
										</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography
											color="common.white">
                                           		Fans Number
										</Typography>
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
											<img className="rounded-full" src={albumTitle.cover_small} alt="" />
									</TableCell>
									< TableCell align="center">
											{albumTitle.title.substring(0,40)}
									</TableCell>
									<TableCell align="center">
											{albumTitle.release_date}
									</TableCell>
											 <TableCell align="center"
												 style={{ border: '1px solid #000', color: 'white' }}
												 className=" bg-smooth-black">
												 <FaChartLine
													 className='absolute'
													 style={{
														 border: '1px solid #fff',
														 borderRadius: '50%',
														 padding: '5px',
														 fontSize: '20px'
													 }}
												 />
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

										