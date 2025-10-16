'use client';

import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  TrophyIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  SparklesIcon,
  BoltIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BeakerIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid, StarIcon as StarSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote: "We were paying too much for vials. Compound Meds cut our costs almost in half and the quality is even better. Hard to beat saving money and getting better quality.",
    initials: "KM",
    name: "K.M.",
    title: "Pharmacy Director, 503B Compounding Pharmacy in Texas",
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    initialsColor: "text-blue-600"
  },
  {
    quote: "After a bad experience with another GLP-1 supplier that wasn't legit, CM connected us with an FDA Green List source, and now I feel confident in the quality and the reliability of supply.",
    initials: "DR",
    name: "D.R.",
    title: "PharmD, Multi-Location Clinic in California",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    initialsColor: "text-purple-600"
  },
  {
    quote: "Ordering/shipping is so simple and the meds come quick. Everything shows up the way it should. Our patients are happy and so are we.",
    initials: "SL",
    name: "S.L.",
    title: "Medical Director, Med Spa in Florida",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    initialsColor: "text-teal-600"
  }
];

// Product data
const products = [
  {
    image: '/images/compounded-meds.png',
    alt: 'Compounded Medications - labeled vials including GLP-1, NAD+, and PT-141 ready for clinical use',
    title: 'Compounded Meds',
    subtitle: 'Ready-to-Ship Solutions',
    description: 'Finished compounded medications—available in multiple formulations—shipped to your clinic or patients.',
    items: ['Tirzepatide', 'Semaglutide', 'PT-141', 'Oxytocin', 'Glutathione', 'NAD+'],
    iconColor: 'purple',
    gradient: 'from-purple-600 via-purple-700 to-purple-800'
  },
  {
    image: '/images/api-powder.png',
    alt: 'Pharmaceutical Grade APIs - high-purity white pharmaceutical powder for compounding, including FDA Green List GLP-1 compounds',
    title: 'Pharmaceutical APIs',
    subtitle: 'FDA-Registered Sources',
    description: 'Direct-from-manufacturer APIs with verified COAs showing 102%+ assay and 95%+ peptide content. Third-party testing available.',
    items: ['Semaglutide (Ozempic)', 'Tirzepatide (Mounjaro)', 'NAD+', 'Tesamorelin', 'Sermorelin', 'B12', 'Oxytocin'],
    iconColor: 'blue',
    gradient: 'from-blue-600 via-blue-700 to-blue-800'
  },
  {
    image: '/images/sterile-vials.png',
    alt: 'Sterile Vials & Components - US-processed clear and amber vials meeting FDA compliance and cGMP certification standards',
    title: 'Sterile Vials',
    subtitle: 'US-Processed & Certified',
    description: 'High-quality sterile vials processed in the US to the highest pharmaceutical standards.',
    items: ['FDA-compliant processing', 'Full documentation', 'Reliable supply', 'cGMP certified facilities', 'Complete traceability'],
    iconColor: 'green',
    gradient: 'from-green-600 via-green-700 to-green-800'
  }
];

function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const getIconComponent = (color: string) => {
    switch (color) {
      case 'purple': return ShoppingBagIcon;
      case 'blue': return BeakerIcon;
      case 'green': return ShieldCheckIcon;
      default: return CheckCircleIcon;
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product, index) => {
            const IconComponent = getIconComponent(product.iconColor);
            return (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_10px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35),0_15px_40px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 h-auto sm:h-[780px] flex flex-col"
                >
                  <div className="relative h-64 sm:h-80 lg:h-96 flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-gray-50">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                      <div className="bg-white/98 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-[0_8px_30px_-5px_rgba(0,0,0,0.3)]">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 drop-shadow-sm">{product.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{product.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
                    <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-3 sm:space-y-4 flex-1">
                      {product.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start text-gray-700 text-sm sm:text-base">
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 rounded-full bg-${product.iconColor}-100 flex items-center justify-center mr-3 sm:mr-4 mt-0.5`}>
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 text-${product.iconColor}-600`} />
                          </div>
                          <span className="flex-1">{item}</span>
                        </div>
                      ))}
                      {product.iconColor === 'blue' && (
                        <div className="flex items-center text-blue-600 font-semibold text-sm sm:text-base pt-2">
                          <BoltIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                          <span>+ More Available</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-[calc(50%+4px)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2),0_5px_15px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.25),0_8px_20px_-6px_rgba(0,0,0,0.2)]"
        aria-label="Previous product"
      >
        <ChevronLeftIcon className="w-7 h-7" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-[calc(50%+4px)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2),0_5px_15px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.25),0_8px_20px_-6px_rgba(0,0,0,0.2)]"
        aria-label="Next product"
      >
        <ChevronRightIcon className="w-7 h-7" />
      </button>
    </div>
  );
}

