import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - StackNova",
  description: "Please review the terms governing your use of StackNova.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Card className="bg-background shadow-lg border border-gray-200 rounded-2xl">
        <CardContent className="space-y-6 p-8">
          <h1 className="text-4xl font-bold text-primary">📜 Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>

          <p className="text-base text-muted-foreground">
            Welcome to <strong>StackNova Technologies Pvt. Ltd.</strong> (“StackNova,” “we,” “our,” or “us”). These Terms of Service (“Terms”) govern your use of our web-based products, software solutions, and learning platform (collectively, the “Services”). By accessing or using our Services, you agree to comply with and be bound by these Terms.
          </p>

          {/* 1. Definitions */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">1. Definitions & Interpretation</h2>
            <p className="text-base text-muted-foreground">
              1.1 “StackNova”, “we”, “our”, or “us” refers to StackNova Technologies Pvt. Ltd., the owner and operator of the Services.
              <br />
              1.2 “You”, “User”, or “Customer” refers to any individual or entity accessing our platform.
            </p>
          </section>

          {/* 2. Services */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">2. Our Services</h2>
            <p className="text-base text-muted-foreground">
              StackNova offers digital learning services, developer tools, and project-based solutions for tech enthusiasts, learners, and institutions. Full service details are available on our website or through specific agreements.
            </p>
          </section>

          {/* 3. Use of Services */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">3. Use of Services</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Eligibility:</strong> You must be at least 18 years old or have consent from a legal guardian to use StackNova.</li>
              <li><strong>Account Responsibility:</strong> You are responsible for all activity under your account. Keep your login credentials secure.</li>
              <li><strong>Prohibited Use:</strong> You agree not to engage in abuse, reverse engineering, scraping, or illegal behavior using our platform.</li>
            </ul>
          </section>

          {/* 4. Payment & Fees */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">4. Payment & Fees</h2>
            <p className="text-base text-muted-foreground">
              4.1 <strong>Fees:</strong> Fees for courses, services, and subscriptions are clearly mentioned on our platform or invoices.<br />
              4.2 <strong>Payment Terms:</strong> Payment deadlines and modes will be defined in your invoice or agreement. Delays may result in service suspension.
            </p>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">5. Intellectual Property</h2>
            <p className="text-base text-muted-foreground">
              5.1 <strong>Ownership:</strong> All content, code, and learning material is owned by StackNova or its partners and protected by law.<br />
              5.2 <strong>License:</strong> You receive a limited, non-transferable license to use our content for personal or internal learning only.
            </p>
          </section>

          {/* 6. Confidentiality */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">6. Confidentiality</h2>
            <p className="text-base text-muted-foreground">
              Both parties agree not to disclose confidential information shared during project execution or user onboarding, except as required by law.
            </p>
          </section>

          {/* 7. Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">7. Data Protection</h2>
            <p className="text-base text-muted-foreground">
              Our handling of your data is guided by our <a href="/privacy" className="text-primary underline">Privacy Policy</a>. We are fully committed to protecting your privacy and security online.
            </p>
          </section>

          {/* 8. Termination */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">8. Termination</h2>
            <p className="text-base text-muted-foreground">
              StackNova may suspend or terminate your access if you breach these Terms. You may also end use of our Services at any time by written notice.
            </p>
          </section>

          {/* 9. Disclaimers & Liability */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">9. Disclaimers & Limitation of Liability</h2>
            <p className="text-base text-muted-foreground">
              Our Services are provided “as is” and “as available”. We do not guarantee uninterrupted or error-free service. Our liability is limited to the maximum extent permitted by law.
            </p>
          </section>

          {/* 10. Indemnity */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">10. Indemnification</h2>
            <p className="text-base text-muted-foreground">
              You agree to indemnify and hold harmless StackNova, its team, and affiliates from any losses, damages, or liabilities arising from your use of our platform or violation of these Terms.
            </p>
          </section>

          {/* 11. Updates to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">11. Changes to These Terms</h2>
            <p className="text-base text-muted-foreground">
              We may update these Terms as our services evolve. All updates will be posted on our website. Continued use means you accept the revised Terms.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">12. Governing Law</h2>
            <p className="text-base text-muted-foreground">
              These Terms are governed by the laws of India. Any legal matters will be resolved in the jurisdiction of Bengaluru, Karnataka, India.
            </p>
          </section>

          {/* 13. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">13. Dispute Resolution</h2>
            <p className="text-base text-muted-foreground">
              Any dispute arising from these Terms will be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996. The place of arbitration shall be Bengaluru.
            </p>
          </section>

          {/* 📞 Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">📞 Contact Us</h2>
            <p className="text-base text-muted-foreground">
              Got questions or concerns?<br />
              📧 <a href="mailto:legal@stacknova.in" className="text-primary underline">legal@stacknova.in</a><br />
              🌐 <a href="https://stacknova.in" className="text-primary underline">https://stacknova.in</a>
            </p>
          </section>

          <p className="text-center text-lg font-semibold text-primary pt-8">
            Let’s build a better tech world—with clarity, integrity, and community. 🚀
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
