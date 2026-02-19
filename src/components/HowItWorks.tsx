"use client";

import RevealOnScroll from "./RevealOnScroll";

const GITHUB_RELEASES_URL =
  "https://github.com/Deep-Alpha-X/alphax-desktop-app/releases";
const DMG_URL = "https://github.com/edgemindai/heynex-website/releases/download/v2026.2.1/AlphaX-2026.2.1.dmg";
const TESTFLIGHT_URL = "";
const QR_API =
  "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=";

function getDownloadUrl() {
  return DMG_URL || GITHUB_RELEASES_URL;
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-[60px] pt-6 pb-16 sm:pt-8 sm:pb-24">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <RevealOnScroll className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Get Started
          </p>
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--black)] sm:text-[34px]">
            Two steps. That&apos;s it.
          </h2>
        </RevealOnScroll>

        {/* ── Desktop: side-by-side cards with connector ── */}
        <div className="mx-auto hidden max-w-[640px] items-start gap-6 md:flex">
          {/* Step 1 */}
          <RevealOnScroll delay={0.04} className="flex-1">
            <div className="group rounded-[var(--radius-lg)] border border-[var(--gray-200)] bg-white p-7 shadow-card transition-all duration-300 hover:border-[var(--gray-300)] hover:shadow-card-hover hover:-translate-y-px">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-subtle)]">
                  <svg
                    className="h-[18px] w-[18px] text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--gray-400)]">
                  Step 1
                </span>
              </div>
              <h3 className="mb-1.5 text-[16px] font-semibold text-[var(--black)]">
                Install on your Mac
              </h3>
              <p className="mb-5 text-[13px] leading-[1.7] text-[var(--gray-500)]">
                Download the desktop app. It runs silently in the
                background&thinsp;&mdash;&thinsp;no setup needed.
              </p>
              <a
                href={getDownloadUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--black)] px-4 text-[12px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-sm"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {DMG_URL ? "Download for macOS" : "View Releases"}
              </a>
            </div>
          </RevealOnScroll>

          {/* Connector arrow — desktop only */}
          <RevealOnScroll delay={0.1} className="mt-14 flex-shrink-0">
            <svg
              className="h-5 w-8 text-[var(--gray-300)]"
              fill="none"
              viewBox="0 0 32 20"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 10h24m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </RevealOnScroll>

          {/* Step 2 */}
          <RevealOnScroll delay={0.16} className="flex-1">
            <div className="group rounded-[var(--radius-lg)] border border-[var(--gray-200)] bg-white p-7 shadow-card transition-all duration-300 hover:border-[var(--gray-300)] hover:shadow-card-hover hover:-translate-y-px">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-subtle)]">
                  <svg
                    className="h-[18px] w-[18px] text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--gray-400)]">
                  Step 2
                </span>
              </div>
              <h3 className="mb-1.5 text-[16px] font-semibold text-[var(--black)]">
                Connect from your phone
              </h3>
              <p className="mb-5 text-[13px] leading-[1.7] text-[var(--gray-500)]">
                Open the mobile app and pair with your Mac. You&apos;re ready to
                go.
              </p>
              {TESTFLIGHT_URL ? (
                <div className="flex items-center gap-3">
                  <img
                    src={`${QR_API}${encodeURIComponent(TESTFLIGHT_URL)}`}
                    alt="Scan to download"
                    width={56}
                    height={56}
                    className="rounded-[var(--radius-sm)]"
                  />
                  <a
                    href={TESTFLIGHT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--black)] px-4 text-[12px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-sm"
                  >
                    Join TestFlight
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-dashed border-[var(--gray-200)]">
                    <svg
                      className="h-4 w-4 text-[var(--gray-300)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                    </svg>
                  </div>
                  <span className="text-[13px] text-[var(--gray-400)]">
                    iOS app coming soon
                  </span>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Mobile: stacked cards with vertical connector ── */}
        <div className="mx-auto max-w-sm md:hidden">
          <RevealOnScroll delay={0.04}>
            <div className="rounded-[var(--radius-lg)] border border-[var(--gray-200)] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--accent-subtle)]">
                  <svg
                    className="h-4 w-4 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--gray-400)]">
                    Step 1
                  </span>
                  <h3 className="text-[15px] font-semibold leading-tight text-[var(--black)]">
                    Install on your Mac
                  </h3>
                </div>
              </div>
              <p className="mb-4 text-[13px] leading-[1.7] text-[var(--gray-500)]">
                Download the desktop app. It runs silently in the background.
              </p>
              <a
                href={getDownloadUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--black)] text-[13px] font-medium text-white"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {DMG_URL ? "Download for macOS" : "View Releases"}
              </a>
            </div>
          </RevealOnScroll>

          {/* Vertical connector */}
          <div className="flex justify-center py-2">
            <div className="flex h-8 flex-col items-center justify-center">
              <svg
                className="h-8 w-4 text-[var(--gray-300)]"
                fill="none"
                viewBox="0 0 16 32"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 2v24m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
          </div>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-[var(--gray-200)] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--accent-subtle)]">
                  <svg
                    className="h-4 w-4 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--gray-400)]">
                    Step 2
                  </span>
                  <h3 className="text-[15px] font-semibold leading-tight text-[var(--black)]">
                    Connect from your phone
                  </h3>
                </div>
              </div>
              <p className="text-[13px] leading-[1.7] text-[var(--gray-500)]">
                {TESTFLIGHT_URL
                  ? "Open the mobile app and pair with your Mac."
                  : "iOS app coming soon via TestFlight."}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
