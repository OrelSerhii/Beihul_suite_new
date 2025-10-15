import { ReactNode } from "react";
export function Section({title, kicker, children, className=""}:{title?:string; kicker?:string; children:ReactNode; className?:string}) {
  return (
    <section className={`py-14 ${className}`}>
      <div className="container">
        {(kicker || title) && (
          <header className="mb-8">
            {kicker && <p className="uppercase tracking-wide text-sm text-brand-muted">{kicker}</p>}
            {title && <h2 className="text-3xl font-semibold mt-1">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
