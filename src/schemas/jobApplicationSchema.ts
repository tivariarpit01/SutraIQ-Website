// src/schemas/jobApplicationSchema.ts
import * as z from "zod";

export const jobApplicationSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits.").max(15, "Phone number cannot exceed 15 digits."),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender." }),
  }),
  position: z.string().min(1, "Please select a position."),
  resume: z.string().url("Invalid URL. Please provide a link to your resume.").optional().or(z.literal('')), // Optional URL or empty string
  linkedin: z.string().url("Invalid LinkedIn URL.").optional().or(z.literal('')),
  github: z.string().url("Invalid GitHub URL.").optional().or(z.literal('')),
  portfolio: z.string().url("Invalid Portfolio URL.").optional().or(z.literal('')),
  expectedCTC: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid CTC format. Enter numbers only (e.g., 5.5, 12).").min(1, "Expected CTC is required."),
  noticePeriod: z.string().min(1, "Notice period is required."),
  skills: z.string().min(10, "Please list your skills (min. 10 characters)."),
});

export type JobApplicationFormValues = z.infer<typeof jobApplicationSchema>;