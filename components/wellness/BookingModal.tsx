"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { services } from "@/lib/wellness/content";
import {
  IconCalendar,
  IconMessage,
  IconPhone,
  IconUser,
  IconWhatsApp,
  IconX,
} from "@/components/wellness/icons";

const WHATSAPP_NUMBER = "923345792952";

export type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  fullName: string;
  phone: string;
  preferredDate: string;
  concern: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  preferredDate: "",
  concern: "",
  notes: "",
};

function buildWhatsAppMessage(values: FormState): string {
  const notesLine = values.notes.trim() ? values.notes.trim() : "—";
  return [
    "Hello, I would like to book an appointment.",
    "",
    `👤 Name: ${values.fullName.trim()}`,
    `📞 Phone: ${values.phone.trim()}`,
    `📅 Preferred Date: ${values.preferredDate}`,
    `🧠 Concern: ${values.concern}`,
    `📝 Notes: ${notesLine}`,
  ].join("\n");
}

export function BookingModal({ open, onClose }: BookingModalProps): React.ReactElement | null {
  const titleId = useId();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const resetAndClose = useCallback(() => {
    setForm(initialForm);
    setErrors({});
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetAndClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, resetAndClose]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.preferredDate) next.preferredDate = "Please choose a preferred date.";
    if (!form.concern) next.concern = "Please select a concern.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitToWhatsApp = (): void => {
    if (!validate()) return;
    const text = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    resetAndClose();
  };

  if (!open) return null;

  return (
    <div
      className="booking-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div
        className="booking-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="booking-modal-close"
          aria-label="Close booking form"
          onClick={resetAndClose}
        >
          <IconX className="booking-modal-close-icon" />
        </button>
        <h2 id={titleId} className="booking-modal-title">
          Book an Appointment
        </h2>
        <p className="booking-modal-subtitle">Fill in your details to schedule a session.</p>

        <div className="booking-modal-fields">
          <label className="booking-field">
            <span className="booking-field-label">Full Name</span>
            <span className="booking-input-wrap">
              <IconUser className="booking-input-icon" />
              <input
                type="text"
                name="fullName"
                autoComplete="name"
                className="booking-input"
                value={form.fullName}
                onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                aria-invalid={Boolean(errors.fullName)}
              />
            </span>
            {errors.fullName ? <span className="booking-field-error">{errors.fullName}</span> : null}
          </label>

          <label className="booking-field">
            <span className="booking-field-label">Phone Number</span>
            <span className="booking-input-wrap">
              <IconPhone className="booking-input-icon" />
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="03xx xxxxxxx"
                className="booking-input"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                aria-invalid={Boolean(errors.phone)}
              />
            </span>
            {errors.phone ? <span className="booking-field-error">{errors.phone}</span> : null}
          </label>

          <label className="booking-field">
            <span className="booking-field-label">Preferred Date</span>
            <span className="booking-input-wrap">
              <IconCalendar className="booking-input-icon" />
              <input
                type="date"
                name="preferredDate"
                className="booking-input"
                value={form.preferredDate}
                onChange={(e) => setForm((f) => ({ ...f, preferredDate: e.target.value }))}
                aria-invalid={Boolean(errors.preferredDate)}
              />
            </span>
            {errors.preferredDate ? (
              <span className="booking-field-error">{errors.preferredDate}</span>
            ) : null}
          </label>

          <label className="booking-field">
            <span className="booking-field-label">Mental Health Concern</span>
            <span className="booking-input-wrap booking-select-wrap">
              <select
                name="concern"
                className="booking-select"
                value={form.concern}
                onChange={(e) => setForm((f) => ({ ...f, concern: e.target.value }))}
                aria-invalid={Boolean(errors.concern)}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.testSlug} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </span>
            {errors.concern ? <span className="booking-field-error">{errors.concern}</span> : null}
          </label>

          <label className="booking-field">
            <span className="booking-field-label">Message / Additional Notes (optional)</span>
            <span className="booking-input-wrap booking-textarea-wrap">
              <IconMessage className="booking-input-icon booking-textarea-icon" />
              <textarea
                name="notes"
                rows={4}
                className="booking-textarea"
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              />
            </span>
          </label>
        </div>

        <button type="button" className="booking-submit" onClick={submitToWhatsApp}>
          <IconWhatsApp className="booking-submit-icon" />
          Book via WhatsApp
        </button>
      </div>
    </div>
  );
}
