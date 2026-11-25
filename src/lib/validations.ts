import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must be less than 80 characters"),
  businessEmail: z
    .string()
    .email("Please provide a valid business email address"),
  phoneNumber: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .max(16, "Phone number must be less than 16 digits")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number format"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  serviceRequired: z
    .string()
    .min(1, "Please select the service you require"),
  estimatedBudget: z
    .string()
    .min(1, "Please select an estimated budget range"),
  projectDetails: z
    .string()
    .min(15, "Please provide at least 15 characters describing your project")
    .max(2500, "Project description must be under 2500 characters"),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
