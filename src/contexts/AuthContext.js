import { createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const authenticateUser = (admin) => {
        localStorage.setItem('auth_token', admin.token);
        localStorage.setItem('user_id', admin.admin_id);
        localStorage.setItem('user_email', admin.admin_email);
    }

    const isUserAuthenticated = () => {
        return (localStorage.getItem('user_id') !== null);
    }

    const isUserHome = () => {
        return (localStorage.getItem('token') !== null);
    }

    const getUserId = () => {
        return localStorage.getItem('user_id');
    }

    const getUserEmail = () => {
        return localStorage.getItem('user_email');
    }

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_email');
    }
    
    return (
    <AuthContext.Provider value={{authenticateUser, isUserAuthenticated, isUserHome, getUserId, getUserEmail, handleLogout}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;