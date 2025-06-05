import React from "react";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
    const { searchQuery, setSearchQuery, locationQuery, setLocationQuery } = useSearch();

    return (
        <div className="bg-white py-6 search-bar-shadow -mt-13 rounded-lg container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative flex-grow w-full md:w-auto">
                    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-sm">
                        search
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Search by keyword (e.g., '2 bedrooms', 'near university')"
                    />
                </div>
                <div className="relative flex-grow w-full md:w-auto">
                    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-sm">
                        location_on
                    </span>
                    <input
                        type="text"
                        value={locationQuery}
                        onChange={(e) => setLocationQuery(e.target.value)}
                        className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Location (e.g., 'Bilbao', 'Donostia')"
                    />
                </div>
                <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 w-full md:w-auto">
                    <span className="material-icons mr-2 icon-sm">filter_list</span> Filters
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg w-full md:w-auto">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
