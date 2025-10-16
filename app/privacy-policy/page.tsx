import Link from 'next/link';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CompoundMeds privacy policy. Learn how we collect, use, and protect your personal information. HIPAA compliant pharmaceutical sourcing.",
  openGraph: {
    title: "Privacy Policy | CompoundMeds",
    description: "Learn how CompoundMeds protects your privacy and handles your data",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://compoundmeds.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Legal Document</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: <time dateTime="2025-01-15">January 15, 2025</time>
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              CompoundMeds ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name and contact information (email address, phone number, business address)</li>
              <li>Business information (pharmacy or clinic name, license numbers)</li>
              <li>Account credentials</li>
              <li>Payment and billing information</li>
              <li>Order history and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our website, products, and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Maintain the security and integrity of our systems</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping providers, etc.)</li>
              <li><strong>Business Partners:</strong> Trusted partners who assist in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we securely delete or anonymize it.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4 text-blue-50">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-blue-50">
              <p><strong className="text-white">Email:</strong> hello@compoundmeds.com</p>
              <p><strong className="text-white">Phone:</strong> (561) 223-8133</p>
              <p><strong className="text-white">Address:</strong> CompoundMeds, LLC</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 CompoundMeds. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Terms of Service
              </Link>
              <Link href="/hipaa-compliance" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
