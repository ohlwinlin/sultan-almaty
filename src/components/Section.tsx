import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title) && (
          <div className="mb-12 text-center">
            {eyebrow && <span className="ornament text-sm uppercase tracking-[0.3em]">{eyebrow}</span>}
            {title && (
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-burgundy-deep text-balance">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
