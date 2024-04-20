import React from 'react'
import logo from '../images/logo2.png'

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
      >
        <div className="container">
            <a className="navbar-brand " href="/"></a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page"
                            >Home
                            </a
                        >
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/movies">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tvseries">TV SERIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    
                </ul>
            </div>
        </div>
      </nav>
      
    </div>
  )
}
