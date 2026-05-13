import { LeafDecoration } from "@/components/wellness/LeafDecoration";

export function SiteMission() {
  return (
    <section className="mission section-shell reveal" data-testid="mission-section" data-scroll-reveal="true">
      <LeafDecoration className="leaf-decoration mission-leaf" />
      <div className="quote-card" data-testid="mission-quote-card">
        <span data-testid="mission-label">Our Mission</span>
        <blockquote data-testid="mission-quote">
          “To value mental health as much as physical health and provide support, understanding and care to every
          individual.”
        </blockquote>
      </div>
    </section>
  );
}
