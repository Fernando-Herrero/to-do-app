import { local } from "@/helpers/storage";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const savedUser = local.get("user");
    const [user, setUser] = useState(savedUser || { name: "", avatar: null });

    const updateUser = (updates) => {
        const newUser = { ...user, ...updates };
        setUser(newUser);
        local.save("user", newUser);
    };

    return <AuthContext.Provider value={{ user, updateUser }}>{children}</AuthContext.Provider>;
};
