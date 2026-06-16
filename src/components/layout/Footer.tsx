import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

const SOLUTIONS = [
  "MendoLearn",
  "Mendo Coti",
  "Mendo Cash",
  "Mendo Core Banking",
  "MIA",
  "Estamp",
];

const SOCIALS = [
  { label: "in", title: "LinkedIn", href: "#" },
  { label: "fb", title: "Facebook", href: "#" },
  { label: "𝕏", title: "X/Twitter", href: "#" },
  { label: "ig", title: "Instagram", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-white/5">
      {/* Ligne décorative */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Marque */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-5">
              <div className="bg-white rounded-lg px-2 py-1 flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="mendo logo"
                  width={72}
                  height={24}
                  className="object-contain h-6 w-auto"
                  priority
                />
              </div>

              <span className="font-heading font-bold text-brand text-xl tracking-tight leading-none">
                Company
              </span>
            </Link>

            <p className="text-muted text-sm leading-relaxed mb-6">
              Construire les infrastructures numériques, financières et
              éducatives de l'Afrique.
            </p>

            <div className="flex gap-3">
              {SOCIALS.map(({ label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted text-xs font-heading font-bold hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-light font-heading font-semibold mb-5 text-xs uppercase tracking-widest">
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-light font-heading font-semibold mb-5 text-xs uppercase tracking-widest">
              Nos Solutions
            </h3>

            <ul className="space-y-2.5">
              {SOLUTIONS.map((solution) => (
                <li key={solution}>
                  <a
                    href="#solutions"
                    className="text-muted hover:text-brand transition-colors text-sm"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-light font-heading font-semibold mb-5 text-xs uppercase tracking-widest">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={15} className="text-brand mt-0.5 flex-shrink-0" />
                <span>Yaoundé – Cameroun</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail size={15} className="text-brand mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@mendocompany.com"
                  className="hover:text-brand transition-colors break-all"
                >
                  contact@mendocompany.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Globe size={15} className="text-brand mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.mendocompany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  www.mendocompany.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-xs">
          <span>
            © {new Date().getFullYear()} Mendo Company SAS – Tous droits réservés.
          </span>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand transition-colors"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/terms"
              className="hover:text-brand transition-colors"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

