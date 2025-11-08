import { AvatarGrid } from "@/components/AvatarGrid";
import { useState } from "react";

export const LoginPage = () => {
    const [name, setName] = useState("");

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 p-2 bg-gray-800">
            <div className="text-center">
                <h1 className="title">COSAS QUE HARE...</h1>
                <h2 className="title">...O QUIZAS NO</h2>
            </div>

            <label className="flex flex-col gap-2 text-center text-gray-300">
                <span className="text-login">¿Cuál es tu nombre?</span>
                <input
                    className="border border-gray-600 rounded p-1"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Escribe tu nombre"
                />
            </label>

            <AvatarGrid />
        </div>
    );
};
