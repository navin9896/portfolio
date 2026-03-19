import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonElementProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorElementProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function Button(props: ButtonElementProps): JSX.Element;
export default function Button(props: AnchorElementProps): JSX.Element;
export default function Button(props: ButtonElementProps | AnchorElementProps) {
  const { variant = "primary", className, children, href, ...rest } = props;

  const styles =
    variant === "primary"
      ? "bg-indigo-500/90 text-white hover:bg-indigo-500 transition-colors shadow-glow"
      : "bg-slate-800/70 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-800 transition-colors";

  const shared =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transform-gpu";

  if (href) {
    return (
      <a
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        className={cn(shared, styles, "active:scale-[0.99]", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={cn(shared, styles, "active:scale-[0.99]", className)}
    >
      {children}
    </button>
  );
}

