'use client';

import Squares from '@/components/Squares';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverFillColor="#222222"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <h1 className="text-8xl font-bold text-white">404</h1>
        <p className="text-xl text-gray-400 mt-4">Page not found</p>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors pointer-events-auto"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}