function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarSolid key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white tracking-wider">5.0 RATING</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of pharmacies and clinics who've transformed their sourcing with CompoundMeds
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 sm:p-14 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.5),0_20px_60px_-30px_rgba(0,0,0,0.3)] border border-white/30"
                  >
                    {/* Decorative quote mark */}
                    <div className="absolute -top-6 left-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-6">
                        <span className="text-4xl text-white font-serif">"</span>
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex justify-center mb-8 gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <StarSolid className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial quote */}
                    <p className="text-2xl sm:text-3xl text-gray-800 mb-12 leading-relaxed font-medium text-center relative">
                      <span className="text-blue-600 text-5xl font-serif absolute -left-2 -top-4">"</span>
                      {testimonial.quote}
                      <span className="text-blue-600 text-5xl font-serif">"</span>
                    </p>

                    {/* Author info with enhanced styling */}
                    <div className="flex items-center justify-center pt-8 border-t border-gray-200">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center font-black text-3xl shadow-xl border-4 border-white mr-6"
                          style={{ color: testimonial.initialsColor.includes('blue') ? '#2563eb' : testimonial.initialsColor.includes('purple') ? '#9333ea' : '#10b981' }}>
                          {testimonial.initials}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <CheckCircleIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-900 font-bold text-2xl mb-1">{testimonial.name}</p>
                        <p className="text-gray-600 text-base font-semibold mb-1">{testimonial.title}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-500 font-medium">Verified Customer</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-b-3xl"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-[calc(50%+4px)] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-7 h-7" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-[calc(50%+4px)] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'therapies', label: 'Therapies' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id === 'hero' ? 'main-content' : section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/40 relative overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalOrganization",
                "@id": "https://compoundmeds.com/#organization",
                "name": "CompoundMeds",
                "alternateName": "Compound Meds",
                "url": "https://compoundmeds.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://compoundmeds.com/logo.png"
                },
                "description": "Premium pharmaceutical sourcing partner for pharmacies and clinics. FDA-registered APIs, sterile vials, and compounded medications with reliable supply and transparent pricing.",
                "telephone": "+1-561-223-8133",
                "email": "hello@compoundmeds.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US",
                  "addressRegion": "FL"
                },
                "sameAs": [
                  "https://compoundmeds.com"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                },
                "medicalSpecialty": [
                  "Pharmacy",
                  "Compounding Pharmacy",
                  "Clinical Pharmacy"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://compoundmeds.com/#website",
                "url": "https://compoundmeds.com",
                "name": "CompoundMeds",
                "description": "Premium pharmaceutical sourcing for pharmacies and clinics",
                "publisher": {
                  "@id": "https://compoundmeds.com/#organization"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "WebPage",
                "@id": "https://compoundmeds.com/#webpage",
                "url": "https://compoundmeds.com",
                "name": "CompoundMeds | Premium Pharmaceutical Sourcing for Pharmacies & Clinics",
                "isPartOf": {
                  "@id": "https://compoundmeds.com/#website"
                },
                "about": {
                  "@id": "https://compoundmeds.com/#organization"
                },
                "description": "Trusted pharmaceutical sourcing partner for 500+ pharmacies and clinics. FDA-registered APIs, sterile vials, and compounded medications. Free overnight shipping, Net 30 terms, no minimums.",
                "inLanguage": "en-US"
              },
              {
                "@type": "Service",
                "serviceType": "Pharmaceutical Supply",
                "provider": {
                  "@id": "https://compoundmeds.com/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Pharmaceutical Products",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Drug",
                        "name": "Semaglutide (GLP-1)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Drug",
                        "name": "Tirzepatide (GLP-1)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Drug",
                        "name": "NAD+"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Sterile Vials"
                      }
                    }
                  ]
                }
              }
            ]
          })
        }}
      />
      {/* Rich multi-layered animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-cyan-50/40"></div>

        {/* Animated blob gradients - larger and more prominent */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-purple-400 via-pink-300 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-indigo-400 via-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-1/3 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Subtle noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      </div>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Vertical Progress Navigation Bar - Sleek Redesign */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
      >
        <div className="relative">
          {/* Background track */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

          {/* Active indicator track */}
          <motion.div
            className="absolute left-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"
            style={{
              top: `${(sections.findIndex(s => s.id === activeSection) / sections.length) * 100}%`,
              height: `${100 / sections.length}%`
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          <nav aria-label="Page sections" className="relative flex flex-col">
            {sections.map((section, index) => (
              <motion.a
                key={section.id}
                href={`#${section.id === 'hero' ? 'main-content' : section.id}`}
                className="group relative py-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dot indicator */}
                <div className="relative flex items-center">
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-blue-600 ring-4 ring-blue-600/20'
                        : 'bg-gray-400 group-hover:bg-blue-500 group-hover:ring-2 group-hover:ring-blue-500/20'
                    }`}
                    animate={{
                      scale: activeSection === section.id ? 1.3 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Label - appears on hover or when active */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    className={`absolute left-6 text-xs font-semibold whitespace-nowrap px-3 py-1.5 rounded-lg backdrop-blur-md transition-all duration-300 ${
                      activeSection === section.id
                        ? 'opacity-100 translate-x-0 bg-blue-600 text-white shadow-lg'
                        : 'opacity-0 -translate-x-2 bg-white/90 text-gray-700 shadow-md group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    {section.label}
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/98 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1),0_2px_10px_-2px_rgba(0,0,0,0.05)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3" aria-label="CompoundMeds Home">
                <Image
                  src="/logo.png"
                  alt="CompoundMeds Logo"
                  width={100}
                  height={100}
                  className="object-contain rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  priority
                  style={{ padding: '0' }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#products" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-3 py-2 rounded-xl font-semibold flex items-center gap-1.5 group">
                <CubeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Products</span>
              </a>
              <Link href="/clinical-applications" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-3 py-2 rounded-xl font-semibold flex items-center gap-1.5 group">
                <HeartIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Clinical Applications</span>
              </Link>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-3 py-2 rounded-xl font-semibold flex items-center gap-1.5 group">
                <TrophyIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Why Us</span>
              </a>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-3 py-2 rounded-xl font-semibold flex items-center gap-1.5 group">
                <UserGroupIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>About</span>
              </Link>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-3 py-2 rounded-xl font-semibold flex items-center gap-1.5 group">
                <SparklesIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>FAQ</span>
              </a>
            </div>

            {/* Desktop CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-6 py-2.5 rounded-xl shadow-[0_8px_25px_-5px_rgba(59,130,246,0.5),0_4px_12px_-3px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_40px_-8px_rgba(59,130,246,0.6),0_8px_20px_-5px_rgba(147,51,234,0.4)] transition-all duration-300 font-bold text-sm relative overflow-hidden group"
              aria-label="Get started with CompoundMeds - Request a consultation"
            >
              <span className="relative z-10 drop-shadow-sm">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  Products
                </a>
                <Link
                  href="/clinical-applications"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  Clinical Applications
                </Link>
                <a
                  href="#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  Why Us
                </a>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  About
                </Link>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg font-medium"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg text-center font-bold"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Premium Redesign */}
      <section id="main-content" className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center" tabIndex={-1}>
        {/* Subtle animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[8%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px] bg-blue-400/25 rounded-full filter blur-3xl animate-blob-slow"></div>
          <div className="absolute bottom-1/4 right-[12%] w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] bg-purple-400/30 rounded-full filter blur-3xl animate-blob-slow animation-delay-4000"></div>
          <div className="absolute top-1/2 right-[30%] w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] bg-cyan-400/20 rounded-full filter blur-3xl animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white backdrop-blur-md border border-blue-200/50 rounded-full px-5 py-2.5 mb-10 shadow-lg"
              >
                <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-700 tracking-wide">TRUSTED BY 500+ PHARMACIES</span>
              </motion.div>

              {/* Main Headline - Fixed spacing and overlap */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.15] tracking-tight mb-10">
                Premium
                <br />
                <span className="relative inline-block mt-2 mb-3">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Pharmaceutical
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm"></div>
                </span>
                <br />
                Solutions
              </h1>

              {/* Value Proposition - Better spacing */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                FDA-registered APIs, sterile vials, and compounded medications.
              </p>
              <p className="text-lg text-blue-700 font-bold mb-12 max-w-xl">
                Free overnight delivery • Net 30 terms • No minimums
              </p>

              {/* Key Benefits Grid - Unified colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-xl">
                {[
                  { icon: BoltIcon, text: 'Free Overnight Delivery' },
                  { icon: CircleStackIcon, text: 'In Stock Stateside' },
                  { icon: ShieldCheckIcon, text: 'FDA Registered' },
                  { icon: ArrowTrendingUpIcon, text: 'Net 30 Payment Terms' }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <benefit.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-900">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-[0_12px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 drop-shadow-sm">Request Pricing</span>
                  <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="#products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl text-base font-bold shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_45px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 border-2 border-gray-200 hover:border-blue-600 flex items-center justify-center gap-2"
                >
                  <span>View Catalog</span>
                  <BeakerIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Stats Cards - Unified styling */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Pharmacies Served', value: '500+', icon: UserGroupIcon },
                  { label: 'FDA Registered', value: '100%', icon: ShieldCheckIcon },
                  { label: 'Same-Day Ship', value: '99%', icon: BoltIcon },
                  { label: 'States Covered', value: '50', icon: CircleStackIcon }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden group cursor-default hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                    <stat.icon className="w-10 h-10 text-blue-600 mb-5 relative z-10" />
                    <div className="text-4xl font-black text-gray-900 mb-2 relative z-10">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide relative z-10">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-7 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-3">
                    <StarIcon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <StarIcon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <StarIcon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <StarIcon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <StarIcon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  </div>
                  <p className="text-white font-semibold text-base mb-2 leading-snug">"40% cost savings, zero quality compromise"</p>
                  <p className="text-blue-100 text-sm font-medium">— Dr. Sarah Mitchell, Wellness Clinic</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Unified styling */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: BoltIcon, label: 'Free Overnight Shipping' },
              { icon: ArrowTrendingUpIcon, label: 'Net 30 Terms' },
              { icon: CircleStackIcon, label: 'In Stock Stateside' },
              { icon: ShieldCheckIcon, label: 'FDA Registered' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:shadow-xl transition-all duration-300 shadow-lg border border-blue-100/50">
                  <item.icon className="w-9 h-9 text-blue-600" />
                </div>
                <span className="text-sm font-bold text-gray-900">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Supply - Product Carousel */}
      <section id="products" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/40 to-purple-50/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <CubeIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">OUR PRODUCT LINE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">What We Supply</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium pharmaceutical solutions designed for your practice's success</p>
          </motion.div>

          {/* Product Carousel */}
          <ProductCarousel />

          <div className="text-center mt-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_10px_35px_-5px_rgba(59,130,246,0.4),0_5px_15px_-3px_rgba(147,51,234,0.3)] hover:shadow-[0_20px_50px_-8px_rgba(59,130,246,0.5),0_10px_25px_-5px_rgba(147,51,234,0.4)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 drop-shadow-sm">Get Started Today</span>
              <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Unified */}
      <TestimonialsCarousel />

      {/* The Peptide Revolution Callout */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>

        {/* Animated blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[700px] lg:h-[700px] bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-cyan-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 mb-10 shadow-2xl"
            >
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-bold text-white tracking-wider">THE FUTURE OF HEALTHCARE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
            >
              We're at the Frontier of
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  Proactive Healthcare
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-white/20 blur-xl"></div>
              </span>
            </motion.h2>

            {/* Content Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-left"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <HeartIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Revolutionizing Medicine</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Peptides are transforming healthcare—from GLP-1s revolutionizing weight management to NAD+ supporting cellular health. This isn't reactive medicine anymore.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-left"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <TrophyIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Lead the Change</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Healthcare providers are realizing peptides represent the next frontier. We supply you with verified, authentic pharmaceutical-grade ingredients to lead that change.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-12 py-6 rounded-2xl text-xl font-black hover:shadow-[0_20px_70px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 group"
              >
                <span>Join the Revolution</span>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <p className="text-sm text-blue-200 mt-6 font-medium">
                Be proactive with your patients' health
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us - Unified */}
      <section id="why-us" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/40 to-purple-50/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <TrophyIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">OUR DIFFERENTIATORS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Why Choose CompoundMeds</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your all-in-one pharmaceutical sourcing partner—delivering quality, compliance, and cost savings for pharmacies and clinics nationwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BoltIcon,
                title: 'Free Overnight Shipping',
                description: 'Order today, receive tomorrow. All products in stock stateside—no customs delays tying up your capital for months.'
              },
              {
                icon: ArrowTrendingUpIcon,
                title: 'Net 30 Terms, No Minimums',
                description: 'Order as little as 1 gram with flexible payment terms. High credit limits to protect your cash flow and inventory needs.'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Verified COAs & Anti-Fraud Education',
                description: '102%+ assay, 95%+ peptide content with third-party testing available. We teach you how to detect fraudulent COAs flooding the market.'
              },
              {
                icon: TrophyIcon,
                title: 'FDA-Registered Manufacturers',
                description: 'Direct from FDA-registered (some FDA-approved) sources. No repackaging, no counterfeit APIs—just authentic pharmaceutical-grade ingredients.'
              },
              {
                icon: CircleStackIcon,
                title: 'Products in Stock Stateside',
                description: 'APIs available in 36 states (expanding to 50), vials in all 50. Immediate fulfillment, not 2-3 months in customs limbo.'
              },
              {
                icon: CheckCircleIcon,
                title: 'Competitive Pricing, Massive Margins',
                description: 'USA-manufactured vials at import prices. Premium quality without premium costs—protecting your margins and your patients.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Commitment */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Subtle animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[12%] w-[170px] h-[170px] sm:w-[270px] sm:h-[270px] lg:w-[380px] lg:h-[380px] bg-purple-400/30 rounded-full filter blur-3xl animate-blob-slow"></div>
          <div className="absolute bottom-20 left-[18%] w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] lg:w-[340px] lg:h-[340px] bg-cyan-400/28 rounded-full filter blur-3xl animate-blob-slow animation-delay-4000"></div>
          <div className="absolute top-1/2 left-[8%] w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] lg:w-[320px] lg:h-[320px] bg-blue-400/25 rounded-full filter blur-3xl animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <CheckCircleIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">OUR PROMISE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We keep sourcing simple — improving margins while delivering the quality your patients expect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Complete Healthcare Supply Solution',
                description: 'APIs and sterile vials for compounding operations, plus finished medications that give healthcare providers better options for their patients - all through one relationship.'
              },
              {
                title: 'Proactive Order Management',
                description: 'We stay ahead of your needs, avoid delays, and eliminate uncertainty so you can focus on patient care instead of supply chain coordination.'
              },
              {
                title: 'Direct Communication & Transparent Pricing',
                description: 'Quick responses, no phone tag, zero hidden fees or surprise markups. You always know where you stand.'
              }
            ].map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-gray-200 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 flex items-center justify-center mb-6 shadow-md">
                  <CheckCircleIcon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Unified */}
      <section id="faq" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/40 to-purple-50/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <SparklesIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700 tracking-wide">HAVE QUESTIONS?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to know about partnering with CompoundMeds for your pharmaceutical sourcing needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {[
              {
                category: 'Quality & Compliance',
                icon: ShieldCheckIcon,
                questions: [
                  {
                    question: 'How do you ensure product quality and authenticity?',
                    answer: 'Every product comes with a manufacturer Certificate of Analysis (COA) from FDA-compliant facilities operating under cGMP guidelines. Our GLP-1 APIs show 102%+ assay and 95%+ peptide content. We source exclusively from FDA Green List manufacturers and offer third-party lab testing for verification. We also educate clients on detecting fraudulent COAs flooding the market.'
                  },
                  {
                    question: 'Are your products FDA-registered and compliant?',
                    answer: 'Yes. We partner exclusively with FDA-registered manufacturers (some FDA-approved). All facilities operate under cGMP certification and meet pharmaceutical-grade standards. GLP-1 compounds are sourced from FDA Green List manufacturers only—no repackaging, no counterfeit APIs.'
                  }
                ]
              },
              {
                category: 'Ordering & Logistics',
                icon: BoltIcon,
                questions: [
                  {
                    question: 'What are your minimum order requirements and payment terms?',
                    answer: 'We offer Net 30 payment terms with NO minimum order requirements—you can order as little as 1 gram. We provide high credit limits to protect your cash flow and inventory needs. This flexibility lets you test products without tying up capital.'
                  },
                  {
                    question: 'How fast is shipping and where do products ship from?',
                    answer: 'Free overnight shipping on all orders. Products are in stock stateside—not stuck in customs for 2-3 months. APIs are available in 36 states (expanding to 50), vials in all 50 states. Order today, receive tomorrow—no customs delays tying up your capital.'
                  }
                ]
              },
              {
                category: 'Products & Availability',
                icon: CubeIcon,
                questions: [
                  {
                    question: 'What products do you offer?',
                    answer: 'We offer pharmaceutical-grade APIs (Semaglutide, Tirzepatide, NAD+, Tesamorelin, Sermorelin, B12, Oxytocin), sterile vials and components, and compounded medications ready for clinical use. All products include verified COAs and third-party testing options.'
                  },
                  {
                    question: 'Do you provide free samples?',
                    answer: 'Yes! Our supply partners provide free API and vial samples with zero commitment. This lets you verify quality, test with your compounding process, and ensure product integrity before placing larger orders.'
                  }
                ]
              },
              {
                category: 'Business & Support',
                icon: UserGroupIcon,
                questions: [
                  {
                    question: 'What states do you service?',
                    answer: 'CompoundMeds services pharmacies and clinics nationwide. APIs are currently available in 36 states (expanding to all 50), and sterile vials are available in all 50 states. Contact us to confirm current availability in your area and get updates on expansion.'
                  },
                  {
                    question: 'Who is CompoundMeds and what makes you different?',
                    answer: 'We\'re a sourcing partner connecting pharmacies and clinics with FDA-compliant manufacturers and compounding pharmacies. Unlike competitors, we offer: (1) Free overnight shipping, (2) Net 30 terms with no minimums, (3) Products in stock stateside, (4) Anti-fraud COA education, (5) USA-manufactured vials at import prices—protecting your margins and your patients.'
                  }
                ]
              }
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900">{section.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {section.questions.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 10 + faqIndex;
                    return (
                      <div key={globalIndex} className="border-l-2 border-gray-200 pl-4 hover:border-blue-600 transition-colors">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
                          className="w-full text-left group"
                        >
                          <div className="flex justify-between items-start gap-3 mb-2">
                            <span className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors leading-snug pr-2">{faq.question}</span>
                            <ChevronDownIcon className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFAQ === globalIndex ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openFAQ === globalIndex ? 'auto' : 0, opacity: openFAQ === globalIndex ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-3">
                            <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Single-Column FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
          >
            <div className="space-y-4">
              {[
                {
                  question: 'Are prescriptions required for your products?',
                  answer: 'Requirements vary by product type and state regulations. APIs and raw materials typically don\'t require prescriptions, but finished compounded medications do. Contact us for specific requirements based on your state and the products you need.'
                },
                {
                  question: 'How do you handle pricing and are there volume discounts?',
                  answer: 'We offer competitive USA-manufactured products at import prices—protecting your margins while maintaining premium quality. Volume discounts are available for larger orders. Our Net 30 terms and no minimums mean you can start small and scale up as you verify quality and demand.'
                }
              ].map((faq, index) => {
                const globalIndex = 100 + index;
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-200/50 last:border-0 pb-5 last:pb-0"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
                      className="w-full text-left flex justify-between items-start gap-4 group"
                    >
                      <span className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors leading-snug">{faq.question}</span>
                      <ChevronDownIcon className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFAQ === globalIndex ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFAQ === globalIndex ? 'auto' : 0, opacity: openFAQ === globalIndex ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
          >
            <h3 className="text-2xl font-black text-white mb-3 drop-shadow-sm">Still have questions?</h3>
            <p className="text-blue-50 mb-6 text-lg">Our team is here to help you navigate pharmaceutical sourcing with confidence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="tel:5612238133"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                (561) 223-8133
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form - Unified */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Request a Consultation</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              No obligation. Just honest answers about how we can support your pharmacy and clinic.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Call us directly</h3>
                  <a href="tel:5612238133" className="text-blue-600 hover:text-blue-700 text-lg sm:text-xl font-bold break-all">
                    (561) 223-8133
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Email us</h3>
                  <a href="mailto:hello@compoundmeds.com" className="text-blue-600 hover:text-blue-700 text-base sm:text-xl font-bold block break-all">
                    hello@compoundmeds.com
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-6" aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Name <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm sm:text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Email <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your.email@clinic.com"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm sm:text-base"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Phone <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm sm:text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    placeholder="Your clinic/pharmacy name"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-interest" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Primary Interest <span className="text-red-600" aria-label="required">*</span>
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm sm:text-base"
                  required
                  aria-required="true"
                >
                  <option value="">What interests you most?</option>
                  <option value="apis">APIs</option>
                  <option value="vials">Sterile Vials</option>
                  <option value="compounded">Compounded Medications</option>
                  <option value="all">All Products</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Message/Comments
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your specific needs or questions..."
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105"
                aria-label="Submit contact form - Request a consultation"
              >
                <span>Request a Consultation</span>
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 border-b border-white/10">
            <div className="grid md:grid-cols-12 gap-12">
              {/* Brand Section - Takes more space */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/logo.png"
                    alt="CompoundMeds Logo"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                  <span className="text-2xl font-bold">CompoundMeds</span>
                </div>
                <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
                  Premium pharmaceutical sourcing for pharmacies and clinics nationwide. Based in Delray Beach, Florida.
                </p>

                {/* Contact Info - More prominent */}
                <div className="space-y-3 mb-8">
                  <a href="tel:5612238133" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">(561) 223-8133</span>
                  </a>
                  <a href="mailto:hello@compoundmeds.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">hello@compoundmeds.com</span>
                  </a>
                </div>

                {/* Trust Badges - Compact */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-semibold text-gray-300">FDA Registered</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                    <span className="text-xs font-semibold text-gray-300">cGMP Certified</span>
                  </div>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Company */}
                <div>
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
                  <div className="space-y-3">
                    <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
                    <a href="#why-us" className="block text-gray-400 hover:text-white transition-colors text-sm">Why Us</a>
                    <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                  </div>
                </div>

                {/* Products */}
                <div>
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
                  <div className="space-y-3">
                    <a href="#products" className="block text-gray-400 hover:text-white transition-colors text-sm">APIs</a>
                    <a href="#products" className="block text-gray-400 hover:text-white transition-colors text-sm">Sterile Vials</a>
                    <a href="#therapies" className="block text-gray-400 hover:text-white transition-colors text-sm">Therapies</a>
                  </div>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
                  <div className="space-y-3">
                    <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                    <a href="/hipaa-compliance" className="block text-gray-400 hover:text-white transition-colors text-sm">HIPAA Compliance</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CompoundMeds, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Delray Beach, FL</span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-gray-500">Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
