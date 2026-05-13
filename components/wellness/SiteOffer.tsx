import { IconHeart } from "@/components/wellness/icons";

export function SiteOffer() {
  return (
    <section className="offer section-shell reveal" data-testid="opening-offer-section" data-scroll-reveal="true">
      <div className="offer-badge" data-testid="opening-offer-badge">
        <span data-testid="opening-offer-label">Opening Offer</span>
        <strong data-testid="opening-offer-text">Special Discount on First Session!</strong>
      </div>
      <div className="offer-script" data-testid="opening-offer-script">
        <IconHeart size={30} />
        <span>You are not alone.</span>
      </div>
    </section>
  );
}
