import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Create a simple component for the loading state
const FormLoading = () => (
  <div className="text-center text-muted-foreground">Loading form...</div>
);


const GetStartedForm = dynamic(() =>
  import('@/components/GetStartedForm').then((mod) => mod.GetStartedForm)
);

export default function GetStartedPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Let's Build Something Amazing
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            Tell us about your project. This information will help us understand your needs and prepare for our initial conversation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Use Suspense to show a fallback while the form loads */}
            <Suspense fallback={<FormLoading />}>
              <GetStartedForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}