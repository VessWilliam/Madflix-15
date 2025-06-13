'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuthStore } from '@/lib/stores/authStore';

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScroll ? 'bg-[#141414]' : 'bg-transparent'
        }`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-10">

        <div className="text-2xl md:text-3xl font-bold text-red-600 cursor-pointer">
          Madflix
        </div>


        <div className="flex items-center space-x-6 text-white">
          <Link href="/account">
            <Image
              onClick={logout}
              src="/fox.jpg"
              width={50}
              height={50}
              alt="Avatar"
              style={{ objectFit: 'cover' }}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;