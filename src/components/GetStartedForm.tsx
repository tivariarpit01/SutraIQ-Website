'use client';

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";

const services = [
  { id: "webDev", label: "Web Development" },
  { id: "appDev", label: "App Development" },
  { id: "ai", label: "AI Solutions" },
  { id: "cloud", label: "Cloud Support" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "bpo", label: "BPO Services" },
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

  const processStep = async () => {
    let result = false;
    if (currentStep === 0) {
      result = await form.trigger(["name", "email", "company"]);
    } else if (currentStep === 1) {
      result = await form.trigger("services");
    } else if (currentStep === 2) {
      result = await form.trigger("details");
    }

    if (result) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Quote Request Submitted!",
      description: "Thank you! We've received your project details and will be in touch shortly.",
    });
    setCurrentStep(4); // Move to final step
  }

  const steps = [
    { title: "Contact Information", fields: ["name", "email", "company"] },
    { title: "Services Needed", fields: ["services"] },
    { title: "Project Details", fields: ["details", "budget"] },
    { title: "Review & Submit", fields: [] },
    { title: "Thank You!", fields: [] },
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
              <FormField control={form.control} name="services" render={() => (
                <FormItem>
                  <div className="mb-4"><FormLabel className="text-base">What services are you interested in?</FormLabel><FormDescription>Select all that apply.</FormDescription></div>
                  {services.map((item) => (
                    <FormField key={item.id} control={form.control} name="services" render={({ field }) => (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0 my-4">
                        <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                          return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                        }} /></FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    )} />
                  ))}
                  <FormMessage />
                </FormItem>
              )} />
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

            {/* This empty div is submitted by the form */}
            {currentStep < 4 && <div></div>}
          </form>
        </Form>
      </CardContent>
      {currentStep < 4 && (
        <CardFooter className="flex justify-between">
            {currentStep > 0 && currentStep < 4 ? (
                <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
            ) : <div></div>}

            {currentStep < 2 && (
                <Button onClick={processStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}
            
            {currentStep === 2 && (
                 <Button onClick={processStep}>
                    Review <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}

            {currentStep === 3 && (
                <Button onClick={form.handleSubmit(onSubmit)} className="bg-accent hover:bg-accent/80">
                    Submit Request <Send className="ml-2 h-4 w-4" />
                </Button>
            )}
        </CardFooter>
      )}
    </Card>
  );
}
