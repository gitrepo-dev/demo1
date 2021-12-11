import React, { useState } from 'react'
import logo from '../assets/logo.png'
import blackmenu from '../assets/black.png'

export default function Navigation() {

    const [isMenu, setIsMenu] = useState(false)

    const toggleMenu = () => {
        console.log('hello world')
    }


    return (
        <>
            <nav className="navbar navbar-expand-md py-0 home-navbar shadow bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="11studio" className='logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homeMainNavbar" aria-controls="homeMainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="homeMainNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-md-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Mission</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chain development</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AboutUs</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={blackmenu} alt="" className='pointer' style={{ maxWidth: '30px' }} data-bs-toggle="collapse" data-bs-target="#homeMainNavbarExpend" aria-controls="homeMainNavbarExpend" aria-expanded="false" aria-label="homeMainNavbarExpend" />
                                {/* <nav className="navbar py-0 navbar-expand-xl home-navbar-subnav bg-white">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homeMainNavbarExpend" aria-controls="homeMainNavbarExpend" aria-expanded="false" aria-label="Toggle navigation">
                                    
                                </button>
                                <div className="collapse navbar-collapse" id="homeMainNavbarExpend">
                                 
                                </div>
                            </nav> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="home-navbar-subnav">
                <div class="collapse" id="homeMainNavbarExpend">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-md-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Doc</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#productandservices" aria-controls="productandservices" aria-expanded="false" aria-label="Product and service">Products and services</a>

                            <div class="collapse" id="productandservices">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-md-end">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Chain</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Advice</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Industry 4.0
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">DApp</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Server</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">The team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ivesti with us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work with us
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}
