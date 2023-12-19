import React, { createContext, useState,useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
            {children}
        </AuthContext.Provider>
    );
};