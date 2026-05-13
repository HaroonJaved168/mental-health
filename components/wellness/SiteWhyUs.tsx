import { whyChoose } from "@/lib/wellness/content";
import { IconCircleCheck } from "@/components/wellness/icons";

export function SiteWhyUs() {
  return (
    <section id="why-us" className="why-us section-shell reveal" data-testid="why-us-section" data-scroll-reveal="true">
      <div className="why-copy" data-testid="why-us-copy">
        <p className="section-kicker" data-testid="why-us-kicker">
          Why Choose Us
        </p>
        <h2 data-testid="why-us-heading">Professional care with a human heart</h2>
        <p data-testid="why-us-description">
          Every session is designed to feel respectful, private, and grounded in proven therapeutic approaches.
        </p>
      </div>
      <div className="why-list" data-testid="why-us-list">
        {whyChoose.map((item) => (
          <div key={item.testId} className="why-item" data-testid={item.testId}>
            <IconCircleCheck />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
