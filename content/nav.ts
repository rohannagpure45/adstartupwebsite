export type NavGroup = {
  heading: string;
  links: { label: string; href: string; desc?: string }[];
};

export const productMenu: NavGroup[] = [
  {
    heading: "Platform",
    links: [
      { label: "Data pipelines", href: "/product#pipelines", desc: "Auto-ingest from every ad source" },
      { label: "Causal models", href: "/product#models", desc: "MMM that explains itself" },
      { label: "Budget Optimizer", href: "/product#optimizer", desc: "Allocations with a reason" },
    ],
  },
  {
    heading: "For agencies",
    links: [
      { label: "Multi-client ops", href: "/product#multi-client", desc: "Run every advertiser in one place" },
      { label: "White-label reporting", href: "/product#reporting", desc: "Client-ready QBR decks" },
      { label: "Data hygiene", href: "/product#hygiene", desc: "Catch issues before the model does" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "About Ipsa", href: "/about" },
      { label: "Contact", href: "mailto:hello@getipsa.ai" },
    ],
  },
];

export const mainNav = [
  // v1: mega-menu disabled. Product is a direct link. Re-enable by setting hasMenu: true.
  { label: "Product", href: "/product", hasMenu: false },
  { label: "About", href: "/about" },
];
