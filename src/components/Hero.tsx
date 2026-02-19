"use client";

import Image from "next/image";
import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[85svh] flex-col items-center justify-center px-6"
    >
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Logo mark */}
        <div
          className="mb-7 opacity-0 animate-enter sm:mb-8"
          style={{ animationDelay: "0s" }}
        >
          <Image
            src="/assets/logo-icon-256.png"
            alt="HeyNex"
            width={256}
            height={256}
            className="h-28 w-28 sm:h-32 sm:w-32"
            priority
          />
        </div>

        {/* Headline — semibold for elegance, not bold */}
        <h1
          className="mb-5 text-[34px] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--black)] opacity-0 animate-enter sm:mb-6 sm:text-[46px] lg:text-[54px]"
          style={{ animationDelay: "0.06s" }}
        >
          Turn Your Computer
          <br />
          Into a <TypewriterEffect />
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 max-w-[400px] text-[15px] leading-[1.7] text-[var(--gray-500)] opacity-0 animate-enter sm:mb-10 sm:max-w-md sm:text-[16px]"
          style={{ animationDelay: "0.12s" }}
        >
          Your Mac becomes a private AI agent you control from your phone.
          Everything runs locally. Everything is encrypted.
        </p>

        {/* CTA */}
        <div
          className="opacity-0 animate-enter"
          style={{ animationDelay: "0.18s" }}
        >
          <a
            href="https://github.com/edgemindai/heynex-website/releases/download/v2026.2.1/AlphaX-2026.2.1.dmg"
            className="flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--black)] px-6 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-md sm:h-[42px] sm:rounded-[var(--radius-sm)]"
            style={{ transitionTimingFunction: "var(--ease)" }}
          >
            Download for Mac
          </a>
        </div>

        {/* Trust strip — thin separator, then badges */}
        <div
          className="mt-14 opacity-0 animate-enter sm:mt-16"
          style={{ animationDelay: "0.28s" }}
        >
          <div className="mx-auto mb-5 h-px w-10 bg-[var(--gray-200)]" />
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            {[
              {
                label: "End-to-end encrypted",
                d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
              },
              {
                label: "Runs on your machine",
                d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
              },
              {
                label: "Your data stays yours",
                d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 text-[12px] text-[var(--gray-400)]"
              >
                <svg
                  className="h-[14px] w-[14px] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.d}
                  />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
