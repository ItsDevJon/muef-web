import React from 'react';
import {Airplay} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Etxebila</h4>
                        <p className="text-sm">
                            Your trusted partner for finding homes in the Basque Country. We connect people with
                            their ideal living spaces.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white" href="#">Search Homes</a></li>
                            <li><a className="hover:text-white" href="#">List your Property</a></li>
                            <li><a className="hover:text-white" href="#">About Us</a></li>
                            <li><a className="hover:text-white" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a className="text-gray-400 hover:text-white" href="#">
                                <Airplay className="w-5 h-5" />
                            </a>
                            <a className="text-gray-400 hover:text-white" href="#">
                                <Airplay className="w-5 h-5" />
                            </a>
                            <a className="text-gray-400 hover:text-white" href="#">
                                <Airplay className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
                    <p>© 2024 Etxebila. All rights reserved. Designed for students and young professionals in Euskadi.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
