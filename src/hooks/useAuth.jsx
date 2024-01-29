
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const useAuth = () => {
    const authContext = useContext(AuthContext)
    return authContext
};

export default useAuth;