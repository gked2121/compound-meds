'use client';

import Link from 'next/link';
import { ArrowLeftIcon, HeartIcon, ArrowTrendingUpIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ClinicalApplicationsPage() {
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
          <div className="absolute top-20 left-[10%] w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] bg-blue-400/30 rounded-full filter blur-3xl animate-blob-slow"></div>
          <div className="absolute bottom-20 right-[15%] w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] bg-purple-400/30 rounded-full filter blur-3xl animate-blob-slow animation-delay-4000"></div>
          <div className="absolute top-1/3 right-[20%] w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] bg-cyan-400/25 rounded-full filter blur-3xl animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <HeartIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">CLINICAL APPLICATIONS</span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Therapies & Conditions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our ingredients and medications support evidence-based protocols across multiple specialties</p>
          </motion.div>

          {/* Therapies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ArrowTrendingUpIcon,
                title: 'Weight Management & Metabolic Health',
                description: 'GLP-1s: Semaglutide, Tirzepatide, Liraglutide, Dulaglutide & more – helping patients achieve lasting transformation'
              },
              {
                icon: HeartIcon,
                title: 'Hormone & Sexual Health',
                description: 'Testosterone, Enclomiphene, PT-141, Tadalafil & more – restoring balance, confidence, and intimacy'
              },
              {
                icon: SparklesIcon,
                title: 'Anti-Aging & Cellular Health',
                description: 'NAD+ (cellular energy), Tesamorelin (growth hormone), Sermorelin (GH secretagogue), CJC-1295 & more – supporting vitality, performance, and longevity'
              },
              {
                icon: BoltIcon,
                title: 'Specialized Compounding',
                description: 'Hair Loss, Dermatology, IV Nutrition, BLT Cream & more – custom therapies for unique patient needs'
              }
            ].map((therapy, index) => (
              <motion.div
                key={therapy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 flex items-center justify-center mb-6 shadow-md">
                  <therapy.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{therapy.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{therapy.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl p-12 border border-blue-100/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Enhance Your Practice?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Partner with CompoundMeds to access premium pharmaceutical ingredients and medications for your patients
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
                <ArrowLeftIcon className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </motion.div>
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
