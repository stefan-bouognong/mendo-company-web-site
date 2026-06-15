import React from "react";
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-white/5">
      {/* Ligne décorative */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marque */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold">M</span>
              </div>

              <span className="font-bold text-light text-xl">
                Mendo<span className="text-accent">Company</span>
              </span>
            </Link>

            <p className="text-muted text-sm leading-relaxed mb-6">
              Construire les infrastructures numériques, financières et
              éducatives de l'Afrique.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Mail, href: "#" },
                { icon: MapPin, href: "#" },
                { icon: Globe, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-light font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-light font-semibold mb-5 text-sm uppercase tracking-wider">
              Nos Solutions
            </h3>

            <ul className="space-y-2.5">
              {SOLUTIONS.map((solution) => (
                <li key={solution}>
                  <a
                    href="#solutions"
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-light font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin
                  size={15}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span>Yaoundé – Cameroun</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail
                  size={15}
                  className="text-accent mt-0.5 flex-shrink-0"
                />

                <a
                  href="mailto:contact@mendocompany.com"
                  className="hover:text-accent transition-colors break-all"
                >
                  contact@mendocompany.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-muted">
                <Globe
                  size={15}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span>www.mendocompany.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-muted text-xs">
          <span>
            © {new Date().getFullYear()} Mendo Company SAS – Tous droits
            réservés.
          </span>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition-colors"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/terms"
              className="hover:text-accent transition-colors"
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