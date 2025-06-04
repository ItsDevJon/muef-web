import React from "react";

const HeroHeader = () => (
    <header className="hero-gradient py-16 sm:pb-24 sm:pt-7">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Find your perfect home today</span>
                <span className="block">within minutes.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Discover unique properties in the Basque Country. Tailored filters for students and young professionals
                to find the ideal living space.
            </p>
        </div>
    </header>
);

export default HeroHeader;
