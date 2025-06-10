'use client'

import { useAuthStore } from '@/lib/stores/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { LoginForm } from '@/components/login-form'
import Image from 'next/image'

export default function HomePage() {
  const user = useAuthStore((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.replace('/heropage')
    }
  }, [user, router])

  return (
    <>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="Background"
      />

      <div className="flex min-h-svh items-center justify-center">
        <div
          className="text-3xl text-red-600 font-bold
            absolute object-contain left-4 top-4 cursor-pointer md:left-10 md:top-6"
        >
          Madflix
        </div>

        <LoginForm />
      </div>
    </>
  )
}