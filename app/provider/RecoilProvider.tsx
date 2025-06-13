'use client'

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { AuthInit } from '@/components/Auth/AuthInit';

export default function RecoilProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <AuthInit />
      {children}
    </RecoilRoot>
  );
}