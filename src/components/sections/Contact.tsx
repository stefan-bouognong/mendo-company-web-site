"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm]     = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const inputCls =
    "w-full bg-primary border border-white/8 rounded-xl px-4 py-3 text-light text-sm " +
    "placeholder:text-muted/50 focus:outline-none focus:border-brand/50 focus:bg-primary-700 " +
    "transition-all duration-200";

  const INFOS = [
    { icon: MapPin, label: "Adresse",  value: "Yaoundé – Cameroun",         href: undefined },
    { icon: Mail,   label: "Email",    value: "contact@mendocompany.com",    href: "mailto:contact@mendocompany.com" },
    { icon: Globe,  label: "Site Web", value: "www.mendocompany.com",        href: "https://www.mendocompany.com" },
  ];

  return (
    <section id="contact" className="py-28 bg-primary-800 relative overflow-hidden">

      {/* Lueurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <SectionTitle
          eyebrow="Contactez-nous"
          title="Entrons en Contact"
          subtitle="Collaboration, intégration de solutions, partenariat — notre équipe vous répond sous 48h."
          light
        />

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Infos ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {INFOS.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 bg-primary border border-white/5 rounded-xl p-5 hover:border-brand/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-brand/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-brand" />
                </div>
                <div>
                  <p className="text-muted text-xs mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-light text-sm font-medium hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-light text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Encart réponse rapide */}
            <div className="bg-brand/10 border border-brand/20 rounded-xl p-6 mt-2">
              <p className="text-brand text-sm font-heading font-semibold mb-2">
                ⚡ Réponse rapide
              </p>
              <p className="text-muted text-xs leading-relaxed">
                Notre équipe répond dans les 48h ouvrées à toute demande
                de collaboration ou de démonstration produit.
              </p>
            </div>
          </motion.div>

          {/* ── Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="bg-accent/10 border border-accent/25 rounded-2xl p-14 text-center h-full flex flex-col items-center justify-center gap-4">
                <CheckCircle2 size={52} className="text-accent" />
                <h3 className="text-light font-heading font-bold text-xl">Message envoyé !</h3>
                <p className="text-muted text-sm">Notre équipe vous contactera dans les 48h ouvrées.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-primary border border-white/5 rounded-2xl p-8 flex flex-col gap-5"
              >
                {/* Nom / Entreprise */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-muted text-xs mb-2 block">Nom *</label>
                    <input
                      required
                      className={inputCls}
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={update("name")}
                    />
                  </div>
                  <div>
                    <label className="text-muted text-xs mb-2 block">Entreprise</label>
                    <input
                      className={inputCls}
                      placeholder="Votre entreprise"
                      value={form.company}
                      onChange={update("company")}
                    />
                  </div>
                </div>

                {/* Email / Téléphone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-muted text-xs mb-2 block">Email *</label>
                    <input
                      required
                      type="email"
                      className={inputCls}
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={update("email")}
                    />
                  </div>
                  <div>
                    <label className="text-muted text-xs mb-2 block">Téléphone</label>
                    <input
                      type="tel"
                      className={inputCls}
                      placeholder="+237 6XX XXX XXX"
                      value={form.phone}
                      onChange={update("phone")}
                    />
                  </div>
                </div>

                {/* Objet */}
                <div>
                  <label className="text-muted text-xs mb-2 block">Objet *</label>
                  <input
                    required
                    className={inputCls}
                    placeholder="Objet de votre message"
                    value={form.subject}
                    onChange={update("subject")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-muted text-xs mb-2 block">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className={inputCls + " resize-none"}
                    placeholder="Décrivez votre projet ou demande..."
                    value={form.message}
                    onChange={update("message")}
                  />
                </div>

                {/* Erreur */}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Une erreur est survenue. Réessayez ou écrivez-nous directement.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-brand text-white font-heading font-semibold py-3.5 rounded-xl hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}