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
	const handlerEventEmail = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};

	return (
		<div>
			<div>
				<div className='bottom-sidebar kopa-area bg-smooth-black'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<div style={{ alignItems: 'center', fontSize: '25px' }}>
									<p className='bottom-logo-title' style={{ color: 'white' }}>
										Who are we?
									</p>
								</div>

								<div
									className='bottom-logo-caption'
									style={{ borderRight: '2px solid white', color: 'white' }}>
									<p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
									<p>
										EMAIL : Lorem ipsum dolor sit. <br />Phone : 111-222-33
									</p>
								</div>
							</div>

							<div className='col-md-6'>
								<article className='entry-item'>
									<div className='entry-content'>
										<h4 className='entry-title style-03 newsletter-title' style={{ color: '#fff' }}>
											Newsletter Sign Up
										</h4>
										<p className='mb-5' style={{ color: 'white' }}>
											Sign up for the Best Made newsletter to get the latest news, announcements,
											special offers and event information
										</p>
										<div className='enter-mail'>
											<form method='post' action='#'>
												<input
													className='mail-input'
													placeholder='Your email address'
													type='text'
													value=''
													name='mail'
													id='mail'
													onClick={(e) => handlerEventEmail}
												/>
												<button
													type='submit'
													className='mail-submit'
													style={{ color: 'white', fontSize: '20px' }}>
													<ArrowRightCircleFill />
												</button>
											</form>
										</div>
									</div>
								</article>
							</div>
						</div>

						<div className='widget millside-module-mail' style={{ marginLeft: '60%', marginTop: '1%' }}>
							<div className='kopa-social-links-2 text-center' style={{ marginLeft: ' -150%' }}>
								<div className='container' style={{ marginBottom: '2%', marginTop: ' 2%' }}>
									<div className='row text-center'>
										<p>
											<a href='#' className='btn btn-store  text-white'>
												<span style={{ fontSize: '200%' }}>{appleIcon}</span>
												<span
													className='btn-label mb-43'
													style={{
														display: ' block',
														alignItems: ' center',
														lineHeight: ' 1'
													}}>
													Download on the
												</span>
												<span
													className='btn-caption mb-2'
													style={{
														display: ' block',
														alignItems: ' center',
														lineHeight: ' 2'
													}}>
													App Store
												</span>
											</a>

											<a href='#' className='btn btn-store text-white'>
												<span style={{ fontSize: '200%' }}>{playstoreIcon}</span>
												<span
													className='btn-label'
													style={{
														display: 'block',
														alignItems: ' right',
														lineHeight: ' 1'
													}}>
													{' '}
													Download on the
												</span>
												<span
													className='btn-caption -mt-10'
													style={{
														display: ' block',
														alignItems: ' right',
														lineHeight: ' 12',
														color: ' #fff'
													}}>
													Google Play
												</span>
											</a>
										</p>
									</div>
								</div>
								<ul className='clearfix -mt-4 '>
									<li>
										<a href='#'>{fbicon}</a>
									</li>
									<li>
										<a href='#'>{twtIcon}</a>
									</li>
									<li>
										<a href='#'>{instaIcon}</a>
									</li>
								</ul>
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
