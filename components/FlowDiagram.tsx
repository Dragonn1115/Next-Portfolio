import { ChevronRight } from "lucide-react";

// Abstract flow diagram — renders a sequence of labelled nodes connected by
// arrows. No company screenshots or internal detail; just the shape of the flow.
export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-line bg-ink/40 p-5">
      <h4 className="mono-label text-accent">Flow</h4>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-center text-xs font-medium text-fg">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight
                size={16}
                className="shrink-0 text-accent/60"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
