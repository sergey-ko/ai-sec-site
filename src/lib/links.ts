/**
 * Shared nav/footer links and URL helper.
 * Prepends Astro's base path to internal hrefs.
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prepend base path to an internal href */
export function url(path: string): string {
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto')) return path;
  return `${base}${path}`;
}

export const navLinks = [
  { text: 'Open Source', href: url('/open-source') },
  { text: 'Case Studies', href: url('/case-study') },
  { text: 'Pricing', href: url('/pricing') },
  { text: 'Contact', href: url('/contact') },
];

/** Standard nav CTA — points to contact (the thing we can sell today) */
export const navCta = { text: 'Book a Call', href: url('/contact') };

export const footerLinks = [
  { text: 'Open Source', href: url('/open-source') },
  { text: 'Platform', href: url('/free-scan') },
  { text: 'Pricing', href: url('/pricing') },
  { text: 'Case Studies', href: url('/case-study') },
  { text: 'Contact', href: url('/contact') },
  { text: 'GitHub', href: 'https://github.com/sergey-ko/ai-sec' },
];
