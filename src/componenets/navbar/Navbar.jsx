import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* This is use for centering the Navbar */}
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto ">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Developers Place</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/" exact activeClassName='menu_active'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service" exact activeClassName='menu_active'>Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about" activeClassName='menu_active'>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact" activeClassName='menu_active'>Contact</NavLink>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Navbar