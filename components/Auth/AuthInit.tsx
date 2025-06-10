'use client'
import { useAuthStore } from "@/lib/stores/authStore";
import { useEffect } from 'react'

export const AuthInit = () => {
    const checkAuth = useAuthStore((state) => state.checkAuth);

    useEffect(() => {
        checkAuth()
    }, [checkAuth]);

    return null;
}
