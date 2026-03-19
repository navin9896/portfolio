import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  title,
  eyebrow,
  children
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-widest text-indigo-300/80">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </Container>
  );
}

