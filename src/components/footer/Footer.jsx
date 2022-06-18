import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faFacebook, faGooglePlay, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

const fbicon = <FontAwesomeIcon icon={faFacebook} />;
const twtIcon = <FontAwesomeIcon icon={faTwitter} />;
const instaIcon = <FontAwesomeIcon icon={faInstagram} />;
const appleIcon = <FontAwesomeIcon icon={faAppStoreIos} />;
const playstoreIcon = <FontAwesomeIcon icon={faGooglePlay} />;

const Footer = () => {
	/* Even to get the email subscription */
	/* const handlerEventEmail = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
 */
	return (
		<div>
			<div>
				<div className='bottom-sidebar kopa-area bg-smooth-black'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<div style={{ alignItems: 'center', fontSize: '25px' }}>
								
								</div>

								<div
									className='bottom-logo-caption'
									style={{ borderRight: '2px solid white', color: 'white' }}>
									
								</div>
							</div>

							<div className='col-md-6'>
								<article className='entry-item'>
									<div className='entry-content'>
									
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className='kopa-page-footer text-white' style={{ backgroundColor: '#000' }}>
				<div className='container' style={{ marginBottom: '-1%' }}>
					<p className='text-center' style={{ marginTop: '-1%' }}>
						Copyright © 2022 <a href='#'> pinto.com </a> All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
