import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../src/assets/favicon.ico'
import SearchBar from './../searchbar/SearchBar'
import Login from '../login/Login'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
         <nav className=' sticky top-0 bg-smooth-black drop-shadow-2xl '>
          <div className='flex items-center font-medium justify-around '>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                  <Link to='/'>
                      <img src={logo} alt="logo" className="md:cursor-pointer  h-10" />
                  </Link>
                   <div className="text-3xl md:hidden text-white"  onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>    
                    </div>
              </div>
              <ul className="md:flex hidden text-white uppercase items-center gap-8 md:cursor-pointer">
                  <div>
                      <div className=" py-5 px-3 inline-block">
                          <SearchBar placeholder="Search..." />
                      </div>
                  </div>
              </ul>
              <div className="md:block hidden">
               <Login/>
              </div>
            
              {/* Mobile navbar*/}
              <div className={`md:hidden bg-smooth-black text-white  absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 easy-in ${open ? 'left-0' : 'left-[-100%]'}
              `}>
                  <div className="flex justify-center bg-smooth-black mr-4">
                    <div className="py-20  mt-5 px-3 inline-block">
                        <Login />
                    </div>
                  </div>
                 <div className="py-0 text-center -mt-20   items-center  px-3">
                     <SearchBar placeholder="Search..." />
                 </div>
              </div> 
          </div>
      </nav>
  )
}

export default Navbar