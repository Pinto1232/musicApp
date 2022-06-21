import React from 'react';
import { useGetRelatedQuery } from './../../services/AllApi'
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";
import CardFixed from '../Card/CardFixed';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const AlbumCard = (props) => {
    const { data: relatedData, error, isLoading } = useGetRelatedQuery("")
     const { loading = false } = props;



  return (
      <div>
          <Grid container>
          <div className="grid grid-cols-1 xs:grid-cols-2   sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 mx-auto mt-10  p-4 gap-8">
              {error && <p className='text-white text-center text-lg'>Something went wrong, please try again later...</p>}
             
              {relatedData?.data.slice(0, 14).map((items) => (
                  <Box key={items.id}  sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                      <div className=" Card  text-white bg-smooth-black w-full">
               
                              {items ? (
                              <img
                                      src={items.picture_medium}
                                       className="block h-auto w-full 
                                         transform transition duration-500
                                         hover:scale-110 cursor-pointer
                                       "alt="img"
                                  />

                              ) : (
                                  <Skeleton
                                      variant="rectangular"
                                      width={210} height={118} />    
                              )}
                              
                          <Box
                              className="flex items-center justify-between leading-tight p-2 md:p-4">
                              {items ? (
                                  <Box sx={{pr: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        {items.name}
                                      </Typography>
                                      
                                      <Typography gutterBottom variant="body2">
                                        {`№ Fans ${items.nb_fan}`}
                                      </Typography>
                                  </Box>
                                 ):(
                                    <Box sx={{ pt: 0.5 }}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                    </Box>    
                              )} 
         
    
                          </Box>
                          <Box className="flex items-center justify-between bg-blue leading-none p-2 md:p-4">
                              <a className="flex items-center no-underline hover:underline text-white" href="#">
                                  <span><FaThumbsUp></FaThumbsUp></span>
                              </a>
                              <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                  <span><FaThumbsDown></FaThumbsDown></span>
                              </a>
                          </Box>
                      </div>  
                  </Box>
              ))}
          </div>
          </Grid>
          <CardFixed />
      </div>
  )
}

export default AlbumCard