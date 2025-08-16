import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SutraIQ",
  description:
    "Learn how SutraIQ Technologies Pvt. Ltd. collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Card className="bg-background shadow-lg border border-gray-200 rounded-2xl">
        <CardContent className="space-y-6 p-8">
          <h1 className="text-4xl font-bold text-primary">
            🛡️ Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: August 1, 2025
          </p>

          <p className="text-base text-muted-foreground">
            <strong>SutraIQ Technologies Pvt. Ltd.</strong> (“SutraIQ,” “we,”
            “our,” or “us”) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our web-based products, software
            solutions, and learning platform (collectively, the “Services”).
          </p>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              1. Information We Collect
            </h2>
            <p className="text-base text-muted-foreground mt-2">
              We collect information that you provide directly to us and
              information that we collect automatically when you use our
              Services.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>
                <strong>Personal Information:</strong> This includes your name,
                email address, phone number, payment information, and any other
                information you provide when you create an account, purchase a
                service, or communicate with us.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect
                information about your interactions with our Services, such as
                your IP address, browser type, operating system, pages viewed,
                and the dates/times of your visits.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies to help us understand user activity, personalize your
                experience, and improve our Services.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-muted-foreground">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
              <li>To provide, operate, and maintain our Services.</li>
              <li>To process your transactions and manage your payments.</li>
              <li>
                To communicate with you, including responding to your inquiries
                and sending you service-related updates.
              </li>
              <li>To improve and personalize our Services and user experience.</li>
              <li>
                To monitor and analyze usage and trends to enhance security and
                functionality.
              </li>
              <li>
                To comply with legal obligations and enforce our Terms of
                Service.
              </li>
            </ul>
          </section>

          {/* 3. Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-base text-muted-foreground">
              We do not sell your personal information. We may share your
              information in the following situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
              <li>
                <strong>With Service Providers:</strong> We may share data with
                third-party vendors who perform services for us, such as payment
                processing and data analytics.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> Your information may be
                transferred in connection with a merger, acquisition, or sale
                of company assets.
              </li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
            <p className="text-base text-muted-foreground">
              We implement a variety of security measures to maintain the safety
              of your personal information. However, please be aware that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure.
            </p>
          </section>

          {/* 5. Your Data Rights */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              5. Your Data Protection Rights
            </h2>
            <p className="text-base text-muted-foreground">
              Depending on your location, you may have certain rights regarding
              your personal data, including the right to access, correct, or
              request deletion of your data. To exercise these rights, please
              contact us.
            </p>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              6. Children&apos;s Privacy
            </h2>
            <p className="text-base text-muted-foreground">
              Our Services are not intended for use by individuals under the age
              of 18. We do not knowingly collect personal data from children. If
              we become aware that we have, we will take steps to delete such
              information.
            </p>
          </section>

          {/* 7. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-base text-muted-foreground">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
              Your continued use of our Services after any modification
              constitutes your acceptance of the new terms.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mt-6">📧 Contact Us</h2>
            <p className="text-base text-muted-foreground">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
              <br />
              📧{" "}
              <a
                href="mailto:legal@sutraiq.in"
                className="text-primary underline"
              >
                legal@sutraiq.in
              </a>
              <br />
              🌐{" "}
              <a
                href="https://sutraiq.in"
                className="text-primary underline"
              >
                https://sutraiq.in
              </a>
            </p>
          </section>

          <p className="text-center text-lg font-semibold text-primary pt-8">
  Your privacy is our priority. We are committed to building a better
  tech world with trust and integrity. 🚀
  <br /> 
  Thank you for choosing SutraIQ!
</p>
        </CardContent>
      </Card>
    </div>
  );
}