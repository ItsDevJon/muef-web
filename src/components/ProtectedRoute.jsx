import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../context/AuthProvider.jsx";

const ProtectedRoute = ({ element, redirectTo = "/login" }) => {
    const { user } = useAuth();
    const location = useLocation();

    return user
        ? element
        : <Navigate to ={redirectTo} state={{ from: location }} replace />;
};

export default ProtectedRoute;