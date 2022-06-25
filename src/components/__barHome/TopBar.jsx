import { Box, Grid } from '@mui/material';
import React from 'react'
import
    {
        FaFolderOpen,
        FaDiceOne,
        FaGlobeAfrica,
        FaCalendarAlt,
        FaBriefcase,
        FaSort,
        FaFilter
    } from "react-icons/fa";
import './TopBar.css'

const valData = [
    {
        id: 0, title: "Genre All", icon:
            <FaFolderOpen
                className="hover:text-smooth-black 
             cursor-pointer text-xm mx-2 mt-1"/>
    },
    {
        id: 1, title: "Type All",
        icon: <FaDiceOne
            className="hover:text-smooth-black 
            cursor-pointer  text-xm mx-2 mt-1"
        />
    },
    {
        id: 2, title: "Country All",
        icon: <FaGlobeAfrica
            className="hover:text-smooth-black
             cursor-pointer  text-xm mx-2 mt-1
             "
        />
    },
    {
        id: 3, title: "Year All",
        icon: <FaCalendarAlt
            className="hover:text-smooth-black 
            cursor-pointer text-xm mx-2 mt-1"
        />
    },
    {
        id: 6, title: "Quality All",
        icon: <FaBriefcase
            className="hover:text-smooth-black 
            cursor-pointer text-xm mx-2 mt-1"
        />
    },
    {
        id: 7, title: "Sort Default",
        icon: <FaSort
            className="hover:text-smooth-black 
            cursor-pointer text-xm mx-2 mt-1"
        />
    },
    {
        id: 8, title: "Filter All",
        icon: <FaFilter
            className="hover:text-smooth-black 
            cursor-pointer text-xm mx-2 mt-1"
        />
    }
];


const TopBar = () =>
{
    return (
        <div>
            <Box>
                <Grid container>
                    <Box>
                        <span className="flex mb-6 -mt-9  mx-1 border-w-b-xs border-b-2 ">
                            Result for:<p className="mx-2"> All </p> </span>
                        <Grid className="GridContainer tex-white text-sm md:px-0 ">
                            {valData.map((item) => (
                                <Grid className="bg-smooth-black
                       px-2 py-2 cursor-pointer 
                       rounded hover:bg-blue" key={item.id}>
                                    {item.icon}  {item.title}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}

export default TopBar