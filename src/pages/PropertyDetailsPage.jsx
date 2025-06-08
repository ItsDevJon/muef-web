import React from 'react';
import PropertyGallery from "../components/PropertyDetailsPage/PropertyGallery.jsx";
import PropertySummary from "../components/PropertyDetailsPage/PropertySummary.jsx";
import PropertyNearbyMap from "../components/PropertyDetailsPage/PropertyNearbyMap.jsx";

const PropertyDetailsPage = () => {
    const mockProperty = {
        "title": "3 Logelako Apartamentu Zabal bat, Deustun",
        "owner": {
            "name": "Jane Doe",
            "avatar": "https://i.pravatar.cc/44?img=26",
        },
        "gallery": [
            "/images/house-01.jpg",
            "/images/house-02.jpg",
            "/images/house-03.jpg",
            "/images/house-04.jpg",
            "/images/house-05.jpg",
        ],
        "alt": "Balkoidun apartamentu modernoa",
        "price": 470000,
        "rooms": 3,
        "bathrooms": 2,
        "area": 110,
        "hasGarage": true,
        "description": "Ikasleentzat aproposa, Deustuko Unibertsitatetik pauso batera kokatua. Apartamentu honek kokapen pribilegiatua du, ikasketa eta eguneroko erosotasuna uztartzen dituena. Erabat hornitua dago, bizitzeko prest, eta ekipamendu modernoak ditu: sukalde osatua, altzari erosoak eta biltegiratze espazio ugari. Eguzkiaren argia etxebizitza osoan zehar sartzen da, eta balkoi zabal eta eguzkitsu batek aire librean atseden hartzeko aukera paregabea eskaintzen du. Inguruan, zerbitzu guztiak eskura daude: supermerkatuak, garraio publikoa, gimnasioa eta aisialdirako guneak. Bizitzeko toki atsegina eta funtzionala, ikasleentzako pentsatua.",
        "location": "Bilbo, Bizkaia",
        "nearby": [
            {
                "icon": "🚇",
                "name": "Indautxu Metro Geltokia",
                "distance": "300m",
                "walking_time": "4 min oinez"
            },
            {
                "icon": "🏬",
                "name": "El Corte Ingles Gran Via",
                "distance": "700m",
                "walking_time": "9 min oinez"
            },
            {
                "icon": "🏟️",
                "name": "San Mames Estadioa",
                "distance": "1,2km",
                "walking_time": "17 min oinez"
            },
            {
                "icon": "🎓",
                "name": "Deustuko Unibertsitatea",
                "distance": "1,6km",
                "walking_time": "5 min oinez"
            }
        ],
        "listed": "Duela 2 egun zerrendatua",
        "bookmarked": false
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7">
            <PropertyGallery images={mockProperty.gallery} />
            <PropertySummary property={mockProperty} />
            <hr className="border-gray-200 mt-6" />
            <PropertyNearbyMap locationName={mockProperty.location} nearbyPlaces={mockProperty.nearby} />
        </div>
    );
};

export default PropertyDetailsPage;