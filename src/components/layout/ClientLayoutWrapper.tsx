'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// FIX: Dynamically import components with SSR turned off inside a Client Component.
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

// This wrapper component will render the Header, children, and Footer on the client side.
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
    </>
  );
}