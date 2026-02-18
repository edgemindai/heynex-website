import RevealOnScroll from "./RevealOnScroll";

export default function Tagline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1080px] px-6 text-center lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-8 h-px w-10 bg-[var(--gray-200)]" />
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--black)] sm:text-[34px]">
            Your computer. Your agent.
            <br className="hidden sm:block" /> Your rules.
          </h2>
          <p className="mt-4 max-w-sm mx-auto text-[14px] leading-[1.7] text-[var(--gray-500)] sm:text-[15px]">
            Start using HeyNex today&thinsp;&mdash;&thinsp;it&apos;s free and
            open source.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          {/* Desktop CTA */}
          <a
            href="#how-it-works"
            className="mt-8 hidden h-[42px] items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--black)] px-5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[var(--gray-900)] hover:shadow-sm sm:inline-flex"
          >
            Get Started
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          {/* Mobile CTA — full width, taller touch target */}
          <a
            href="#how-it-works"
            className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--black)] text-[14px] font-medium text-white sm:hidden"
          >
            Get Started
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
