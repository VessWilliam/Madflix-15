'use client'
import { useAuthStore } from '@/lib/stores/authStore'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export const RedirectIfAuth = () => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();


    useEffect(() => {
        if (user) router.replace('/')
    }, [user, router]);


    return null;


}
