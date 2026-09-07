'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const GlobalSpaceBackground = dynamic(
  () => import('@/components/canvas/GlobalSpaceBackground'),
  { ssr: false }
);

export default function SpaceBackgroundWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black select-none"
      >
        <div className="absolute inset-0 bg-[#000000]" />
      </div>
    );
  }

  return <GlobalSpaceBackground />;
}
