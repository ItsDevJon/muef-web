import {useEffect, useState} from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {trackMatomoEvent} from "../utils/trackMatomoEvent.js";
import {X} from "lucide-react";

const RegisterPage = () => {
    const { users, setUsers } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setError(false)
    }, [username]);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Pasahitzak ez dira berdinak");
            return;
        }

        // Check if the username already exists
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            setError(true);
            return;
        }

        setSuccess(true)

        // Track the registration event with Matomo
        trackMatomoEvent({
            category: 'new_user',
            action: 'register',
            name: 'User Signed Up'
        });

        const newUser = { username, password };

        setUsers(prevUsers => [...prevUsers, newUser]);

        // navigate('/login')

    };

    const handleLogin = (e) => {
        // Redirect to login page
        setSuccess(false);
        navigate('/login');
    }

    return (
        <div className="max-w-md w-full space-y-8 mx-auto my-auto">
            <h1 className="text-3xl font-semibold text-center">
                Kontu Berria Sortu
            </h1>
            {error && (
                <div className="flex mb-4 p-3 bg-red-100 text-red-800 rounded">
                    <p className="flex-1">
                        Error! Erabiltzaile izena dagoeneko erregistratuta dago.
                    </p>
                </div>
            )}
            {success && (
                <div className="flex mb-4 p-3 bg-green-100 text-green-800 rounded">
                    Kontua arazo gabe sortu da!
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="cursor-pointer ml-auto text-indigo-600 hover:underline"
                    >
                        Hasi saioa
                    </button>
                </div>
            )}



            <form onSubmit={handleRegister} className="space-y-5">
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
                        pattern="^[a-zA-Z0-9_]{3,16}$"
                        title="3-16 karaktere, letrak, zenbakiak edo '_' karakterea"
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
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@€&#?!])[A-Za-z\d.@€&#?!]{8,12}$"
                        title="8-12 karaktere, maiuskula eta minuskula, zenbakiak eta karaktere bereziak (., @, €, #, ?, !)"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                        Pasahitza
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Berretsi zure pasahitza"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Erregistratu
                </button>
            </form>

            <div className="flex justify-between text-sm mt-4">
                <NavLink to="/login" className="text-gray-600 underline">
                    Kontu bat duzu? Hasi saioa
                </NavLink>
            </div>
        </div>
    )
}

export default RegisterPage;
