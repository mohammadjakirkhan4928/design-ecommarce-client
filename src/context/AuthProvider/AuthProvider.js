import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import app from '../../Firebase/Firebase.config';





export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading,
        googleSignUp
    }






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;