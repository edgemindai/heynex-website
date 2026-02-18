import RevealOnScroll from "./RevealOnScroll";

const TESTFLIGHT_URL = "";
const DMG_URL = "";
const GITHUB_RELEASES_URL =
  "https://github.com/Deep-Alpha-X/alphax-desktop-app/releases";
const QR_API = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=";

function DownloadCard({
  title,
  subtitle,
  description,
  iconPath,
  children,
}: {
  title: string;
  subtitle: string;
  description: string;
  iconPath: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="group rounded-2xl border border-[var(--gray-200)] bg-white p-6 transition-all duration-300 sm:p-8 hover:border-[var(--gray-300)] hover:shadow-lg hover:-translate-y-[2px]"
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[var(--accent-subtle)]">
          <svg
            className="h-[18px] w-[18px] text-[var(--accent)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-[var(--black)]">
            {title}
          </h3>
          <p className="text-[12px] text-[var(--gray-400)]">{subtitle}</p>
        </div>
      </div>

      <p className="mb-6 text-[14px] leading-relaxed text-[var(--gray-500)]">
        {description}
      </p>

      {children}
    </div>
  );
}

export default function Downloads() {
  return (
    <section id="downloads" className="bg-[#f3f3f1] py-20 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <RevealOnScroll className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--accent)]">
            Get Started
          </p>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[var(--black)] sm:text-[36px]">
            Download the apps
          </h2>
        </RevealOnScroll>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          {/* Mobile Card */}
          <RevealOnScroll delay={0.06}>
            <DownloadCard
              title="Mobile App"
              subtitle="iOS · TestFlight"
              description="Control your AI agent from anywhere. Scan the QR code or join the TestFlight beta."
              iconPath="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            >
              <div className="mb-6 flex justify-center">
                {TESTFLIGHT_URL ? (
                  <img
                    src={`${QR_API}${encodeURIComponent(TESTFLIGHT_URL)}`}
                    alt="Download QR Code"
                    width={140}
                    height={140}
                    className="rounded-xl"
                  />
                ) : (
                  <div className="flex h-[120px] w-[120px] items-center justify-center rounded-xl border border-dashed border-[var(--gray-200)] text-[11px] text-[var(--gray-400)]">
                    QR coming soon
                  </div>
                )}
              </div>
              <a
                href={TESTFLIGHT_URL || "#"}
                target={TESTFLIGHT_URL ? "_blank" : undefined}
                rel={TESTFLIGHT_URL ? "noopener noreferrer" : undefined}
                className={`flex h-11 w-full items-center justify-center gap-2 rounded-[10px] text-[13px] font-medium transition-all duration-200 ${
                  TESTFLIGHT_URL
                    ? "bg-[var(--black)] text-white hover:bg-[var(--gray-900)] hover:shadow-md"
                    : "cursor-default bg-[var(--gray-100)] text-[var(--gray-400)]"
                }`}
              >
                <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {TESTFLIGHT_URL ? "Join TestFlight" : "Coming Soon"}
              </a>
            </DownloadCard>
          </RevealOnScroll>

          {/* Desktop Card */}
          <RevealOnScroll delay={0.12}>
            <DownloadCard
              title="Desktop App"
              subtitle="macOS"
              description="Install the agent on your Mac. It runs silently in the background, ready when you need it."
              iconPath="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-[var(--gray-50)] transition-colors duration-300 group-hover:bg-[var(--gray-100)]">
                  <svg className="h-10 w-10 text-[var(--gray-300)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
              </div>
              <a
                href={DMG_URL || GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--black)] text-[13px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-md"
                style={{ transitionTimingFunction: "var(--ease)" }}
              >
                <svg className="h-[14px] w-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {DMG_URL ? "Download for macOS" : "View Releases"}
              </a>
            </DownloadCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
