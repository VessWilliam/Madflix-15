import { AuthProtectRoute } from "@/components/Auth/AuthProtectRoute";
import Header from "@/components/Header/Header";


export default function HeroPage() {
    return (
        <div>
            <AuthProtectRoute>
            <Header/>

            </AuthProtectRoute>
        </div>
    );
}