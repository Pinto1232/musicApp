import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArtistList from '../pages/artist/ArtistList';
import Login from '../pages/login/Login';
import Home from './../pages/home/Home';

const Roteator = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/artist' element={<ArtistList />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Roteator;
