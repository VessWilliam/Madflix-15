import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import RecoilProvider from "@/app/provider/RecoilProvider"; // adjust path as needed

export const metadata: Metadata = {
  title: 'MadFlix',
  description: 'Netflix Clone',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}