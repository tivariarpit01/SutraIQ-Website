// src/components/JobApplicationForm.tsx
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react"; // Import a success icon

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  jobApplicationSchema,
  JobApplicationFormValues,
} from "@/schemas/jobApplicationSchema";

// Define options for Select/Radio fields
const positions = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Project Manager",
  "QA Engineer",
  "Other",
];

const noticePeriods = [
  "Immediately",
  "1 week",
  "2 weeks",
  "1 month",
  "2 months",
  "3 months",
  "More than 3 months",
];

export function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // New state to manage form visibility / success message display
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const { toast } = useToast();

  const form = useForm<JobApplicationFormValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: "male",
      position: "",
      resume: "",
      linkedin: "",
      github: "",
      portfolio: "",
      expectedCTC: "",
      noticePeriod: "",
      skills: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: JobApplicationFormValues) => {
    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...values,
        skills: values.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0),
      };

      const res = await fetch("/api/job/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) {
        const errorData = await res
          .json()
          .catch(() => ({
            message: "Failed to submit application. Please check the server.",
          }));
        throw new Error(errorData.message);
      }

      // Show success toast
      toast({
        title: "Application Submitted!",
        description: "Your job application has been successfully received.",
      });

      form.reset(); // Reset form after successful submission
      setIsSubmittedSuccessfully(true); // Set success state to true
      // Optional: If you want the success message to disappear after a few seconds and the form to reappear
      // setTimeout(() => {
      //   setIsSubmittedSuccessfully(false);
      // }, 5000); // Hide message and show form again after 5 seconds
    } catch (error: any) {
      console.error("Application submission failed:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
      });
      setIsSubmittedSuccessfully(false); // Ensure success state is false on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-border/50 shadow-lg mt-8 mb-16">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">
          Job Application
        </CardTitle>
        {/* Only show description if not successfully submitted */}
        {!isSubmittedSuccessfully && (
          <CardDescription className="text-center">
            Fill out the form below to apply for a position with us.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {isSubmittedSuccessfully ? (
          // Display success message when isSubmittedSuccessfully is true
          <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
            <CheckCircle className="h-20 w-20 text-green-500 mb-6 animate-bounce" />
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Thank You for Applying!
            </h2>
            <p className="text-muted-foreground text-lg">
              Your application has been successfully submitted. We will review
              it and get back to you soon.
            </p>
            {/* You can add a button to navigate somewhere or close, if needed */}
            {/* <Button className="mt-6" onClick={() => setIsSubmittedSuccessfully(false)}>Apply Again</Button> */}
          </div>
        ) : (
          // Display the form when isSubmittedSuccessfully is false
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <h3 className="text-lg font-semibold border-b pb-2 mb-4">
                Personal Information
              </h3>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91-1234567890"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please include country code if applicable.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-8"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Application Details */}
              <h3 className="text-lg font-semibold border-b pb-2 mb-4 mt-8">
                Application Details
              </h3>
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applying For</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((pos) => (
                          <SelectItem key={pos} value={pos}>
                            {pos}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the position you are applying for.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedCTC"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected CTC (in Lakhs/Annum)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 5.5 or 12" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your expected Cost To Company (e.g., "5.5"
                      for 5.5 Lakhs).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="noticePeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notice Period</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your notice period" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {noticePeriods.map((period) => (
                          <SelectItem key={period} value={period}>
                            {period}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      How much notice do you need to give to your current
                      employer?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List your key skills, separated by commas (e.g., JavaScript, React, Node.js, MongoDB)"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      List all relevant skills you possess, separated by commas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Links */}
              <h3 className="text-lg font-semibold border-b pb-2 mb-4 mt-8">
                Links (Optional)
              </h3>
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-resume.com/file.pdf"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Link to your online resume (e.g., Google Drive, personal
                      website).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/in/yourprofile"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Link to your LinkedIn profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub Profile</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/yourusername"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Link to your GitHub profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-portfolio.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Link to your online portfolio (if applicable).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
