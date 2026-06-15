"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/layout/SectionTitle";

export default function Contact() {
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm]       = useState({ name:"", company:"", email:"", phone:"", subject:"", message:"" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else        setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full bg-primary-800 border border-white/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-muted focus:outline-none focus:border-accent/60 focus:bg-primary-700 transition-all duration-200";

  return (
    <section id="contact" className="py-28 bg-primary">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Contactez-nous"
          title="Entrons en Contact"
          subtitle="Collaboration, intégration de solutions, partenariat — notre équipe vous répond."
          light
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: MapPin, label: "Adresse",  value: "Yaoundé – Cameroun" },
              { icon: Mail,   label: "Email",    value: "contact@mendocompany.com" },
              { icon: Globe,  label: "Site Web", value: "www.mendocompany.com" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-primary-800 border border-white/5 rounded-xl p-5">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-muted text-xs mb-1">{label}</p>
                  <p className="text-light text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-4">
              <p className="text-accent text-sm font-heading font-semibold mb-1">Réponse rapide</p>
              <p className="text-muted text-xs leading-relaxed">
                Notre équipe répond dans les 48h ouvrées à toute demande de collaboration ou de démonstration.
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-12 text-center">
                <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-light font-heading font-bold text-xl mb-2">Message envoyé !</h3>
                <p className="text-muted">Notre équipe vous contactera dans les 48h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-primary-800 border border-white/5 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-muted text-xs mb-2 block">Nom *</label>
                    <input required className={inputCls} placeholder="Votre nom" value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-muted text-xs mb-2 block">Entreprise</label>
                    <input className={inputCls} placeholder="Votre entreprise" value={form.company}
                      onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-muted text-xs mb-2 block">Email *</label>
                    <input required type="email" className={inputCls} placeholder="votre@email.com" value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-muted text-xs mb-2 block">Téléphone</label>
                    <input type="tel" className={inputCls} placeholder="+237 6XX XXX XXX" value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label className="text-muted text-xs mb-2 block">Objet *</label>
                  <input required className={inputCls} placeholder="Objet de votre message" value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} />
                </div>
                <div>
                  <label className="text-muted text-xs mb-2 block">Message *</label>
                  <textarea required rows={5} className={inputCls + " resize-none"} placeholder="Décrivez votre projet ou demande..."
                    value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Une erreur est survenue. Réessayez ou écrivez-nous directement.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-heading font-semibold py-3.5 rounded-xl hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50"
                >
                  {status === "loading" ? "Envoi en cours..." : <><Send size={16} /> Envoyer le message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}