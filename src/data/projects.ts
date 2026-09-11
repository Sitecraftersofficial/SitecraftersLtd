// All portfolio projects live here.
// To ADD a project: add one object below (and one image in src/assets/portfolio).
// To REMOVE a project: delete the object, or set `published: false`.
// Newest projects (by createdAt) are shown first automatically.

// Maps image filenames to their bundled URLs so project data can reference
// images by plain filename (e.g. "sitecrafters.png").
const portfolioImages = import.meta.glob("@/assets/portfolio/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function image(fileName: string): string {
  const entry = Object.entries(portfolioImages).find(([path]) => path.endsWith(`/${fileName}`));
  return entry ? entry[1] : "";
}

export type Project = {
  /** URL slug for the optional case-study page: /work/<slug> */
  slug: string;
  name: string;
  business: string;
  category: string; // industry
  description: string;
  image: string; // leave "" to show a clean placeholder instead of a broken image
  websiteUrl?: string;
  createdAt: string; // ISO date, used for sorting
  featured: boolean;
  published?: boolean;
  /** Optional case study. Omit entirely to hide the detail page link. */
  caseStudy?: {
    challenge: string;
    approach: string;
    /** Only verified, client-confirmed results. Leave empty if none. */
    result?: string;
    screenshots?: string[];
  };
};

const WEBSITES = "Websites";
const TEMPLATES = "Templates";
const LANDING_PAGES = "Landing Pages";

