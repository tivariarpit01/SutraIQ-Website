import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SutraIQ",
  description:
    "How SutraIQ protects your data, privacy, and trust. Transparent, secure, and human-first.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0E1730] to-[#111A2E]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative container max-w-5xl mx-auto px-4 py-24 text-slate-200">
        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Your privacy isn’t a feature — it’s our responsibility.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Effective Date: August 1, 2025
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          <PolicyBlock
            title="Who We Are"
            gradient="from-blue-400 to-cyan-400"
          >
            SutraIQ Technologies Pvt. Ltd. builds secure, scalable and
            privacy-first digital solutions. This policy explains how we
            collect, use and protect your information.
          </PolicyBlock>

          <PolicyBlock
            title="Information We Collect"
            gradient="from-indigo-400 to-purple-400"
          >
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email, phone, billing
                details.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser, activity
                logs.
              </li>
              <li>
                <strong>Cookies:</strong> For analytics & experience
                improvement.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock
            title="How We Use Your Data"
            gradient="from-emerald-400 to-teal-400"
          >
            We use your information to deliver services, improve performance,
            process payments, communicate updates and ensure platform
            security.
          </PolicyBlock>

          <PolicyBlock
            title="Data Sharing"
            gradient="from-orange-400 to-amber-400"
          >
            We never sell your data. Limited sharing happens only with trusted
            partners, legal authorities, or during company restructuring.
          </PolicyBlock>

          <PolicyBlock
            title="Security Measures"
            gradient="from-pink-400 to-rose-400"
          >
            Industry-standard encryption, access controls and monitoring are
            used to safeguard your information.
          </PolicyBlock>

          <PolicyBlock
            title="Your Rights"
            gradient="from-sky-400 to-blue-400"
          >
            You can request access, correction or deletion of your data at any
            time by contacting us.
          </PolicyBlock>

          <PolicyBlock
            title="Children’s Privacy"
            gradient="from-violet-400 to-fuchsia-400"
          >
            Our services are not intended for individuals under 18. We do not
            knowingly collect children’s data.
          </PolicyBlock>

          <PolicyBlock
            title="Policy Updates"
            gradient="from-slate-400 to-slate-300"
          >
            We may update this policy occasionally. Any changes will be
            reflected on this page.
          </PolicyBlock>

          <PolicyBlock
            title="Contact Us"
            gradient="from-yellow-400 to-orange-400"
          >
            <p>
              📧{" "}
              <a
                href="mailto:legal@sutraiq.in"
                className="underline text-yellow-300"
              >
                info@sutraiq.com
              </a>
            </p>
            <p>
              🌐{" "}
              <a
                href="https://sutraiq.com"
                className="underline text-yellow-300"
              >
                sutraiq.com
              </a>
            </p>
          </PolicyBlock>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center mt-20 text-lg font-semibold text-slate-300">
          Built with trust. Powered by SutraIQ 🚀
        </p>
      </div>
    </section>
  );
}

/* ---------------- BLOCK COMPONENT ---------------- */

function PolicyBlock({
  title,
  gradient,
  children,
}: {
  title: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex gap-6">
      {/* GRADIENT BAR */}
      <div
        className={`w-1 rounded-full bg-gradient-to-b ${gradient}`}
      />

      {/* CONTENT */}
      <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <div className="text-slate-400 leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
