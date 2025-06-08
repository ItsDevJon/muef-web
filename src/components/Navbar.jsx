import React from 'react';
import { NavLink } from 'react-router-dom';
import FilterCone from '../assets/filter-cone.svg?react';

const Navbar = () => {
    return (
        <nav className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4 gap-2">
                <div className="flex items-center space-x-2">
                    <FilterCone />
                    <span className="text-xl font-bold text-gray-900">MUEF</span>
                </div>
                <div className="hidden md:flex text-base font-medium text-gray-700">
                    <NavLink to="/bilatzailea" className="hover:text-indigo-600 px-4 py-2">
                        Bilatzailea
                    </NavLink>

                    <NavLink to="/nire-iragarkiak" className="hover:text-indigo-600 px-4 py-2">
                        Nire Iragarkiak
                    </NavLink>

                    <NavLink to="/txat" className="hover:text-indigo-600 px-4 py-2">
                        Txat
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <a
                    href="#"
                    className="text-sm font-medium py-2 px-4 border rounded-md text-indigo-600 hover:bg-indigo-50"
                >
                    Iragarkia Argitaratu
                </a>
                <a
                    href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
                >
                    Log in
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
