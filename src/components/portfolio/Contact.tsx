import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useSection } from "@/lib/portfolio-content";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Say a bit more").max(1000),
});

export function Contact() {
  const profile = useSection("profile");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function onChange<K extends keyof typeof values>(key: K, v: string) {
    setValues((s) => ({ ...s, [key]: v }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const { name, email, message } = parsed.data;
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your mail client…");
      setValues({ name: "", email: "", message: "" });
    }, 400);
  }

  return (
    <footer id="contact" className="text-ink">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-medium tracking-tight text-balance md:text-5xl">
              Let's build something
              <br />
              <span className="text-brand">intelligent</span>.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Open to AI PM roles, contract product work, and 0 → 1
              collaborations. Usually replies within 24h.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-ink transition-colors hover:text-brand"
              >
                <span className="text-brand">→</span>
                <span className="border-b border-brand/20 pb-0.5 group-hover:border-brand">
                  {profile.email}
                </span>
              </a>
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-brand"
                >
                  <span className="text-brand">→</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-panel lg:col-span-7 rounded-2xl p-6 md:p-8"
            noValidate
          >
            <div className="space-y-5 font-sans text-sm">
              <Field
                label="Name"
                error={errors.name}
                input={
                  <input
                    type="text"
                    value={values.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    maxLength={100}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-ink outline-none placeholder:text-muted/60 focus:border-brand focus:ring-1 focus:ring-brand/20"
                  />
                }
              />
              <Field
                label="Email"
                error={errors.email}
                input={
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    maxLength={255}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-ink outline-none placeholder:text-muted/60 focus:border-brand focus:ring-1 focus:ring-brand/20"
                  />
                }
              />
              <Field
                label="Message"
                error={errors.message}
                input={
                  <textarea
                    value={values.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell me about what you're building…"
                    className="w-full resize-none rounded-lg border border-border bg-surface px-3 py-2.5 text-ink outline-none placeholder:text-muted/60 focus:border-brand focus:ring-1 focus:ring-brand/20"
                  />
                }
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted">
                  {values.message.length}/1000
                </span>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-cta-ink transition-colors hover:bg-brand/80 disabled:opacity-50"
                >
                  <Send className="size-4" />
                  {sending ? "Sending…" : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center gap-2 text-xs font-medium text-ink">
        {label}
        {error && (
          <span className="text-[11px] text-[#ff5f57]">{error}</span>
        )}
      </div>
      {input}
    </label>
  );
}
