import React, {useEffect, useState} from "react";
import {useAuth} from "../context/AuthProvider.jsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const { user, login } = useAuth();

    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        }
    }, [user])

    const handleLogin = (e) => {
        e.preventDefault();

        const credentials = {username: username, password: password};

        login(credentials)
            .then(success => setError(!success));

    }

    return (
        <div className="max-w-md w-full space-y-8 mx-auto my-auto">
            <h1 className="text-3xl font-semibold text-center">
                Hasi Saioa
            </h1>
            {error && (
                <div className="flex mb-4 p-3 bg-red-100 text-red-800 rounded">
                    <p className="flex-1">
                        Erabiltzailea edo pasahitza okerra da. Saiatu berriro.
                    </p>
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium mb-1">
                        Erabiltzaile Izena
                    </label>
                    <input
                        id="username"
                        type="username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Sartu zure erabiltzaile izena"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Pasahitza
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Sartu zure pasahitza"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Hasi Saioa
                </button>
            </form>

            <div className="flex justify-between text-sm mt-4">
                <NavLink to="/register" className="text-gray-600 underline">
                    Ez duzu konturik? Erregistratu
                </NavLink>
                <a hidden href="#" className="text-gray-600 underline">
                    Pasahitza ahaztu duzu?
                </a>
            </div>
        </div>
    )
}

export default LoginPage;
