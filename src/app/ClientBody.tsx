"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize AOS and remove any extension-added classes during hydration
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // Refresh AOS when window is resized
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
