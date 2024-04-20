import React from 'react'

export default function Sidebar() {
  return (
    <div>
    <div class="sidebar-box h-100">
                    
    <ul class="group-ul  list-unstyled fs-5 h-100  ">
        <ul class="list list-unstyled animate__animated animate__fadeInUpBig animate__delay-1s pt-0">
        <li><a id="searchLink" href="">Search</a> </li>
        <li><a id="categoryLink" href="">Categories</a></li>
        <li><a id="areaLink" href="">Area</a></li>
        <li><a id="ingredientsLink" href="">Ingredients</a></li>
        <li><a id="contactsLink" href="">Contacts</a></li>
        </ul>
        <ul class="brands-icon list-unstyled d-flex pb-5">
            <li><i class="fa fa-brands fa-facebook-f text-white"></i></li>
            <li><i class="fa fa-brands fa-twitter text-white"></i></li>
            <li><i class="fa fa-solid fa-globe text-white"></i></li>
        </ul>
      
    </ul>
    
</div>
<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="/" aria-current="page"
                            >Home
                            </a
                        >
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
                    
                </ul>
    </div>
  )
}
