import { useEffect, useState } from "react";
import PropertyCard from "../../PropertyCard.jsx";
import { useSearch } from "../../../context/SearchContext.jsx";

const PropertyList = () => {

    const [properties, setProperties] = useState([]);
    const [sortBy, setSortBy] = useState("relevant");
    const { searchQuery, locationQuery } = useSearch();

    useEffect(() => {
        fetch('/data/properties.json')
            .then((res) => res.json())
            .then((data) => setProperties(data));
    }, []);

    const extractPrice = (meta) => {
        const match = meta.match(/€([\d,.]+)/);
        return match ? parseFloat(match[1].replace(',', '')) : 0;
    };

    const filtered = properties
        .filter((p) => {
            const title = p.title?.toLowerCase() || '';
            const location = p.location?.toLowerCase() || '';
            const query = searchQuery.toLowerCase();
            const locQuery = locationQuery.toLowerCase();

            return title.includes(query) && location.includes(locQuery);
        })
        .sort((a, b) => {
            if (sortBy === 'price-asc') {
                return extractPrice(a.meta) - extractPrice(b.meta);
            } else if (sortBy === 'price-desc') {
                return extractPrice(b.meta) - extractPrice(a.meta);
            }
            return 0; // relevant / default
        });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">{filtered.length} properties found</h2>
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
            {filtered.map((p, i) => (
                <PropertyCard key={i} property={p} />
            ))}
        </div>
    );
}

export default PropertyList;