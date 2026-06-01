'use client';

import { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]">
      {/* Phone outer shell */}
      <div className="relative bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl shadow-black/30">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden">
          {children}
        </div>
      </div>

      {/* Home bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-600 rounded-full" />
    </div>
  );
}
