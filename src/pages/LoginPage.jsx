import { AvatarGrid } from "@/components/AvatarGrid";
import { DarkTheme } from "@/components/DarkTheme";
import { FormField } from "@/components/FormFiled";

export const LoginPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 p-2 bg-main">
            <DarkTheme />

            <div className="text-center">
                <h1 className="title">COSAS QUE HARE...</h1>
                <h2 className="title">...O QUIZAS NO</h2>
            </div>

            <FormField />

            <AvatarGrid />
        </div>
    );
};
