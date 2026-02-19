"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-nav backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      <nav className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Image
            src="/assets/logo-horizontal-tm.png"
            alt="HeyNex"
            width={1021}
            height={271}
            className="h-[28px] w-auto sm:h-[30px]"
            unoptimized
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 sm:flex">
          <a
            href="#how-it-works"
            className="nav-link text-[13px] font-medium text-[var(--gray-500)] transition-colors duration-200 hover:text-[var(--black)]"
          >
            How It Works
          </a>
          <a
            href="https://github.com/Deep-Alpha-X"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[13px] font-medium text-[var(--gray-500)] transition-colors duration-200 hover:text-[var(--black)]"
          >
            GitHub
          </a>
          <a
            href="#how-it-works"
            className="rounded-[var(--radius-sm)] bg-[var(--black)] px-4 py-[7px] text-[13px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile */}
        <a
          href="#how-it-works"
          className="rounded-[var(--radius-sm)] bg-[var(--black)] px-3.5 py-[6px] text-[12px] font-medium text-white sm:hidden"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
