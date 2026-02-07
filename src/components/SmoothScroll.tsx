"use client";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize your scroll library here (Lenis, etc.)
  }, []);

  // 4. PREVENT HYDRATION ERROR: Don't render complex scroll logic until mounted
  if (!mounted) return <>{children}</>;

  return <div id="smooth-wrapper">{children}</div>;
}