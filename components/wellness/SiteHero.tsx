"use client";

import Image from "next/image";
import Link from "next/link";
import { IconHeart } from "@/components/wellness/icons";
import { LeafDecoration } from "@/components/wellness/LeafDecoration";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1776886099265-6366478b341b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85";

export type SiteHeroProps = {
  onBookSession: () => void;
};

export function SiteHero({ onBookSession }: SiteHeroProps) {
  return (
    <section id="home" className="hero section-shell" data-testid="hero-section">
      <LeafDecoration className="leaf-decoration hero-leaf hero-leaf-left" />
      <LeafDecoration className="leaf-decoration hero-leaf hero-leaf-right" />

      <div className="hero-copy reveal is-visible">
        <span className="eyebrow" data-testid="hero-eyebrow">
          Mental Health Matters
        </span>
        <h1 data-testid="hero-title">We Are Now Open!</h1>
        <p className="hero-subtext" data-testid="hero-subtext">
          A safe, confidential and non-judgmental space where you can talk, heal and grow.
        </p>
        <div className="hero-actions" data-testid="hero-actions">
          <button
            type="button"
            className="btn-wellness primary-cta"
            data-testid="hero-book-session-button"
            onClick={onBookSession}
          >
            Book a Session
          </button>
          <Link href="#services" className="secondary-link" data-testid="hero-services-link">
            Explore services
          </Link>
        </div>
      </div>

      <div className="hero-visual reveal is-visible" data-testid="hero-visual-card">
        <div className="hero-image-frame">
          <Image
            src={HERO_IMAGE}
            alt="Warm clinic waiting room with plants and soft seating"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="hero-room-image"
            data-testid="hero-room-image"
            priority
          />
        </div>
        <div className="hero-note" data-testid="hero-note-card">
          <IconHeart />
          <span>Private one-on-one appointments</span>
        </div>
      </div>
    </section>
  );
}
