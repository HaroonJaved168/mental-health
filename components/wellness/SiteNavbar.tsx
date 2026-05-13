"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/wellness/content";
import { IconMenu, IconSprout, IconX } from "@/components/wellness/icons";

export type SiteNavbarProps = {
  onBookAppointment: () => void;
};

export function SiteNavbar({ onBookAppointment }: SiteNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" data-testid="main-navbar">
      <Link
        href="#home"
        className="brand-link"
        data-testid="navbar-brand-link"
        aria-label="Mental Health Well-Being Clinic home"
        onClick={() => setMobileOpen(false)}
      >
        <div className="logo-wrap" data-testid="clinic-logo-mark">
          <div className="logo-head" aria-hidden>
            <IconSprout />
          </div>
          <div>
            <p className="brand-name" data-testid="clinic-brand-name">
              Mental Health Well-Being Clinic
            </p>
            <p className="brand-tagline" data-testid="clinic-brand-tagline">
              Healing with warmth and care
            </p>
          </div>
        </div>
      </Link>

      <div className={`desktop-links${mobileOpen ? " is-open" : ""}`} data-testid="desktop-nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-testid={link.testId}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          className="btn-wellness nav-cta-mobile"
          data-testid="navbar-book-appointment-button-mobile"
          onClick={() => {
            setMobileOpen(false);
            onBookAppointment();
          }}
        >
          Book Appointment
        </button>
      </div>

      <button
        type="button"
        className="btn-wellness nav-cta"
        data-testid="navbar-book-appointment-button"
        onClick={onBookAppointment}
      >
        Book Appointment
      </button>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        data-testid="mobile-menu-toggle-button"
        onClick={() => setMobileOpen((o) => !o)}
      >
        {mobileOpen ? <IconX /> : <IconMenu />}
      </button>
    </nav>
  );
}
