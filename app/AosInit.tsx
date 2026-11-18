// src/app/AosInit.tsx
"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    // Dynamically import AOS to prevent "window is not defined" SSR errors
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: false, // Scroll kartana parat parat animation disel
        easing: 'ease-out-cubic',
      });
    });
  }, []);

  return null;
}