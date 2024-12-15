import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../firebase/firebase.init'; // Correct for named export

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading, setLoading] = useState(true);

const createUser = (email, password ) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
    onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    } );
    
},[])

    const authInfo ={
        user,
        loading,
        createUser
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;