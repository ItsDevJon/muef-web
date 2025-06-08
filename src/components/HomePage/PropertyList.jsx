import PropertyCard from "../PropertyCard.jsx";
import {useProperties} from "../../context/PropertyContext.jsx";
import {Link} from "react-router-dom";

const PropertyList = () => {

    const { loading, filteredProperties, sortBy, setSortBy } = useProperties();

    const PropertyCardSkeleton = () => (
        <div className="rounded-2xl overflow-hidden border p-4 animate-pulse space-y-4 bg-white">
            <div className="w-full h-60 bg-gray-200 rounded-xl" />
            <div className="h-5 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="flex gap-3">
                <div className="h-4 w-12 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
        </div>
    );

    return (
        <div className="space-y-11">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-gray-800">{filteredProperties.length} properties found</h2>
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-8 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500">
                        <option value={"relevant"}>Relevant</option>
                        <option value={"price-asc"}>Price: Low to High</option>
                        <option value={"price-desc"}>Price: High to Low</option>
                        <option>Newest</option>
                    </select>
                    <span className="material-icons absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                </div>
            </div>
            <div
                className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(426px, 1fr))' }}
            >
                {loading
                    ? Array.from({ length: 8 }).map((_, index) => <PropertyCardSkeleton key={index} />)
                    : filteredProperties.map((property) => (
                        <Link to={`/properties/${property.id}`} key={`link-${property.id}`}>
                            <PropertyCard key={property.id} property={property} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default PropertyList;