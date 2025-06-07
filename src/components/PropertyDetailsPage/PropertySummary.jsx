import React from 'react';

const PropertySummary = ({ property }) => {
    const {
        title,
        rooms,
        bathrooms,
        area,
        hasGarage,
        description,
        price,
        owner,
    } = property;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-6">
            {/* Left: Main info */}
            <div>
                <h2 className="text-[2rem] font-medium mb-2">{title}</h2>

                <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-6">
                    {rooms !== undefined && (
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-gray-500 text-base">bed</span>
                            {rooms} Logela
                        </div>
                    )}
                    {bathrooms !== undefined && (
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-gray-500 text-base">bathtub</span>
                            {bathrooms} Bainugela
                        </div>
                    )}
                    {area && (
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-gray-500 text-base">zoom_out_map</span>
                            {area}m²
                        </div>
                    )}
                    {hasGarage && (
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-gray-500 text-base">garage</span>
                            Garajea
                        </div>
                    )}
                </div>

                <h3 className="text-2xl font-medium mb-2">Overview</h3>
                <p className="text-[#6E6E6E] font-light mb-4">{description}</p>
                {/*{description?.[1] && <p className="text-gray-700">{description[1]}</p>}*/}
            </div>

            {/* Right: Sidebar card */}
            <div className="flex flex-col border border-gray-300 rounded-xl p-6 space-y-6 divide-y-1 divide-gray-200">
                <div className="pb-6">
                    <p className="text-base text-gray-500 mb-2">Buy with the price</p>
                    <p className="text-[2rem] leading-none font-medium">{price} €</p>
                </div>

                {owner && (
                    <div>
                        <div className="flex items-center gap-3 mb-6 border border-gray-300 p-4 rounded-lg">
                            <img
                                src={owner.image}
                                alt={owner.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-base font-medium text-gray-900">{owner.name}</p>
                                <p className="text-sm text-gray-500">Jabea</p>
                            </div>
                            <button className=" cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium ml-auto py-2 px-4 rounded-lg">
                                Get in touch
                            </button>
                        </div>
                    </div>
                )}

                <button className="w-full cursor-pointer text-sm text-gray-600 hover:text-indigo-600 border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2">
                    <span className="material-icons text-base">bookmark_border</span>
                    Save to my Bookmarks
                </button>
            </div>
        </section>
    );
};

export default PropertySummary;