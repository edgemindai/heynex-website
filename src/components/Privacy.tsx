import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    title: "End-to-End Encrypted",
    description:
      "Every message between your phone and Mac is encrypted. Not even we can read it.",
    iconPath:
      "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
  {
    title: "Runs Locally",
    description:
      "Your AI runs on your own machine. Documents and conversations never leave your computer.",
    iconPath:
      "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0h.008v.008h-.008v-.008zm-6.75 0h.008v.008h-.008v-.008zm-6.75 0h.008v.008h-.008v-.008z",
  },
  {
    title: "Zero Tracking",
    description:
      "No analytics, no telemetry, no usage data. We don\u2019t know what you do\u200A\u2014\u200Aby design.",
    iconPath:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

export default function Privacy() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center sm:mb-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gray-400)]">
            Privacy
          </p>
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--black)] sm:text-[34px]">
            Your data never leaves your machine
          </h2>
        </RevealOnScroll>

        {/* ── Desktop: 3-col ── */}
        <div className="mx-auto hidden max-w-[780px] gap-16 sm:grid sm:grid-cols-3">
          {features.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 0.06}>
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gray-200)]">
                  <svg
                    className="h-[18px] w-[18px] text-[var(--gray-500)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[var(--black)]">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[var(--gray-500)]">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="mx-auto flex max-w-sm flex-col gap-8 sm:hidden">
          {features.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--gray-200)]">
                  <svg
                    className="h-4 w-4 text-[var(--gray-500)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-[14px] font-semibold text-[var(--black)]">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-[var(--gray-500)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
