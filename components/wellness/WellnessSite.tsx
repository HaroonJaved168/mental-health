"use client";

import { useCallback, useEffect, useState } from "react";
import { BookingModal } from "@/components/wellness/BookingModal";
import { SiteAbout } from "@/components/wellness/SiteAbout";
import { SiteContact } from "@/components/wellness/SiteContact";
import { SiteFooter } from "@/components/wellness/SiteFooter";
import { SiteHero } from "@/components/wellness/SiteHero";
import { SiteMission } from "@/components/wellness/SiteMission";
import { SiteNavbar } from "@/components/wellness/SiteNavbar";
import { SiteOffer } from "@/components/wellness/SiteOffer";
import { SiteServices } from "@/components/wellness/SiteServices";
import { SiteWhyUs } from "@/components/wellness/SiteWhyUs";

export function WellnessSite() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-scroll-reveal]");
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="wellness-site" data-testid="wellness-site">
        <SiteNavbar onBookAppointment={openBooking} />
        <SiteHero onBookSession={openBooking} />
        <SiteAbout />
        <SiteMission />
        <SiteServices />
        <SiteWhyUs />
        <SiteOffer />
        <SiteContact onBookAppointment={openBooking} />
        <SiteFooter />
      </main>
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
}
