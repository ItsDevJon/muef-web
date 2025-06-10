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
            ...form,
            price: Number(form.price),
            area: Number(form.area),
            rooms: Number(form.rooms),
            bathrooms: Number(form.bathrooms),
            owner: user.username,
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