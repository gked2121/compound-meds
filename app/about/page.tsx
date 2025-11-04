import Link from 'next/link';
import { ArrowLeftIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Compound Meds, a Florida-based pharmaceutical sourcing partner connecting pharmacies and clinics with verified suppliers nationwide.",
  openGraph: {
    title: "About Us | Compound Meds",
    description: "Learn about our mission to simplify pharmaceutical sourcing for pharmacies and clinics",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://compoundmeds.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/40">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
      <main className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[15%] w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] bg-blue-400/28 rounded-full filter blur-3xl animate-blob-slow"></div>
          <div className="absolute bottom-20 right-[10%] w-[170px] h-[170px] sm:w-[260px] sm:h-[260px] lg:w-[360px] lg:h-[360px] bg-purple-400/30 rounded-full filter blur-3xl animate-blob-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 right-[25%] w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] lg:w-[320px] lg:h-[320px] bg-cyan-400/26 rounded-full filter blur-3xl animate-blob-slow animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <CheckCircleIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700 tracking-wide">OUR MISSION</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">About Compound Meds</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your pharmaceutical sourcing partner connecting you with verified suppliers nationwide
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl p-10 mb-16 border border-blue-100/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Compound Meds is a Florida-based pharmaceutical sourcing partner that connects licensed pharmacies and clinics with verified suppliers of APIs, sterile components, and compounded medications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We do not manufacture, compound, or directly dispense pharmaceutical products. Instead, we facilitate connections with independent, licensed manufacturers, FDA-registered pharmaceutical suppliers, and state-licensed compounding pharmacies (503A and 503B facilities).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our role is to simplify pharmaceutical sourcing by providing access to verified suppliers, complete documentation, and reliable support—allowing healthcare providers to focus on patient care while we handle the complexity of supplier vetting and coordination.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-blue-50">
              To simplify pharmaceutical sourcing for pharmacies and clinics by connecting them with verified, compliant suppliers—providing complete documentation, reliable access, and dedicated support so healthcare providers can focus on exceptional patient care.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 Compound Meds, LLC. All rights reserved.</p>
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
