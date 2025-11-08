import { local } from "@/helpers/storage";
import { createContext, useState } from "react";

export const AvatarContext = createContext(null);

export const AvatarProvider = ({ children }) => {
    const avatar = local.get("avatar");
    const [selectedAvatar, setSelectedAvatar] = useState(avatar || null);

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};
