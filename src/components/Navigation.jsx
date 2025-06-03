import classNames from "classnames";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Navigation(){

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {

        setIsOpen(!isOpen)

    }

    const navbarBurgerClass = classNames({
        "navbar-burger": true,
        "is-active": isOpen
    })

    const navbarMenuClass = classNames({
        "navbar-menu": true,
        "is-active": isOpen
    })

    return (
        <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

                <div className="container">

                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <h2 className='is-size-4 has-text-white has-text-weight-bold'>MUEF</h2>
                        </a>

                        <a role="button" className={navbarBurgerClass} aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={toggleNavbar}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className={navbarMenuClass} id="navMenu">
                        <div className="navbar-start">

                            <NavLink to="/bilatzailea" className="navbar-item">
                                Bilatzailea
                            </NavLink>

                            <NavLink to="/nire-iragarkiak" className="navbar-item">
                                Nire Iragarkiak
                            </NavLink>

                            <NavLink to="/txat" className="navbar-item">
                                Txat
                            </NavLink>
{/* 
                            <NavLink to="/clients" className="navbar-item">
                                Bezeroak
                            </NavLink> */}

                        </div>

                        <div className="navbar-end">

                            <div className="navbar-item">

                                <div className="buttons">

                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>

                                    <a className="button is-light">
                                        Log in
                                    </a>
                                    
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </nav>
            <Outlet />
        </>
    )

}