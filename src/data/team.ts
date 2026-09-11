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
    bio: "Passionate young Tech Entrepreneurs with a strong desire to make a difference in the world through technology.",
  },
  {
    name: "Uzair Patel",
    role: "Co-founder — Development",
    photo: "",
    bio: "Passionate young Tech Entrepreneurs with a strong desire to make a difference in the world through technology.",
  },
  {
    name: "Ellis Delys",
    role: "Co-founder — Client Relations",
    photo: "",
    bio: "Passionate young Tech Entrepreneurs with a strong desire to make a difference in the world through technology.",
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
