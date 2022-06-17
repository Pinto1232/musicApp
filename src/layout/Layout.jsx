import React from 'react';
import Navbar from './../components/navbar/Navbar';

const Layout = ({ children, ...props }) => {
	return (
		<div>
			<Navbar />
			<div {...props}>{children}</div>
		</div>
	);
};

export default Layout;
