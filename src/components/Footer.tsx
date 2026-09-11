// Site footer. Links come from navItems, contact details from siteConfig.
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { navItems } from "./Header";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li>
              <a
                href={siteConfig.social[0]?.href ?? "https://instagram.com/sitecraftersltd"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Gmail"
                title="Gmail"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold text-foreground">Pages</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={15} aria-hidden="true" />
              <a className="hover:text-primary" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} aria-hidden="true" />
              <a className="hover:text-primary" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} aria-hidden="true" />
              <a
                className="hover:text-primary"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
