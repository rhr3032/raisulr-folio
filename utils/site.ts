// Shared site content used by the header, mobile menu, footer and contact section.

export interface NavItem {
  title: string;
  url: string;
}

export const primaryNav: NavItem[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Works", url: "/projects" },
  { title: "Services", url: "/services" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

export const footerNav: NavItem[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/blog" },
  { title: "Work", url: "/projects" },
];

export const legalNav: NavItem[] = [
  { title: "Terms", url: "/terms-conditions" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Error 404", url: "/error" },
];

export const socialLinks = [
  { title: "Facebook", url: "https://www.facebook.com/", icon: "tabler:brand-facebook" },
  { title: "Instagram", url: "https://www.instagram.com/", icon: "tabler:brand-instagram" },
  { title: "Twitter", url: "https://x.com/", icon: "tabler:brand-x" },
];

export const contactInfo = {
  email: "contact.raisulrafi@gmail.com",
  location: "Barisal, Bangladesh",
  mapUrl: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8",
};

export const isActiveRoute = (currentPath: string, url: string) =>
  url === "/" ? currentPath === "/" : currentPath === url || currentPath.startsWith(`${url}/`);
