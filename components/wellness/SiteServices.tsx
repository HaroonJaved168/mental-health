"use client";

import Image from "next/image";
import { services } from "@/lib/wellness/content";

export function SiteServices() {
  return (
    <section id="services" className="services section-shell" data-testid="services-section">
      <div className="section-heading reveal" data-testid="services-heading-block" data-scroll-reveal="true">
        <span className="pill-heading" data-testid="services-pill-heading">
          Our Services
        </span>
        <h2 data-testid="services-main-heading">Care for every stage of healing</h2>
        <p data-testid="services-intro">
          Choose from thoughtful, evidence-informed therapy and support designed around your personal needs.
        </p>
      </div>
      <div className="services-grid" data-testid="services-grid">
        {services.map((service, index) => (
          <article
            key={service.testSlug}
            className="service-card reveal"
            data-testid={`service-card-${service.testSlug}`}
            data-scroll-reveal="true"
            style={{ transitionDelay: `${(index % 4) * 70}ms` }}
          >
            <div className="service-image" data-testid={`service-image-${service.testSlug}`}>
              <Image
                src={service.imageSrc}
                alt={`${service.name} therapy support`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="service-image-img"
              />
            </div>
            <div className="service-body">
              <h3 data-testid={`service-title-${service.testSlug}`}>{service.name}</h3>
              <p data-testid={`service-description-${service.testSlug}`}>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
