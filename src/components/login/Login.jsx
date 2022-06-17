import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Login = () => {
  return (
      <div className=" text-white">
          <Link to="/login">
              <FaUserCircle
               className="text-4xl hover:text-blue"
              />
          </Link>
      </div>
  )
}

export default Login