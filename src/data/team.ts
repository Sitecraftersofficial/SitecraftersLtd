// The SiteCrafters founding team.
// Add or remove a member by adding/removing an object.
// Leave `photo` empty ("") to show initials instead of a broken image.

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialUrl?: string;
  socialLabel?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Prince Tumushime Tanga",
    role: "Co-founder — Design",
    photo: "",
    bio: "Combining creative design with modern web development to create clean, engaging, and effective digital experiences for businesses.",
  },
  {
    name: "Uzair Patel",
    role: "Co-founder — Development",
    photo: "",
    bio: "Focused on creating modern digital experiences that combine thoughtful design, powerful technology, and real business value.",
  },
  {
    name: "Ellis Delys",
    role: "Co-founder — Client Relations",
    photo: "",
    bio: "Working closely with clients to understand their needs, communicate ideas clearly, and ensure every project delivers real value.",
  },
];

/** Initials fallback used when a member has no photo yet. */
export function initials(name: string) {
  const clean = name.replace(/\[|\]/g, "").trim();
  if (!clean) return "SC";
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
