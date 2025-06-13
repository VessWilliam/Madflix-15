'use client'

import { useAuthStore } from "@/lib/stores/authStore";
import { useRouter } from "next/navigation";

export default function useLogoutHandler() {
   const logout = useAuthStore((state) => state.logout);    
   const router = useRouter();  

   return (() =>{
    logout();
    router.push('/login');
   })
}
