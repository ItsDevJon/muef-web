import { createContext, useContext } from 'react';
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const USERS = [
    {
        username: "jramos",
        password: "G7r@p2qL!m",
        name: "Jon Ramos",
    },
];

const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {

    const [user, setUser] = useLocalStorage("user", null);
    const [users, setUsers] = useLocalStorage("users", USERS);
    const navigate = useNavigate();

    const location = useLocation();

    // LoginPage logic
    const login = async (user) => {

        const { username, password } = user;
        const foundUser = users.find(u => u.username === username && u.password === password);

        if (foundUser) {
            setUser(foundUser);

            const from = location.state?.from?.pathname || '/';

            navigate(from, { replace: true });

            return true;
        }

        return false;

    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{user, users, setUsers, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};