import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

import { Header } from '@/components/Header';
import { Footer } from '@/components/TempFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Electrical Services | Professional Electrician Solutions',
  description:
    'Professional electrical services including installations, repairs, and maintenance. Licensed and insured electricians serving your area.',
  keywords:
    'electrician, electrical services, electrical repairs, electrical installation, emergency electrician, licensed electrician',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} data-new-gr-c-s-check-loaded="14.1217.0" data-gr-ext-installed="">
        <Header />
        <main className="min-h-screen mt-36">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
