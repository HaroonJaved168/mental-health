export type NavLink = {
  href: string;
  label: string;
  testId: string;
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home", testId: "nav-link-home" },
  { href: "#about", label: "About", testId: "nav-link-about" },
  { href: "#services", label: "Services", testId: "nav-link-services" },
  { href: "#why-us", label: "Why Us", testId: "nav-link-why-us" },
  { href: "#contact", label: "Contact", testId: "nav-link-contact" },
];

export type ServiceItem = {
  name: string;
  description: string;
  imageSrc: string;
  testSlug: string;
};

export const services: ServiceItem[] = [
  {
    name: "Psychological Assessments",
    description:
      "Comprehensive evaluations to understand your mental health, cognitive functioning, and emotional well-being.",
    imageSrc:
      "https://images.unsplash.com/photo-1776886099265-6366478b341b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "psychological-assessments",
  },
  {
    name: "Anxiety & Depression",
    description:
      "Evidence-based therapy to help you manage overwhelming thoughts, persistent sadness, and emotional exhaustion.",
    imageSrc:
      "https://images.unsplash.com/photo-1495273937642-3d89ef9db678?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "anxiety-and-depression",
  },
  {
    name: "Relationship Counseling",
    description:
      "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection.",
    imageSrc:
      "https://images.unsplash.com/photo-1758273240373-370993d0275d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "relationship-counseling",
  },
  {
    name: "Emotional Disturbance & Sleep Difficulties",
    description:
      "Address emotional dysregulation and restore healthy sleep patterns for a balanced life.",
    imageSrc:
      "https://images.unsplash.com/photo-1767611098846-05ed978b17ce?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "emotional-disturbance-and-sleep-difficulties",
  },
  {
    name: "Stress Management",
    description:
      "Practical tools and strategies to help you cope with daily pressures and build long-term resilience.",
    imageSrc:
      "https://images.unsplash.com/photo-1772026251680-d0b1cd06b33d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "stress-management",
  },
  {
    name: "Personality Disorders",
    description:
      "Compassionate, structured therapy to help you understand patterns of thinking and behavior that affect your life.",
    imageSrc:
      "https://images.unsplash.com/photo-1618994841620-863a9d6f4dca?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "personality-disorders",
  },
  {
    name: "Substance Abuse Disorder",
    description:
      "Supportive, non-judgmental care to help you overcome dependency and build a healthier, substance-free life.",
    imageSrc:
      "https://images.unsplash.com/photo-1626691796468-7d8ae60cb32f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "substance-abuse-disorder",
  },
  {
    name: "Trauma Therapy",
    description:
      "Specialized therapy including EMDR and CBT to help you process and heal from past traumatic experiences.",
    imageSrc:
      "https://images.unsplash.com/photo-1616074735081-0a3a0a79600d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "trauma-therapy",
  },
  {
    name: "Child Psychology",
    description:
      "A safe and nurturing space for children to explore emotions, develop coping skills, and thrive.",
    imageSrc:
      "https://images.unsplash.com/photo-1758273241260-f49172d876e3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "child-psychology",
  },
  {
    name: "Autism Spectrum Disorder",
    description:
      "Tailored support and therapeutic strategies to help individuals on the spectrum reach their full potential.",
    imageSrc:
      "https://images.unsplash.com/photo-1532617202163-3b60202ec869?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "autism-spectrum-disorder",
  },
  {
    name: "ADHD",
    description:
      "Guidance and behavioral strategies to help children and adults with ADHD improve focus, organization, and self-regulation.",
    imageSrc:
      "https://images.unsplash.com/photo-1758273241090-b7d744465ce6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "adhd",
  },
  {
    name: "Intellectual Disability",
    description:
      "Individualized care and support to enhance daily functioning, communication, and quality of life.",
    imageSrc:
      "https://images.unsplash.com/photo-1704462921772-17f414089b84?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    testSlug: "intellectual-disability",
  },
];

export type WhyChooseItem = {
  label: string;
  testId: string;
};

export const whyChoose: WhyChooseItem[] = [
  { label: "Confidential & Safe Environment", testId: "why-item-confidential-and-safe-environment" },
  { label: "One-on-One Personalized Sessions", testId: "why-item-one-on-one-personalized-sessions" },
  { label: "Evidence-Based Therapy", testId: "why-item-evidence-based-therapy" },
  { label: "Compassionate & Professional Care", testId: "why-item-compassionate-and-professional-care" },
];
