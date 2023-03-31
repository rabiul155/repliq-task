import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

import { useState } from 'react';
import app from '../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("null")


    //  user created with email and password 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user using google 

    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }



    //log in user 

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out using firbase 

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Update user 

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })

        return () => {
            unsubscribe();
        }

    }, [])




    const propsInfo = { user, loading, createUser, createUserGoogle, logOut, logIn, updateUser };
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;