'use client'

import { useAuthStore } from "@/lib/stores/authStore"
import { useRouter } from "next/navigation"



export function useLoginHandler() {
    const signIn = useAuthStore((state) => state.signIn);
    const error = useAuthStore((state) => state.error);
    const router = useRouter()


    const handleLogin = async (email: string, password: string) => {
        await signIn(email, password);
        if (!error) router.push('/heropage');
    }


    return { handleLogin, error }
}

