import React from 'react'

export default function Sidebar() {
  return (
    <div>
    
        <div ><img/></div>
        <ul >
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
                    <li className="nav-item">
                    <a className="nav-link" href="/ingredients">Ingredients</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contacts">Contacts</a>
                    </li>
                    
                </ul>
    </div>
  )
}
