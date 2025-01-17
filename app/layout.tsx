import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Footer  from '@/components/Footer';
import { Header } from '@/components/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Electrical Services | Professional Electrician Solutions',
  description: 'Professional electrical services including installations, repairs, and maintenance. Licensed and insured electricians serving your area.',
  keywords: 'electrician, electrical services, electrical repairs, electrical installation, emergency electrician, licensed electrician',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="min-h-screen mt-36">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}