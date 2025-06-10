'use client'

import { useAuthStore } from '@/lib/stores/authStore'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export const AuthProtectRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    useEffect(() => {

        if (user === null) {
            router.replace('/login');
        }
    }, [user, router]);
    return <>{
        user ? children : null
    }</>
}
