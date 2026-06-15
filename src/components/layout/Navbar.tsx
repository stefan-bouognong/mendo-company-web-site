"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-primary/95 backdrop-blur-xl border-b border-white/5 shadow-xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm">M</span>
          </div>

          <span className="font-bold text-light text-xl">
            Mendo<span className="text-accent">Company</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-light transition-colors duration-300 font-medium text-sm relative group"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          <Link href="#contact">
            <Button variant="primary" size="sm">
              Nous Contacter
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-light hover:text-accent transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/5 mx-4 rounded-b-2xl p-6 shadow-2xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-accent hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-xl font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3"
            >
              <Button
                variant="primary"
                size="default"
                className="w-full"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;