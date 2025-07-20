'use client';

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast"; // Assuming you have this hook
// Import additional icons from lucide-react
import {
  ArrowRight,
  ArrowLeft,
  Send,
  Code,        // For Web Development
  Smartphone,  // For App Development
  Brain,       // For AI Solutions
  Cloud,       // For Cloud Support
  Megaphone,   // For Digital Marketing
  Building,    // For BPO Services
} from "lucide-react";

// --- Form Data and Schema ---
const services = [
  { id: "webDev", label: "Web Development", icon: Code },
  { id: "appDev", label: "App Development", icon: Smartphone },
  { id: "ai", label: "AI Solutions", icon: Brain },
  { id: "cloud", label: "Cloud Support", icon: Cloud },
  { id: "marketing", label: "Digital Marketing", icon: Megaphone },
  { id: "bpo", label: "BPO Services", icon: Building },
] as const;

const step1Schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
});
const step2Schema = z.object({
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one service.",
  }),
});
const step3Schema = z.object({
  details: z.string().min(20, "Please provide more details (min. 20 characters)."),
  budget: z.string().optional(),
});

const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      services: [],
      details: "",
      budget: "",
    },
    mode: "onChange",
  });

  const processStep = async () => {
    let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];
    if (currentStep === 0) {
      fieldsToValidate = ["name", "email", "company"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["services"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["details", "budget"];
    }

    const result = await form.trigger(fieldsToValidate);

    if (result && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:9002/api/get-started", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({ message: "Failed to submit. Please check the server." }));
        throw new Error(error.message);
      }

      toast({
        title: "Quote Request Submitted!",
        description: "Thank you! We've received your project details.",
      });

      setCurrentStep(4);
    } catch (error: any) {
      console.error("Submission failed:", error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const steps = [
    { title: "Contact Information" },
    { title: "Services Needed" },
    { title: "Project Details" },
    { title: "Review & Submit" },
    { title: "Thank You!" },
  ];

  const progress = (currentStep / (steps.length - 2)) * 100;

  return (
    <Card className="w-full border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{steps[currentStep].title}</CardTitle>
        {currentStep < 3 && <Progress value={progress} className="mt-4" />}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 0 && (
              <div className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem><FormLabel>Company (Optional)</FormLabel><FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
            )}
            
            {currentStep === 1 && (
                <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-lg font-semibold">What services are you interested in?</FormLabel> {/* Increased text size */}
                            <FormDescription>Select all that apply.</FormDescription>
                        </div>
                        <div className="space-y-4"> {/* Increased space between items */}
                            {services.map((item) => {
                                const IconComponent = item.icon; // Get the icon component
                                return (
                                <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-4 p-4 rounded-md border bg-muted hover:bg-muted/70 cursor-pointer transition-colors" // Added styling
                                    onClick={() => { // Allow clicking anywhere on the item to toggle
                                        const checked = field.value?.includes(item.id);
                                        const newValue = checked
                                            ? field.value?.filter((value) => value !== item.id)
                                            : [...field.value, item.id];
                                        field.onChange(newValue);
                                    }}
                                >
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                                const newValue = checked
                                                    ? [...field.value, item.id]
                                                    : field.value?.filter((value) => value !== item.id);
                                                field.onChange(newValue);
                                            }}
                                            className="h-6 w-6" // Made checkbox larger
                                        />
                                    </FormControl>
                                    <div className="flex items-center space-x-3"> {/* For icon and label alignment */}
                                        {IconComponent && <IconComponent className="h-6 w-6 text-primary" />} {/* Display icon */}
                                        <FormLabel className="font-semibold text-base md:text-lg cursor-pointer"> {/* Increased font size */}
                                            {item.label}
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            );})}
                        </div>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <FormField control={form.control} name="details" render={({ field }) => (
                  <FormItem><FormLabel>Project Details</FormLabel><FormControl><Textarea placeholder="Describe your project, goals, and any specific requirements..." className="min-h-[150px]" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="budget" render={({ field }) => (
                  <FormItem><FormLabel>Estimated Budget (Optional)</FormLabel><FormControl><Input placeholder="$5,000 - $10,000" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Please review your information:</h3>
                <div className="space-y-4 rounded-md border p-4 bg-secondary text-sm">
                  <p><strong>Name:</strong> {form.getValues("name")}</p>
                  <p><strong>Email:</strong> {form.getValues("email")}</p>
                  {form.getValues("company") && <p><strong>Company:</strong> {form.getValues("company")}</p>}
                  <p><strong>Services:</strong> {services.filter(s => form.getValues("services").includes(s.id)).map(s => s.label).join(', ')}</p>
                  <p><strong>Details:</strong> <span className="whitespace-pre-wrap">{form.getValues("details")}</span></p>
                  {form.getValues("budget") && <p><strong>Budget:</strong> {form.getValues("budget")}</p>}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center py-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your request has been sent. Our team will review it and get back to you within 24 hours.</p>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
      {currentStep < 4 && (
        <CardFooter className="flex justify-between">
          {currentStep > 0 && currentStep < 4 ? (
            <Button type="button" variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          ) : <div></div>}

          {currentStep < 2 && (
            <Button type="button" onClick={processStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}

          {currentStep === 2 && (
            <Button type="button" onClick={processStep}>
              Review <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          
          {currentStep === 3 && (
            <Button type="submit" onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting} className="bg-accent hover:bg-accent/80">
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}