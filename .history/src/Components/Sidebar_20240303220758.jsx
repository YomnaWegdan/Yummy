import React, { useState } from 'react';
import logo from '../images/logo.png'; // Assuming you have a logo image
import { FaBars, FaTimes , FaGlobe, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaShareNodes } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';



export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`side w-80 py-3 position-fixed z-3 d-flex flex-column align-items-center justify-content-between text-black vh-100 bg-light  ${isOpen?'start-250':'start-0'}`}>
    <div><img src={logo} alt='logo' className='w-50' /></div> {/* Rendering the logo */}
    <button className={`toggle-btn position-fixed top-50 `} onClick={toggleSidebar}>
    {isOpen ? <FaTimes className='text-black' /> : <FaBars className='text-black' />}
  </button>
  <div className='d-flex flex-column '><FaGlobe /> <FaShareNodes />

  </div>
    </div>
     
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="d-flex flex-column justify-content-between align-items-center vh-100 py-4">
            <ul className=' list-unstyled '>
              {/* Navigation links */}
              <li className="nav-item">
                <NavLink className="nav-link active" href="/" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/search"}>Search</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories">Categories</a>
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
            <div >
            <div className="  d-flex justify-content-center ">
            <FaFacebookF/>
            <FaTwitter/>
            <FaGlobe/></div>
            <p>Copyright Â© 2019 All Rights
            Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




// import React from 'react';
// import logo from '../images/logo.png'; // Assuming you have a logo image
// import { motion } from 'framer-motion';
// import { FaBarsStaggered } from "react-icons/fa6";

// export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
//   return (
//     <>
//     <button onClick={toggleSidebar} className='btn btn-danger align-self-center mb-3'><FaBarsStaggered/></button>

//       <motion.div 
//         className="sidebar"
//         initial={{ x: isSidebarOpen ? 0 : '-100%' }}
//         animate={{ x: isSidebarOpen ? 0 : '-100%' }}
//         transition={{ type: 'spring', stiffness: 120 }}
//       >

//         <div className=" sidebar vh-100 text-dark bg-light w-10  position-fixed left-0 top-0 z-3 ">

//             <div className=" d-flex flex-column justify-content-between h-100 ">
//                <div><img src={logo} alt='logo' className='w-50' /></div> {/* Rendering the logo */}
//                 <ul>
//                   {/* Navigation links */}
//                   <li className="nav-item">
//                     <a className="nav-link active" href="/" aria-current="page">Home</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/Search">Search</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/Categories">Categories</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/area">Area</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/ingredients">Ingredients</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/contacts">Contacts</a>
//                   </li>
//                 </ul>
//                 {/* Social media icons */}
//                 <ul className="brands-icon list-unstyled d-flex pb-5">
//                   <li><i className="fa fa-brands fa-facebook-f text-white"></i></li>
//                   <li><i className="fa fa-brands fa-twitter text-white"></i></li>
//                   <li><i className="fa fa-solid fa-globe text-white"></i></li>
//                 </ul>
//               </div>
//             </div>
//       </motion.div>
//     </>
//   );
// }