export const projects: Project[] = [
  {
    slug: "sitecrafters-ltd",
    name: "SiteCrafters Ltd",
    business: "SiteCrafters Ltd",
    category: WEBSITES,
    description:
      "Our own agency website — a modern, responsive design for SiteCrafters, showcasing our services, portfolio, and contact flow.",
    image: image("sitecrafters.png"),
    websiteUrl: "https://sitecraftersltd.com/",
    createdAt: "2026-02-01",
    featured: false,
  },
  {
    slug: "brotherhood-travel-tours",
    name: "Brotherhood Travel Tours",
    business: "Brotherhood Travel Tours",
    category: WEBSITES,
    description:
      "A vibrant travel agency website for Brotherhood Travel Tours, featuring destination highlights, tour packages, and easy booking options.",
    image: image("brohoodtraveltours.png"),
    websiteUrl: "https://brotherhoodunitedcompanyltd.com/",
    createdAt: "2026-06-01",
    featured: true,
  },
  {
    slug: "silva-gym",
    name: "Silva Gym",
    business: "Silva Gym",
    category: WEBSITES,
    description:
      "A sleek gym website with class scheduling, membership management, and a user-friendly admin dashboard.",
    image: image("silvagym.png"),
    websiteUrl: "https://silgym.netlify.app/",
    createdAt: "2026-01-10",
    featured: false,
  },
  {
    slug: "personal-trainer",
    name: "Personal Trainer",
    business: "Personal Trainer",
    category: WEBSITES,
    description:
      "A sleek personal trainer website with service offerings, client testimonials, and easy booking options.",
    image: image("personaltrainer.png"),
    websiteUrl: "https://personaltrainersweb.netlify.app/",
    createdAt: "2025-12-18",
    featured: false,
  },
  {
    slug: "exquisite-konnor",
    name: "Exquisite Konnor",
    business: "Exquisite Konnor",
    category: WEBSITES,
    description:
      "A premium men's fashion boutique website for ExquisiteKonnor, featuring elegant product showcases, style lookbooks, and seamless client inquiries.",
    image: image("exquisitekonnor.png"),
    websiteUrl: "https://exquisitekonnor.netlify.app/",
    createdAt: "2025-11-22",
    featured: false,
  },
  {
    slug: "personal-trainer-chat-system",
    name: "Personal Trainer Chat System",
    business: "Personal Trainer Chat System",
    category: TEMPLATES,
    description:
      "A sleek personal training chat system website with service offerings, client testimonials, and easy booking options.",
    image: image("ptchatsystem.png"),
    websiteUrl: "https://ptchatsystem.netlify.app/",
    createdAt: "2025-11-08",
    featured: false,
  },
  {
    slug: "hvac-services",
    name: "HVAC Services",
    business: "HVAC Services",
    category: TEMPLATES,
    description:
      "A professional HVAC services website showcasing services, customer testimonials, and easy contact options.",
    image: image("hvac.png"),
    websiteUrl: "https://kglhvacservices.netlify.app/",
    createdAt: "2025-10-28",
    featured: false,
  },
  {
    slug: "multi-gym",
    name: "Multi Gym",
    business: "Multi Gym",
    category: TEMPLATES,
    description:
      "A comprehensive multi-gym website featuring facility details, membership plans, and class schedules.",
    image: image("multigym.png"),
    websiteUrl: "https://multigym.netlify.app/",
    createdAt: "2025-10-15",
    featured: false,
  },
  {
    slug: "gym-fitness",
    name: "Gym Fitness",
    business: "Gym Fitness",
    category: TEMPLATES,
    description:
      "A dynamic gym and fitness center website with class schedules, trainer profiles, and membership sign-up features.",
    image: image("gym.png"),
    websiteUrl: "https://gymssite.netlify.app/",
    createdAt: "2025-10-02",
    featured: false,
  },
  {
    slug: "serenity-massage-spa",
    name: "Serenity Massage Spa",
    business: "Serenity Massage Spa",
    category: TEMPLATES,
    description:
      "A calming massage spa website featuring treatment highlights, therapist profiles, and seamless appointment booking.",
    image: image("spa.png"),
    websiteUrl: "https://serenitymassagespa.netlify.app/",
    createdAt: "2025-09-20",
    featured: false,
  },
  {
    slug: "elite-interior-designers",
    name: "Elite Interior Designers",
    business: "Elite Interior Designers",
    category: TEMPLATES,
    description:
      "A premium interior design template showcasing services, project galleries, and an easy consultation contact flow.",
    image: image("intdesign.png"),
    websiteUrl: "https://eliteinteriordesigners.netlify.app/",
    createdAt: "2025-09-08",
    featured: false,
  },
  {
    slug: "event-planners-hub",
    name: "Event Planners Hub",
    business: "Event Planners Hub",
    category: TEMPLATES,
    description:
      "A vibrant event planning template with service packages, event showcases, and quick inquiry options.",
    image: image("evntplanner.png"),
    websiteUrl: "https://eventplannershub.netlify.app/",
    createdAt: "2025-08-26",
    featured: false,
  },
  {
    slug: "auram-jewelry",
    name: "Auram Jewelry",
    business: "Auram Jewelry",
    category: TEMPLATES,
    description:
      "An elegant jewelry template featuring curated collections, product storytelling, and conversion-focused call-to-actions.",
    image: image("jewelry.png"),
    websiteUrl: "https://auramjewelry.netlify.app/",
    createdAt: "2026-05-01",
    featured: true,
  },
  {
    slug: "dentists-clinic",
    name: "Dentists Clinic",
    business: "Dentists Clinic",
    category: TEMPLATES,
    description:
      "A professional dental clinic template with treatment overviews, doctor profiles, and appointment request sections.",
    image: image("dental.png"),
    websiteUrl: "https://dentistsclinic.netlify.app/",
    createdAt: "2025-07-30",
    featured: false,
  },
  {
    slug: "web-of-restaurant",
    name: "Web of Restaurant",
    business: "Web of Restaurant",
    category: TEMPLATES,
    description:
      "A modern restaurant template presenting menu highlights, chef stories, and reservation-ready contact details.",
    image: image("restaurant.png"),
    websiteUrl: "https://webofrestaurant.netlify.app/",
    createdAt: "2025-07-16",
    featured: false,
  },
  {
    slug: "real-estates-web",
    name: "Real Estates Web",
    business: "Real Estates Web",
    category: TEMPLATES,
    description:
      "A clean real estate template built to showcase listings, featured properties, and client inquiry forms.",
    image: image("realestate.png"),
    websiteUrl: "https://realestatesweb.netlify.app/",
    createdAt: "2026-04-01",
    featured: true,
  },
  {
    slug: "general-cafe",
    name: "General Cafe",
    business: "General Cafe",
    category: TEMPLATES,
    description:
      "A warm cafe template with featured drinks, ambience sections, and simple contact and location details.",
    image: image("cafe.png"),
    websiteUrl: "https://generalcafe.netlify.app/",
    createdAt: "2025-06-18",
    featured: false,
  },
  {
    slug: "general-supermarket",
    name: "General Supermarket",
    business: "General Supermarket",
    category: TEMPLATES,
    description:
      "A practical supermarket template highlighting product categories, weekly offers, and clear shopping call-to-actions.",
    image: image("supermarket.png"),
    websiteUrl: "https://generalsupermarket.netlify.app/",
    createdAt: "2025-06-04",
    featured: false,
  },
  {
    slug: "plumbing-technician",
    name: "Plumbing Technician",
    business: "Plumbing Technician",
    category: TEMPLATES,
    description:
      "A service-focused plumbing template showcasing core services, emergency support details, and quote request forms.",
    image: image("plumbing.png"),
    websiteUrl: "https://plumbingtechnician.netlify.app/",
    createdAt: "2025-05-08",
    featured: false,
  },
  {
    slug: "car-rental",
    name: "Car Rental",
    business: "Car Rental",
    category: LANDING_PAGES,
    description:
      "A sleek and conversion-focused landing page for a car rental service, featuring vehicle listings, booking CTA, and responsive design.",
    image: image("carrental.png"),
    websiteUrl: "https://luxedrivecar-rental.netlify.app/",
    createdAt: "2025-04-24",
    featured: false,
  },
  {
    slug: "beauty-salon",
    name: "Beauty Salon",
    business: "Beauty Salon",
    category: LANDING_PAGES,
    description:
      "A stylish salon and beauty services website showcasing treatments, stylist profiles, and appointment booking features.",
    image: image("salon.png"),
    websiteUrl: "https://websalon.netlify.app/",
    createdAt: "2025-04-10",
    featured: false,
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    business: "Pharmacy",
    category: LANDING_PAGES,
    description:
      "A modern pharmaceutical website featuring product listings, health tips, and online consultation options.",
    image: image("pharma.png"),
    websiteUrl: "https://pharmasweb.netlify.app/",
    createdAt: "2025-03-27",
    featured: false,
  },
  {
    slug: "eco-bazar",
    name: "Eco Bazar",
    business: "Eco Bazar",
    category: LANDING_PAGES,
    description:
      "A clean and eco-friendly online store interface designed for organic products, with category browsing, modern UI, and responsive layout.",
    image: image("ecobazar.png"),
    websiteUrl: "https://ecobaazar.netlify.app/",
    createdAt: "2025-03-13",
    featured: false,
  },
  {
    slug: "elite-sports-academy",
    name: "Elite Sports Academy",
    business: "Elite Sports Academy",
    category: LANDING_PAGES,
    description:
      "A dynamic sports academy website featuring training programs, coach profiles, and enrollment options.",
    image: image("sportsacademy.png"),
    websiteUrl: "https://genericsportsacademy.netlify.app/",
    createdAt: "2025-02-27",
    featured: false,
  },
];

/** Published projects, newest first, featured ones surfaced to the top. */
export function sortedProjects() {
  return projects
    .filter((p) => p.published !== false)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.createdAt.localeCompare(a.createdAt);
    });
}

export function findProject(slug: string) {
  return sortedProjects().find((p) => p.slug === slug);
}
