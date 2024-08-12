import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider1 = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
};

export { AuthContext, useAuthContext, AuthContextProvider1 };
