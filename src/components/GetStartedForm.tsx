"use client";
import { useState, useEffect } from "react";
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  ArrowLeft,
  Send,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Megaphone,
  Building,
} from "lucide-react";

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
  details: z.string().min(20, "Please provide more details."),
  budget: z.string().optional(),
});
const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSnapshot, setFormSnapshot] = useState<z.infer<typeof formSchema> | null>(null);
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
  });

  useEffect(() => {
    if (currentStep === 3) {
      setFormSnapshot(form.getValues());
    }
  }, [currentStep, form]);

  const steps = [
    { title: "Contact Information" },
    { title: "Services Needed" },
    { title: "Project Details" },
    { title: "Review & Submit" },
    { title: "Thank You!" },
  ];

  const progress = (currentStep / (steps.length - 2)) * 100;

  const nextStep = async () => {
    let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];

    if (currentStep === 0) fieldsToValidate = ["name", "email", "company"];
    if (currentStep === 1) fieldsToValidate = ["services"];
    if (currentStep === 2) fieldsToValidate = ["details", "budget"];

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:9002/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Server error");

      toast({
        title: "Request Sent!",
        description: "We'll reach out within 24 hours.",
      });

      setCurrentStep(4);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          {steps[currentStep].title}
        </CardTitle>
        {currentStep < 3 && <Progress value={progress} className="mt-4" />}
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            id="get-started-form" // <-- FIX: Added ID
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {currentStep === 0 && (
              <>
                <FormField name="name" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="email" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="company" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </>
            )}

            {currentStep === 1 && (
              <FormField name="services" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Services</FormLabel>
                  <FormDescription>Pick what applies.</FormDescription>
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <FormItem
                        key={s.id}
                        className="flex flex-row items-start space-x-3 space-y-0 p-3 border rounded-md cursor-pointer bg-muted hover:bg-muted/70"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(s.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, s.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== s.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <div className="flex items-center space-x-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <FormLabel className="font-normal cursor-pointer">
                            {s.label}
                          </FormLabel>
                        </div>
                      </FormItem>
                    );
                  })}
                  <FormMessage />
                </FormItem>
              )} />
            )}

            {currentStep === 2 && (
              <>
                <FormField name="details" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="budget" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget (Optional)</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4 bg-secondary p-4 rounded-md text-sm">
                {formSnapshot ? (
                  <>
                    <p><strong>Name:</strong> {formSnapshot.name}</p>
                    <p><strong>Email:</strong> {formSnapshot.email}</p>
                    {formSnapshot.company && <p><strong>Company:</strong> {formSnapshot.company}</p>}
                    <p><strong>Services:</strong> {services.filter(s => formSnapshot.services.includes(s.id)).map(s => s.label).join(", ")}</p>
                    <p><strong>Details:</strong> {formSnapshot.details}</p>
                    {formSnapshot.budget && <p><strong>Budget:</strong> {formSnapshot.budget}</p>}
                  </>
                ) : (
                  <p>Loading review details...</p>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center py-8">
                <h3 className="font-headline text-2xl text-primary mb-2">Thank You!</h3>
                <p>Your project info has been received. We'll contact you shortly.</p>
              </div>
            )}
          </form>
        </Form>
      </CardContent>

      {currentStep < 4 && (
        <CardFooter className="flex justify-between">
          {currentStep > 0 ? (
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          ) : <div />}

          {currentStep < 3 && (
            <Button onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}

          {currentStep === 3 && (
            <Button
              type="submit"
              form="get-started-form" // <-- FIX: Linked to form ID
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}