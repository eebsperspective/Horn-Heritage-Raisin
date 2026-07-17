export const brand = {
  name: "Horn Heritage",
  tagline: "Premium frankincense & myrrh, harvested in Puntland, shipped worldwide.",
  descriptionShort:
    "Hand-sorted, premium-grade frankincense and myrrh, sourced directly from harvesting families across Puntland, Somalia.",
  founded: 2021,
  hq: "Bosaso / Garowe, Puntland, Somalia",
};

export const contact = {
  email: "hello@hornheritage.com",
  wholesaleEmail: "wholesale@hornheritage.com",
  phoneDisplay: "+252 90 000 0000",
  phoneHref: "+2529000000",
  whatsappNumber: "252900000000",
  whatsappHref: "https://wa.me/252900000000",
  hoursLine: "Sunday – Thursday, 9:00–17:00 (EAT, UTC+3)",
  locationLine: "Bosaso, Puntland, Somalia",
};

export const social = {
  instagram: "https://instagram.com/hornheritage",
  facebook: "https://facebook.com/hornheritage",
  linkedin: "https://linkedin.com/company/hornheritage",
};

export const mainNav = [
  { label: "Shop", href: "/shop" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Why Our Resin", href: "/why-our-resin" },
  { label: "Our Story", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerSitemap = [
  {
    heading: "Shop",
    links: [
      { label: "All Resin", href: "/shop" },
      { label: "Frankincense", href: "/shop?type=frankincense" },
      { label: "Myrrh", href: "/shop?type=myrrh" },
      { label: "Journal", href: "/learn" },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Wholesale & Export", href: "/wholesale" },
      { label: "Why Our Resin", href: "/why-our-resin" },
      { label: "Sustainability & Sourcing", href: "/sustainability" },
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const trustBullets = [
  { label: "Ships worldwide" },
  { label: "Bulk orders available" },
  { label: "Samples available" },
  { label: "Export documentation provided" },
];

export const wholesaleFacts = {
  moq: [
    { category: "Frankincense (all grades)", moq: "5 kg per SKU" },
    { category: "Myrrh (all grades)", moq: "5 kg per SKU" },
    { category: "Mixed pallet / assorted grades", moq: "25 kg combined" },
    { category: "Private label / custom packaging", moq: "50 kg" },
  ],
  shippingRegions: {
    primary: ["United States & Canada", "European Union & United Kingdom", "GCC / Middle East", "East & Southeast Asia"],
    note: "We ship worldwide via air and sea freight. If your country isn't listed, ask us — we can usually arrange it.",
  },
  leadTimes: [
    { stage: "Order confirmation to dispatch", time: "3–7 business days" },
    { stage: "Air freight transit", time: "3–7 days to most markets" },
    { stage: "Sea freight transit", time: "3–6 weeks, region dependent" },
  ],
  packaging: [
    "Food-grade resealable bags (1 kg, 5 kg)",
    "Bulk drums (25 kg, 50 kg)",
    "Cartons with inner liners for air freight",
    "Custom / private-label packaging available on request (MOQ 50 kg)",
  ],
  documentation: [
    { name: "Certificate of Origin", status: "available" },
    { name: "Phytosanitary Certificate", status: "available" },
    { name: "Commercial Invoice & Packing List", status: "available" },
    { name: "Export License", status: "available" },
    { name: "Certificate of Analysis (lab testing)", status: "coming soon" },
  ],
  paymentTerms: "50% deposit to confirm order, balance before dispatch. Established partners may qualify for net terms.",
  incoterms: "EXW, FOB Bosaso, and CIF available depending on destination and order size.",
};

export const wholesaleBuyerTypes = [
  { label: "Spas & wellness centers" },
  { label: "Perfumers & niche fragrance houses" },
  { label: "Incense brands" },
  { label: "Apothecaries & herbalists" },
  { label: "Churches & religious suppliers" },
  { label: "Cosmetics manufacturers" },
  { label: "Retailers & distributors" },
];

export const businessTypeOptions = [
  { value: "spa", label: "Spa / wellness center" },
  { value: "perfumery", label: "Perfumery / fragrance house" },
  { value: "incense_brand", label: "Incense brand" },
  { value: "apothecary", label: "Apothecary / herbalist" },
  { value: "church", label: "Church / religious supplier" },
  { value: "cosmetics", label: "Cosmetics manufacturer" },
  { value: "retailer", label: "Retailer" },
  { value: "distributor", label: "Distributor" },
  { value: "other", label: "Other" },
];

export const wholesaleProductInterests = [
  { value: "frankincense", label: "Frankincense (all grades)" },
  { value: "myrrh", label: "Myrrh (all grades)" },
  { value: "blends", label: "Frankincense & myrrh blends" },
  { value: "private-label", label: "Custom / private label" },
  { value: "not-sure", label: "Not sure yet" },
];

export const orderVolumeRanges = [
  { value: "5-25kg", label: "5 – 25 kg" },
  { value: "25-100kg", label: "25 – 100 kg" },
  { value: "100-500kg", label: "100 – 500 kg" },
  { value: "500kg+", label: "500 kg+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const traceabilitySteps: { step: string; caption: string; image?: string }[] = [
  {
    step: "Tapping",
    caption: "A healed tapping wound on a Boswellia trunk, with a freshly collected resin tear.",
    image: "/images/boswellia-tapping.jpg",
  },
  {
    step: "Natural drying",
    caption: "Resin tears cure in the open air for several weeks, developing aroma and hardness.",
  },
  {
    step: "Sorting & grading",
    caption: "Every batch is hand-sorted in multiple passes by tear size, color, and clarity.",
    image: "/images/resin-bowl-premium.png",
  },
  {
    step: "Packaging",
    caption: "Graded resin is packed in food-grade, moisture-controlled packaging.",
  },
  {
    step: "Loading shipments",
    caption: "Containers loaded for air or sea freight for export from Puntland.",
    image: "/images/berbera-port.jpg",
  },
];
