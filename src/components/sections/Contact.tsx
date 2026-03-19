import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Section from "../common/Section";
import Reveal from "../common/Reveal";
import Button from "../common/Button";

const MY_EMAIL = "your-email@example.com";

function SocialLink({
  label,
  href,
  icon
}: {
  label: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/30 p-4 transition hover:border-indigo-400/40 hover:bg-slate-900/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/20 text-indigo-200/90 transition group-hover:bg-indigo-500/25">
        {icon}
      </span>
      <span className="text-sm font-semibold tracking-wide">{label}</span>
      <span className="ml-auto text-indigo-200/70">→</span>
    </a>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio message from ${name || "someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;
    const params = new URLSearchParams({
      subject,
      body
    });
    return `mailto:${MY_EMAIL}?${params.toString()}`;
  }, [email, message, name]);

  const canSend = name.trim().length > 1 && email.includes("@") && message.trim().length > 3;

  return (
    <div className="py-16 sm:py-20">
      <Section title="Contact" eyebrow="LET'S TALK">
        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-start">
          <Reveal delayMs={0}>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-6">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!canSend || sending) return;
                  setSending(true);
                  try {
                    // Opens the user's email client via a mailto link.
                    window.location.href = mailtoHref;
                  } finally {
                    setSending(false);
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-semibold text-slate-200/90">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-2xl bg-slate-950/40 px-4 py-3 text-sm ring-1 ring-slate-800/70 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200/90">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl bg-slate-950/40 px-4 py-3 text-sm ring-1 ring-slate-800/70 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200/90">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl bg-slate-950/40 px-4 py-3 text-sm ring-1 ring-slate-800/70 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                    disabled={!canSend || sending}
                  >
                    {sending ? "Opening..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-slate-400/80">
                    Submitting opens your email client (no backend needed).
                  </p>
                </div>
              </form>
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delayMs={80}>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-indigo-200/90">
                  Social
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  Prefer direct links? Reach out via LinkedIn or GitHub.
                </p>
                <div className="mt-5 grid gap-3">
                  <SocialLink
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/your-linkedin-handle"
                    icon={
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V23h-4V8.5Zm8 0h3.84v1.9h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.93-2.86 3.94V23h-4V8.5Z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    label="GitHub"
                    href="https://github.com/your-github-handle"
                    icon={
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.59 2 12.26c0 4.53 2.865 8.37 6.839 9.73.5.095.682-.224.682-.5 0-.245-.009-.892-.014-1.752-2.782.616-3.369-1.37-3.369-1.37-.454-1.175-1.11-1.487-1.11-1.487-.907-.64.069-.627.069-.627 1.003.072 1.531 1.058 1.531 1.058.892 1.563 2.341 1.113 2.91.851.091-.662.35-1.113.636-1.368-2.221-.263-4.555-1.145-4.555-5.092 0-1.126.39-2.045 1.029-2.764-.103-.263-.446-1.326.098-2.762 0 0 .84-.276 2.75 1.053A9.33 9.33 0 0 1 12 6.844a9.3 9.3 0 0 1 2.5.347c1.909-1.329 2.747-1.053 2.747-1.053.545 1.436.202 2.499.099 2.762.64.719 1.028 1.638 1.028 2.764 0 3.957-2.338 4.825-4.566 5.084.359.316.679.938.679 1.89 0 1.364-.012 2.463-.012 2.802 0 .278.18.599.688.498 3.967-1.363 6.826-5.197 6.826-9.724C22 6.59 17.523 2 12 2Z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-indigo-500/10 via-slate-900/30 to-cyan-400/10 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-indigo-200/90">
                  Quick Note
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  I respond quickly to messages related to AI/ML projects and
                  full stack development.
                </p>
                <p className="mt-4 text-xs text-slate-400/80">
                  Email: <span className="font-semibold text-slate-200/90">{MY_EMAIL}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}

