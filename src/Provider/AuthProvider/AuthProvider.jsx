import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";
import useAxios from "../../hooks/useAxios";


const AuthProvider = ({ children }) => {
    const axiosSecure = useAxios()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const userInfo = { email: currentUser.email }
            if (currentUser) {
                // todo
                axiosSecure.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.token) {
                            localStorage.setItem(res.data.token)
                        } else {
                            localStorage.removeItem('access-token')
                        }
                    })
            } else {
                // todo
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    const logOut = () => {
        return signOut(auth, currentUser => {
            setUser(currentUser)
        })
    }
    const singInGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const info = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        userUpdateProfile,
        singInGoogle

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;