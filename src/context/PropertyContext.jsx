import {createContext, useContext, useEffect, useMemo, useState} from "react";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters & Sorting
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [sortBy, setSortBy] = useState("relevant");

    useEffect(() => {
        fetch("/data/properties.json")
            .then((res) => res.json())
            .then((data) => {
                // Simulate a delay for loading state
                // setTimeout(
                //     () => {
                //         setProperties(data);
                //         setLoading(false);
                //     },
                //     3000
                // )
                setProperties(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch properties:", err);
                setLoading(false);
            });
    }, []);

    const filteredProperties = useMemo(() => {
        const filtered = properties.filter((p) => {
            const title = p.title?.toLowerCase() || "";
            const location = p.location?.toLowerCase() || "";
            return (
                title.includes(searchQuery.toLowerCase()) &&
                location.includes(locationQuery.toLowerCase())
            );
        });

        const sorted = [...filtered];
        if (sortBy === "price-asc") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
            sorted.sort((a, b) => b.price - a.price);
        }

        return sorted;
    }, [properties, searchQuery, locationQuery, sortBy]);

    const getPropertyById = (id) => properties.find((p) => p.id === id);

    return (
        <PropertyContext.Provider
            value={{
                loading,
                properties,
                filteredProperties,
                searchQuery,
                setSearchQuery,
                locationQuery,
                setLocationQuery,
                sortBy,
                setSortBy,
                getPropertyById
            }}
        >
            {children}
        </PropertyContext.Provider>
    );
};

export const useProperties = () => useContext(PropertyContext);