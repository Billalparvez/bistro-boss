import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;