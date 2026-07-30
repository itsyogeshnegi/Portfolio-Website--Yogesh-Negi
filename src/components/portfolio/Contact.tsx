import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./About";

const SERVICE_ID = "service_xpfbree";
const TEMPLATE_ID = "template_u5ka9m1";
const PUBLIC_KEY = "SZHg1zXz066Q_I7Z4";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(formRef.current);
    const templateParams = {
      user_name: (formData.get("name") as string) || "",
      user_email: (formData.get("email") as string) || "",
      user_number: (formData.get("number") as string) || "N/A",
      user_subject: (formData.get("subject") as string) || "",
      user_message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "EmailJS send failed");
      }

      setSent(true);
      if (formRef.current) formRef.current.reset();
    } catch (err: any) {
      console.error("EmailJS send error:", err);
      setErrorMsg("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader tag="06 / contact" title={<>Have an idea? <span className="text-gradient">Let's build it.</span></>} />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Left panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl glass-strong p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-success">Available for work</p>
              </div>
              <p className="mt-4 text-lg leading-relaxed">
                Currently accepting freelance projects and full-time roles for
                <span className="text-foreground"> Q3–Q4</span>. I typically reply within{" "}
                <span className="text-foreground">24 hours</span>.
              </p>
            </div>

            <a href="mailto:yyogesh.singh.negi@gmail.com"
               className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:border-primary/40">
              <Mail className="h-5 w-5 text-cyan" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm">yyogesh.singh.negi@gmail.com</p>
              </div>
            </a>

            <a href="tel:8745073655"
               className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:border-primary/40">
              <span className="font-mono text-cyan text-sm">📞</span>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm">+91 8745073655</p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://www.linkedin.com/in/yogesh-negi-7b8568302" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 rounded-2xl glass p-4 transition hover:border-primary/40">
                <Linkedin className="h-4 w-4 text-cyan" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 rounded-2xl glass p-4 transition hover:border-primary/40">
                <Github className="h-4 w-4 text-cyan" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>

            <div className="flex items-center gap-3 rounded-2xl glass p-4">
              <MapPin className="h-4 w-4 text-cyan" />
              <p className="text-sm text-muted-foreground">Delhi, India · Remote-friendly</p>
            </div>
          </div>

          {/* Right form */}
          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl glass-strong p-6 lg:col-span-3 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingInput label="Your name" name="name" required />
              <FloatingInput label="Email address" name="email" type="email" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingInput label="Phone number (optional)" name="number" type="tel" />
              <FloatingInput label="Subject" name="subject" required />
            </div>

            <div>
              <FloatingTextarea label="Tell me about your project" name="message" required />
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 text-xs text-red-400 border border-red-500/20 bg-red-500/10 p-3 rounded-xl">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {sent && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 p-3 rounded-xl">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Thank you! Your message has been sent directly to Yogesh's inbox.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary via-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.72_0.22_255/0.7)] transition hover:shadow-[0_0_50px_-4px_oklch(0.68_0.24_305/0.7)] disabled:opacity-70"
            >
              {loading ? "Sending email…" : (<>Send message <Send className="h-4 w-4 transition group-hover:translate-x-0.5" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="relative block">
      <input
        required={required}
        name={name}
        type={type}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-5 text-sm text-foreground outline-none transition placeholder-transparent focus:border-primary/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/20"
      />
      <span className="pointer-events-none absolute left-4 top-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-cyan">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="relative block">
      <textarea
        required={required}
        name={name}
        rows={5}
        placeholder=" "
        className="peer w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-5 text-sm text-foreground outline-none transition placeholder-transparent focus:border-primary/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-primary/20"
      />
      <span className="pointer-events-none absolute left-4 top-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-cyan">
        {label}
      </span>
    </label>
  );
}
