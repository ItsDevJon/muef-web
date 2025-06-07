import { useState } from "react";

const PropertyCard = ({ property }) => {

    const [bookmarked, setBookmarked] = useState(property.bookmarked || false);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
    }
    
    return (
        <div className="bg-white p-6 rounded-lg card-shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
                <img
                    alt={property.alt}
                    className="w-full sm:w-48 h-40 object-cover rounded-lg"
                    src={property.image}
                />
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-indigo-700 hover:underline">
                            {property.title}
                        </h3>
                        <button 
                            onClick={toggleBookmark}
                            aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
                            className="cursor-pointer text-gray-400 hover:text-red-500"
                        >
                            <span className="material-icons icon-sm">{bookmarked ? 'bookmark' : 'bookmark_border'}</span>
                        </button>
                    </div>
                    <p className="text-2xl font-bold mb-2">{property.price}</p>
                    <p className="text-sm text-gray-500 mb-2">{property.meta}</p>
                    <p className="text-gray-700 text-sm mb-3">{property.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="material-icons icon-sm mr-1">location_on</span>
                        <span>{property.location}</span>
                    </div>
                    {/* <div className="flex flex-wrap gap-2 mb-3">
                        {property.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-2 py-1 text-xs font-medium rounded-full ${tag.class}`}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div> */}
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400">{property.listed}</p>
                        <button className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg">
                            Contact Owner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;