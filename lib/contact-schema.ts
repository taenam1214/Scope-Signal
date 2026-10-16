import { z } from "zod";

export const TOPICS = [
  { value: "feedback", label: "Share feedback" },
  { value: "pilot", label: "Explore a pilot" },
  { value: "early-access", label: "Request early access" },
  { value: "general", label: "General inquiry" },
] as const;

export const topicValues = TOPICS.map((t) => t.value) as [string, ...string[]];

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z
    .string()
    .trim()
    .min(1, "Work email is required.")
    .email("Please enter a valid email address.")
    .max(200),
  company: z.string().trim().min(1, "Company is required.").max(160),
  role: z.string().trim().min(1, "Role is required.").max(120),
  topic: z.enum(topicValues, {
    errorMap: () => ({ message: "Please choose a topic." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more (at least 10 characters).")
    .max(4000),
  // Honeypot — must remain empty. Bots tend to fill every field.
  // Not validated strictly here: the API route silently accepts and drops any
  // submission where this is non-empty, so bots get no useful error feedback.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
