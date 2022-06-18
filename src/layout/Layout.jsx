import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';

const Layout = ({ children, ...props }) => {
	return (
		<div>
			<Navbar />
			<div {...props}>{children}</div>
			<Footer/>
		</div>
	);
};

export default Layout;
