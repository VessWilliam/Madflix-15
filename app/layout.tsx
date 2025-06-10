import './globals.css';
import type { Metadata } from 'next';
import { AuthInit } from '@/components/Auth/AuthInit';


export const metadata: Metadata = {
  title: 'MadFlix',
  description: 'Netflix Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthInit/>
        {children}
      </body>
    </html>
  );
}