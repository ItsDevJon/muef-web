import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import {useProperties} from "../context/PropertyContext.jsx";

const formFields = [
    { name: "title", label: "Izenburua", type: "text" },
    { name: "location", label: "Kokapena", type: "text" },
    { name: "price", label: "Prezioa (€)", type: "number" },
    { name: "area", label: "Tamainia (m²)", type: "number" },
    { name: "rooms", label: "Logelak", type: "number" },
    { name: "bathrooms", label: "Bainugelak", type: "number" },
];

const DEFAULT_DESCRIPTION = "IIkasleentzat aproposa, Deustuko Unibertsitatetik pauso batera kokatua. Apartamentu honek kokapen pribilegiatua du, ikasketa eta eguneroko erosotasuna uztartzen dituena. Erabat hornitua dago, bizitzeko prest, eta ekipamendu modernoak ditu: sukalde osatua, altzari erosoak eta biltegiratze espazio ugari. Eguzkiaren argia etxebizitza osoan zehar sartzen da, eta balkoi zabal eta eguzkitsu batek aire librean atseden hartzeko aukera paregabea eskaintzen du. Inguruan, zerbitzu guztiak eskura daude: supermerkatuak, garraio publikoa, gimnasioa eta aisialdirako guneak. Bizitzeko toki atsegina eta funtzionala, ikasleentzako pentsatua.";

const DEFAULT_NEARBY_PLACES = [
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
];

const NewPropertyPage = () => {
    const { user } = useAuth();
    const { setProperties, setCreatedProperties } = useProperties();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        location: "",
        price: "",
        area: "",
        rooms: "",
        bathrooms: "",
        gallery: [
            "/images/properties/qM7uG1Xt/1.jpg",
            "/images/properties/qM7uG1Xt/2.jpg",
            "/images/properties/qM7uG1Xt/3.jpg",
            "/images/properties/qM7uG1Xt/4.jpg",
            "/images/properties/qM7uG1Xt/5.jpg"
        ],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProperty = {
            id: nanoid(8),
            price: Number(form.price),
            area: Number(form.area),
            rooms: Number(form.rooms),
            bathrooms: Number(form.bathrooms),
            owner: {
                name: user.name,
                avatar: "https://i.pravatar.cc/44"
            },
            hasGarage: true,
            description: DEFAULT_DESCRIPTION,
            nearby: DEFAULT_NEARBY_PLACES,
            gallery: form.gallery,
            bookmarked: false,
        };

        setCreatedProperties((prevCreatedProperties) => [...prevCreatedProperties, newProperty]);
        setProperties((prevProperties) => [...prevProperties, newProperty]);

        navigate("/"); // or /my-properties
    };

    return (
        <div className="w-2xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6">
                Iragarki Berria Sortu
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {formFields.map(({name, label, type}) => (
                    <div key={name}>
                        <label htmlFor={name} className="block mb-1 capitalize">{label}</label>
                        <input
                            id={name}
                            name={name}
                            type={type}
                            value={form[name]}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                    Sortu Iragarkia
                </button>
            </form>
        </div>
    );
};

export default NewPropertyPage;