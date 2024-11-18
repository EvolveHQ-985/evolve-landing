import { z } from "zod";

export const getStartedFormSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Invalid email address"),
  service: z.string().min(2, "Let us know which service you are interested in"),
  project_name: z
    .string()
    .min(2, "Please provide a descriptive name for your project"),
  message: z.string().min(20, "Description must be at least 20 characters"),
});

export type getStartedFormData = z.infer<typeof getStartedFormSchema>;
