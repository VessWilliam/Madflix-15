import { AuthProtectRoute } from "@/components/Auth/AuthProtectRoute";


export default function HeroPage() {
    return (
        <div>
            <AuthProtectRoute>
                This is the Hero Page
            </AuthProtectRoute>
        </div>
    );
}