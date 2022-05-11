import { useState, createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const isUserAuthenticated = () => {
        return (currentUser !== null && currentUser.token !== undefined);
    }

    const getUserId = () => {
        if (isUserAuthenticated) {
            return currentUser.admin_id;
        }
    }

    const handleLogout = () => {
        setCurrentUser(null);
    }
    
    return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, isUserAuthenticated, getUserId, handleLogout}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;