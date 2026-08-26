export const business = {
  name: "G&M Landscape Services",
  owners: "Gilberto & Manuel",
  tagline: "30 years. No middlemen. Just us, start to finish.",
  phone: "(925) 642-7810",
  serviceArea: "Serving Pittsburg, CA and the surrounding area",
  rating: 5.0,
  reviewCount: 1,
  about:
    "We're a small family owned business with 30 years of experience. By choosing us you won't be dealing with any middlemen — from initial quote to project completion, we do all the work ourselves, making it easy to make sure your dream yard comes out exactly how you want it.",
  highlights: [
    "30 years in business",
    "Family-owned & operated",
    "Locally owned & operated",
    "Certified professionals",
    "Verified license",
    "Free estimates",
    "Se habla español",
  ],
  services: [
    "Construction or installation",
    "Greenscape construction",
    "Irrigation construction",
    "Landscaping building construction",
    "Lawn care",
  ],
};

export const reviews = {
  source: "Yelp",
  rating: 5.0,
  count: 1,
  quotes: [
    {
      text: "Five years ago the hill behind our house was falling into our backyard which was covered with weeds. G&M Landscaping put in three beautiful retaining walls, two patios, walkways and a new driveway all made of pavers. Now, five years later, there has been no movement, zero sinking pavers, the retaining walls are doing their job, and the driveway is pristine. G&M also put in outdoor lighting, a small waterfall, gopherwire, new trees and new plants. It was beautiful then, and is still beautiful now! Yesterday, we received a letter from our Home Owner's Association complimenting us on our yard! Our thanks go to Gilberto and Manuel (G&M) and their team.",
      author: "Carol K.",
      location: "Concord, CA",
      date: "Mar 2025",
    },
  ],
};

export type ServiceCategory = {
  id: string;
  title: string;
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  { id: "paver-patio", title: "Paver Patio Installation", image: "/images/service-paver-patio.jpg" },
  { id: "walkway", title: "Walkway Construction", image: "/images/service-walkway.jpg" },
  { id: "retaining-wall", title: "Retaining Wall Construction", image: "/images/service-retaining-wall.jpg" },
  { id: "water-feature", title: "Water Feature Installation", image: "/images/service-water-feature.jpg" },
  { id: "outdoor-lighting", title: "Outdoor Lighting Installation", image: "/images/service-outdoor-lighting.jpg" },
  { id: "tree-planting", title: "Tree Planting", image: "/images/service-tree-planting.jpg" },
];

export const gallery = [
  { src: "/images/hero-checkerboard-fountain.jpg", alt: "Checkerboard turf and paver patio with a stone fountain centerpiece" },
  { src: "/images/gallery-pool-pergola.jpg", alt: "Backyard pool with a custom wood pergola and outdoor kitchen" },
  { src: "/images/gallery-wall-water-feature.jpg", alt: "Wall-mounted stone water feature with a warm light surround" },
  { src: "/images/gallery-outdoor-kitchen.jpg", alt: "Outdoor kitchen and lounge area beside a pool" },
  { src: "/images/gallery-deck-spa.jpg", alt: "Redwood deck built around a sunken spa" },
  { src: "/images/gallery-turf-driveway.jpg", alt: "Turf and paver driveway with a picket fence border" },
  { src: "/images/gallery-lattice-screen.jpg", alt: "Custom wood lattice privacy screen and deck" },
];
