import Paper from '@mui/material/Paper';
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Footer = () => {
	return (
		<footer>
			<Paper>
				<Box
					className='bg-smooth-black 
                    text-white text-center'>
					<Container
						maxWidth='lg'>
						<Grid  container spacing={5}>
                       <Grid item xs={12} sm={4}>
								<Box
									className="font-semibold 
								     text-1xl" borderBottom={1}>
									INFORMATION
								</Box>
								<Box>
									<Link to=''>ABOUT US</Link>
								</Box>
								<Box>
									<Link to=''>CUSTOMER SERVICE</Link>
								</Box>
								<Box>
									<Link to=''>ConPRIVACY POLICYact</Link>
								</Box>
								<Box>
									<Link to=''>MAP LOCATION</Link>
								</Box>
							</Grid>

							<Grid item xs={12} sm={4}>
								<Box
									className="font-semibold 
								     text-1xl" 
									borderBottom={1}>
									WHY US?
								</Box>
								<Box>
									<Link to=''>FAQ</Link>
								</Box>
								<Box>
									<Link to=''>MEET THE TEAM</Link>
								</Box>
								<Box>
									<Link to=''>OUR BRANDS</Link>
								</Box>
								<Box>
									<Link to=''>INTERESTING FACTS</Link>
								</Box>
							</Grid>

							<Grid item xs={12} sm={4}>
								<Box
									className="font-semibold 
									 text-1xl" >
									MY ACCOUNT
								</Box>
								<Box>
									<Link to=''>T's & C's</Link>
								</Box>
								<Box>
									<Link to=''>SIGN IN</Link>
								</Box>
								<Box>
									<Link to=''>VIEW CART</Link>
								</Box>
								<Box>
									<Link to=''>MY WISHLIST</Link>
								</Box>
							</Grid>

							<Grid   item xs={12} sm={4}>
								<Box
									className="font-semibold 
									 text-1xl"
									 borderBottom={1}>
									About Us
								</Box>
								<Box>
									<Link to=''>
										TRACK MY ORDER
									</Link>
								</Box>
								<Box>
									<Link to=''>HELP</Link>
								</Box>
								
							</Grid>

							<Grid  item xs={12} sm={4}>
								<Box
									className="font-semibold   
								    text-1xl" borderBottom={1}>
									Faq
								</Box>
								<Box>
									<Link to=''>Franchises</Link>
								</Box>
								<Box>
									<Link to=''>Login | Register</Link>
								</Box>
							</Grid>

							<Grid  item xs={12} sm={4}>
								<Box
									className="font-semibold 
									text-1xl" 
									borderBottom={1}>Show</Box>
								<Box>
									<Link to=''>ORDERS&SHIPPING</Link>
								</Box>
								<Box>
									<Link to=''>My Orders</Link>
								</Box>
								
							</Grid>
						</Grid>
						<Box className="pb-10, pt-10
						font-semibold text-1xl uppercase cursor-pointer">
						   2022 Copyright &copy; <a href="http://pintotnet@gmail.com">Pinto All right reserved</a>
						</Box>
					</Container>
				</Box>
			</Paper>
		</footer>
	);
};

export default Footer;
