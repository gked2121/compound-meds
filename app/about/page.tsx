import Link from 'next/link';
import { ArrowLeftIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CompoundMeds, Florida-based pharmaceutical sourcing experts serving 500+ pharmacies and clinics nationwide with FDA-registered APIs and quality medications.",
  openGraph: {
    title: "About Us | CompoundMeds",
    description: "Meet the CompoundMeds team and learn about our mission to transform pharmaceutical sourcing",
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
              <UserGroupIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700 tracking-wide">MEET OUR TEAM</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">About CompoundMeds</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Florida-based pharmaceutical sourcing experts serving pharmacies and clinics nationwide
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl p-10 mb-16 border border-blue-100/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CompoundMeds is a Delray Beach, Florida-based pharmaceutical supplier committed to solving the industry's most persistent challenges: unreliable sourcing, quality concerns, and cash flow constraints.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With nationwide coverage and products in stock stateside, we eliminate customs delays and provide pharmacies and clinics with the financial flexibility and product authenticity they need to serve their patients confidently.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">10+</div>
                  <div className="text-sm font-semibold text-gray-600">Years Combined Experience</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
                  <div className="text-sm font-semibold text-gray-600">Pharmacy Partners</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">50</div>
                  <div className="text-sm font-semibold text-gray-600">States Served</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                  <div className="text-sm font-semibold text-gray-600">FDA Registered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Tyler Levine */}
              <div className="text-center">
                <div className="mb-6 relative inline-block">
                  <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-xl border-4 border-white">
                    <div className="text-6xl font-black text-blue-600">TL</div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Co-Founder
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tyler Levine</h3>
                <p className="text-blue-600 font-semibold mb-4">Pharmaceutical Industry Expert</p>
                <p className="text-gray-700 leading-relaxed">
                  With over 10 years of pharmaceutical industry experience, Tyler brings deep expertise in pharmaceutical sourcing, regulatory compliance, and supply chain optimization. Based in South Florida, he's dedicated to transforming how pharmacies access quality pharmaceutical ingredients.
                </p>
              </div>

              {/* Tiffany Doe */}
              <div className="text-center">
                <div className="mb-6 relative inline-block">
                  <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-xl border-4 border-white">
                    <div className="text-6xl font-black text-purple-600">TD</div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Co-Founder
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tiffany Doe</h3>
                <p className="text-purple-600 font-semibold mb-4">Pharmaceutical Industry Expert</p>
                <p className="text-gray-700 leading-relaxed">
                  Tiffany's 10+ years in the pharmaceutical industry has established her as a trusted advisor in pharmaceutical compounding and quality assurance. Operating from South Florida, she ensures CompoundMeds maintains the highest standards of product integrity and customer service.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-blue-50">
              To empower pharmacies and healthcare providers with reliable access to premium pharmaceutical ingredients, backed by transparent pricing, flexible financing, and unwavering commitment to quality—so they can focus on what matters most: exceptional patient care.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
