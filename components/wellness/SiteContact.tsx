import { IconCalendarDays, IconLockKeyhole, IconMapPin, IconPhone } from "@/components/wellness/icons";

export type SiteContactProps = {
  onBookAppointment: () => void;
};

export function SiteContact({ onBookAppointment }: SiteContactProps) {
  return (
    <section id="contact" className="contact section-shell reveal" data-testid="contact-section" data-scroll-reveal="true">
      <div className="contact-card rounded-xl border bg-card text-card-foreground shadow" data-testid="contact-info-card">
        <div className="contact-content p-6 pt-0">
          <div className="contact-heading" data-testid="contact-heading-block">
            <p className="section-kicker" data-testid="contact-kicker">
              Contact / Info
            </p>
            <h2 data-testid="contact-heading">Appointments are private and scheduled with care</h2>
          </div>
          <div className="contact-list" data-testid="contact-list">
            <div className="contact-item" data-testid="contact-address">
              <IconMapPin />
              <span>Gakhar Plaza Simly Dam Road, Near Police Station Barakahu</span>
            </div>
            <div className="contact-item" data-testid="contact-phone">
              <IconPhone />
              <span>0334-9219693</span>
            </div>
            <div className="contact-item" data-testid="contact-appointment-only">
              <IconCalendarDays />
              <span>By Appointment Only</span>
            </div>
            <div className="contact-item" data-testid="contact-privacy">
              <IconLockKeyhole />
              <span>Your privacy is our priority</span>
            </div>
          </div>
          <button
            type="button"
            className="btn-wellness contact-cta"
            data-testid="contact-book-appointment-button"
            onClick={onBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
