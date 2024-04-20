import React from 'react';
import logo from '../images/logo.png'; // Assuming you have a logo image
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <div className='w-10 bg-light'>
      <motion.div 
        className="sidebar"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="vh-100 text-white">
          <div className="overlay h-100">  
            <div className="sidebar position-fixed left-0 top-0 d-flex flex-column justify-content-between h-100 z-3">
=                <div><img src={logo} alt='logo' className='w-50' /></div> {/* Rendering the logo */}
                <ul>
                  {/* Navigation links */}
                  <li className="nav-item">
                    <a className="nav-link active" href="/" aria-current="page">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Search">Search</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Categories">Categories</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/area">Area</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ingredients">Ingredients</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contacts">Contacts</a>
                  </li>
                </ul>
                {/* Social media icons */}
                <ul className="brands-icon list-unstyled d-flex pb-5">
                  <li><i className="fa fa-brands fa-facebook-f text-white"></i></li>
                  <li><i className="fa fa-brands fa-twitter text-white"></i></li>
                  <li><i className="fa fa-solid fa-globe text-white"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>    
  );
}
