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
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-gradient">{index}</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {subtitle}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
