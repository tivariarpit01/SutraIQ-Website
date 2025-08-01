'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ALL client-side components with SSR turned off
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });
const Toaster = dynamic(() => import('@/components/ui/toaster').then((mod) => mod.Toaster), { ssr: false });
const WhatsAppSupport = dynamic(() => import('@/components/WhatsAppSupport'), { ssr: false });

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
      <WhatsAppSupport />
    </>
  );
}