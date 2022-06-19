import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<footer>
			<Paper>
        <Box className='bg-smooth-black 
          text-white'>
					<Container maxWidth='lg'>
						<Grid container spacing={5}>
                       <Grid className='justify-center'
                                align="center" item xs={12} sm={4}>
								<Box borderBottom={1}>Help</Box>
								<Box>
									<Link to='' color='inherit'>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>

							<Grid align='center'   item xs={12} sm={4}>
								<Box borderBottom={1}>Account</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>

							<Grid align="center"   item xs={12} sm={4}>
								<Box borderBottom={1}>Message</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>

							<Grid align="center"   item xs={12} sm={4}>
								<Box borderBottom={1}>About Us</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>

							<Grid align="center"   item xs={12} sm={4}>
								<Box borderBottom={1}>Faq</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>

							<Grid align="center"   item xs={12} sm={4}>
								<Box borderBottom={1}>Show</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
								<Box>
									<Link to=''>Contact</Link>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Paper>
		</footer>
	);
};

export default Footer;
