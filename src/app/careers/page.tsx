// src/app/page.tsx (or the relevant page where you want to show the form)
import { JobApplicationForm } from "@/components/JobApplicationForm"; // Import the new component

export default function ApplicationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative">
      <JobApplicationForm />
    </div>
  );
}
