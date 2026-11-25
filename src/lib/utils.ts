import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "VGrow Technologies",
  legalName: "VGrow Technologies",
  tagline: "Elevating Brands. Defining Excellence.",
  phone: "+91 852780368",
  phoneFormatted: "+91 85278 0368",
  email: "technologiesvgrow@gmail.com",
  githubRepo: "https://github.com/technologiesvgrow-hub/vgrowtechnologies-website-main.git",
  address: "India",
  primaryColor: "#0a1325",
  accentColor: "#F7660D",
  socials: {
    linkedin: "https://linkedin.com/company/vgrowtechnologies",
    twitter: "https://twitter.com/vgrowtech",
    instagram: "https://instagram.com/vgrowtechnologies",
    facebook: "https://facebook.com/vgrowtechnologies",
    github: "https://github.com/technologiesvgrow-hub",
  },
};
