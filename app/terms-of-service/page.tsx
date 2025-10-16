import Link from 'next/link';
import { DocumentTextIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CompoundMeds terms of service. Review our service agreement, user responsibilities, and legal terms for pharmaceutical sourcing services.",
  openGraph: {
    title: "Terms of Service | CompoundMeds",
    description: "Review CompoundMeds terms of service and user agreement",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://compoundmeds.com/terms-of-service",
  },
};

export default function TermsOfService() {
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
            <DocumentTextIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Legal Document</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last Updated: <time dateTime="2025-01-15">January 15, 2025</time>
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and CompoundMeds, LLC ("CompoundMeds," "we," "us," or "our") regarding your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and Account Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Use Only</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are intended solely for licensed healthcare professionals, pharmacies, and medical facilities. By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You are a licensed healthcare professional or authorized representative of a licensed pharmacy or medical facility</li>
              <li>You possess all necessary licenses, permits, and credentials to purchase and compound pharmaceutical products</li>
              <li>You are at least 18 years of age</li>
              <li>You will use our products only for legitimate medical compounding purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Services</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Product Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide accurate product descriptions, specifications, and pricing. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Product information is subject to change without notice</li>
              <li>We do not warrant that product descriptions or other content is accurate, complete, or error-free</li>
              <li>Certificates of Analysis (COAs) are provided as supplied by manufacturers</li>
              <li>All products are sold for professional compounding use only</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ordering and Payment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By placing an order, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete ordering information</li>
              <li>Pay all applicable fees and charges</li>
              <li>Comply with our Net 30 payment terms or other agreed-upon payment arrangements</li>
              <li>Accept that orders are subject to acceptance and availability</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Shipping and Delivery</h3>
            <p className="text-gray-700 leading-relaxed">
              We offer free overnight shipping on qualifying orders. Delivery times are estimates only and are not guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier. You are responsible for inspecting products upon receipt and reporting any damage or discrepancies within 48 hours.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Your Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ensuring compliance with all federal, state, and local laws and regulations</li>
              <li>Maintaining all required licenses and permits</li>
              <li>Proper handling, storage, and compounding of pharmaceutical products</li>
              <li>Following current Good Manufacturing Practice (cGMP) guidelines</li>
              <li>Maintaining appropriate records and documentation</li>
              <li>Reporting adverse events as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">FDA and Regulatory Statements</h3>
            <p className="text-gray-700 leading-relaxed">
              Our products are sourced from FDA-registered manufacturers and are intended for use in pharmacy compounding under Section 503A or 503B of the Federal Food, Drug, and Cosmetic Act. Products have not been evaluated by the FDA for safety or efficacy in their compounded forms. Compounded medications are not FDA-approved.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Return Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Due to the nature of pharmaceutical products, returns are accepted only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Products damaged during shipping (must be reported within 48 hours of delivery)</li>
              <li>Products shipped in error (must be reported within 48 hours of delivery)</li>
              <li>Defective products (subject to manufacturer verification)</li>
              <li>Products that fail to meet specified COA standards (subject to third-party testing)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Non-Returnable Items</h3>
            <p className="text-gray-700 leading-relaxed">
              The following items cannot be returned: opened products, products stored improperly, products past expiration date, and custom orders. All returns require prior authorization and must be in original, unopened packaging.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of CompoundMeds or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Copy, modify, or distribute our content without prior written permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Reverse engineer or attempt to extract source code from our software</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations of Liability</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Warranty Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              OUR PRODUCTS AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties regarding accuracy, reliability, or completeness of information</li>
              <li>Warranties of non-infringement or title</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPOUNDMEDS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR PRODUCTS OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless CompoundMeds, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Your use of our products or services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Your compounding activities or patient care</li>
              <li>Any negligence or willful misconduct on your part</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Resell our products to unlicensed parties</li>
              <li>Misrepresent your credentials or authorization</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, including for violation of these Terms. Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Arbitration Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              Any dispute, claim, or controversy arising out of or relating to these Terms or your use of our services shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. The arbitration shall take place in Palm Beach County, Florida. You waive your right to a jury trial and to participate in class action lawsuits.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Miscellaneous</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and CompoundMeds regarding your use of our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this provision shall be void.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4 text-blue-50">
              If you have questions about these Terms of Service, please contact us:
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
