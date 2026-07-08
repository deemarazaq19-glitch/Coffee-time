import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message can't be empty").max(2000),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const inputClass =
    "w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition focus:border-accent focus:bg-primary-foreground/10";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    const parsed = contactSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");

    const { error } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);

    if (error) {
      console.error("Contact submit failed", error);
      toast.error("We couldn't send your message. Please try again.");
      setStatus("idle");
      return;
    }

    toast.success("Message sent — we'll be in touch soon.");
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-6 text-primary-foreground">
        <CheckCircle2 className="h-6 w-6 text-accent" />
        <div>
          <p className="font-serif text-xl">Thanks for reaching out.</p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            We'll get back to you within a business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent/80"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">Name</label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={100}
            required
            className={inputClass}
          />
          {errors.name ? <p className="mt-1 text-xs text-accent">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">Email</label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            maxLength={255}
            required
            className={inputClass}
          />
          {errors.email ? <p className="mt-1 text-xs text-accent">{errors.email}</p> : null}
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">Message</label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={3}
          maxLength={2000}
          required
          className={`${inputClass} resize-none`}
        />
        {errors.message ? <p className="mt-1 text-xs text-accent">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-cream hover:text-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
