"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollReset = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollReset;
