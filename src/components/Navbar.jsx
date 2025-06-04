import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container mx-auto mb-12 py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4 gap-2">
                <div className="flex items-center space-x-2">
                    <span className="material-icons text-indigo-600">place</span>
                    <span className="text-xl font-bold text-gray-900">MUEF</span>
                </div>
                <div className="hidden md:flex space-x-6 text-base font-medium text-gray-700">
                    <NavLink to="/bilatzailea" className="hover:text-indigo-600">
                        Bilatzailea
                    </NavLink>

                    <NavLink to="/nire-iragarkiak" className="hover:text-indigo-600">
                        Nire Iragarkiak
                    </NavLink>

                    <NavLink to="/txat" className="hover:text-indigo-600">
                        Txat
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Sign in</a>
                <a
                    href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg"
                >
                    Sign up
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
