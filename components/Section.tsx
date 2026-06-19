import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id?: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-28 scroll-mt-24">
      <Reveal>
        <div className="flex items-baseline gap-4 border-b border-line pb-5">
          <span className="mono-label text-accent">{index}</span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
