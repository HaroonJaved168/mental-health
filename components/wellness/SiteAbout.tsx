import { IconLeaf } from "@/components/wellness/icons";

export function SiteAbout() {
  return (
    <section id="about" className="about section-shell reveal" data-testid="about-section" data-scroll-reveal="true">
      <div className="about-card rounded-xl border bg-card text-card-foreground shadow" data-testid="about-card">
        <div className="about-content p-6 pt-0">
          <div className="section-icon" data-testid="about-icon">
            <IconLeaf />
          </div>
          <div>
            <p className="section-kicker" data-testid="about-kicker">
              About Us
            </p>
            <h2 data-testid="about-heading">A gentle space to feel heard</h2>
            <p data-testid="about-description">
              Mental Health Well-Being Clinic provides a safe, confidential and non-judgmental space where you can
              openly share your feelings and concerns. Our goal is to support your emotional and psychological
              well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
