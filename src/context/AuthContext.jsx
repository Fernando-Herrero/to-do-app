import { local } from "@/helpers/storage";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const savedUser = local.get("user");
    const [user, setUser] = useState(savedUser || { name: "", email: "", avatar: null });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = (updates) => {
        const newUser = { ...user, ...updates };
        setUser(newUser);
        local.save("user", newUser);
    };

    return (
        <AuthContext.Provider value={{ user, updateUser, error, setError, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
