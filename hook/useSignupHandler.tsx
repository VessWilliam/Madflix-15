'use client'

import { useAuthStore } from "@/lib/stores/authStore"
import { useRouter } from "next/navigation"


export function useSignupHandler() {
  const signUp = useAuthStore((state) => state.signUp);
  const error = useAuthStore((state) => state.error);
  const router = useRouter();

  const handleSignup = async (email: string, password: string) => {
    const success = await signUp(email, password);
      
    if (success) {
      router.push("/heropage");
    }
  };

  return { handleSignup, error };
}