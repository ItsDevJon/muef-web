import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard.jsx";
import { useSearch } from "../../context/SearchContext.jsx";

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
        <div className="space-y-11">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-gray-800">{filtered.length} properties found</h2>
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
                {filtered.map((p, i) => (
                    <PropertyCard key={i} property={p} />
                ))}
            </div>
        </div>
    );
}

export default PropertyList;