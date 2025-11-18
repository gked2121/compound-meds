'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  Bars3Icon,
  BeakerIcon,
  CubeTransparentIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
  PlusIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, type ElementType } from 'react';

type IconComponent = ElementType;

type Product = {
  title: string;
  description: string;
  features: string[];
  icon: IconComponent;
  gradient: string;
  chip: string;
  iconColor: string;
};

type Differentiator = {
  title: string;
  description: string;
  icon: IconComponent;
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  badge: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type ContactCard = {
  title: string;
  value: string;
  href: string;
  icon: IconComponent;
  note?: string;
};

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const stats = [
  { value: '500+', label: 'Partners Served' },
  { value: '100%', label: 'Verified Docs' },
  { value: '50', label: 'States Covered' },
  { value: '24hr', label: 'Response Time' },
];

const featurePills = ['✓ Same-Day Setup', '✓ No Minimums', '✓ Verified Documentation'];

const products: Product[] = [
  {
    title: 'Compounded Medications',
    description: 'Clinic-ready formulations from licensed 503A and 503B pharmacies.',
    features: ['Injectables', 'Creams & Ointments', 'Troches & Capsules'],
    icon: ShoppingBagIcon,
    gradient: 'from-medical-100 to-pharma-100',
    chip: 'from-pharma-100 to-pharma-200',
    iconColor: 'text-pharma-600',
  },
  {
    title: 'Sterile Vials & Components',
    description: 'US-processed sterile components from cGMP-compliant facilities.',
    features: ['RTU Formats', 'Custom Trays', 'Verified Documentation'],
    icon: CubeTransparentIcon,
    gradient: 'from-clean-100 to-medical-100',
    chip: 'from-clean-100 to-clean-200',
    iconColor: 'text-clean-600',
  },
  {
    title: 'Pharmaceutical APIs',
    description: 'High-purity ingredients sourced directly from FDA-registered manufacturers.',
    features: ['FDA Green-List Compliant', 'Third-Party Tested', 'Full Traceability'],
    icon: BeakerIcon,
    gradient: 'from-medical-100 to-clean-100',
    chip: 'from-medical-100 to-medical-200',
    iconColor: 'text-medical-600',
  },
];

const differentiators: Differentiator[] = [
  {
    title: 'Verified Supplier Network',
    description: 'Every partner is FDA-registered with full documentation, COAs, and batch traceability.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Frictionless Onboarding',
    description: 'Same-day setup with dedicated account support and transparent communication throughout the supply chain.',
    icon: SparklesIcon,
  },
  {
    title: 'Nationwide Fulfillment',
    description: 'Licensed pharmacies and manufacturers ship from US facilities with temperature-controlled logistics.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Documentation Without Gaps',
    description: 'COAs, lot numbers, and chain-of-custody records included with every shipment to simplify audits.',
    icon: DocumentCheckIcon,
  },
];

const testimonials: Testimonial[] = [
  {
    quote: 'We cut our sterile-vial costs nearly in half while improving reliability. Every order is complete, traceable, and delivered on time.',
    name: 'Katherine',
    title: 'Pharmacy Director, 503B Facility, Texas',
    initials: 'KM',
    badge: 'from-medical-500 to-medical-600',
  },
  {
    quote: "After switching to Compound Meds, our GLP-1 sourcing became consistent and worry-free. The communication and documentation are excellent.",
    name: 'Dr. Lawson',
    title: 'Medical Director, Med Spa, Florida',
    initials: 'DL',
    badge: 'from-pharma-500 to-pharma-600',
  },
  {
    quote: 'The onboarding was same-day and simple. Having one partner for APIs, vials, and finished meds saves our team hours each week.',
    name: 'Michael',
    title: 'Operations Manager, Multi-Location Clinic, Arizona',
    initials: 'MJ',
    badge: 'from-clean-500 to-clean-600',
  },
];

const faqs: FAQ[] = [
  {
    question: 'What products can I source through Compound Meds?',
    answer:
      'We connect clinics and pharmacies with FDA-registered APIs, US-processed sterile vials, and compounded medications across categories like GLP-1s, hormone therapies, recovery blends, and wellness formulations.',
  },
  {
    question: 'How fast is onboarding?',
    answer:
      'Most partners are activated the same business day. You receive a dedicated rep, documentation checklist, and shipment timeline so you can begin ordering immediately.',
  },
  {
    question: 'Do you compound medications yourselves?',
    answer:
      'No. Compound Meds is a sourcing partner. We coordinate with independent, licensed 503A and 503B pharmacies as well as FDA-registered manufacturers to fulfill every order.',
  },
  {
    question: 'What compliance measures are in place?',
    answer:
      'Every shipment includes complete COAs, batch records, and lot traceability. Partners meet FDA, DEA, and state pharmacy requirements, and we maintain audit-ready documentation.',
  },
];

const contactCards: ContactCard[] = [
  {
    title: 'Call us directly',
    value: '(561) 223-8133',
    href: 'tel:5612238133',
    icon: PhoneIcon,
  },
  {
    title: 'Email us',
    value: 'hello@compoundmeds.com',
    href: 'mailto:hello@compoundmeds.com',
    icon: EnvelopeIcon,
    note: 'Response within 24 hours',
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-animate="true"]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  const handleNavClick = () => setMobileOpen(false);

  return (
    <main className="bg-white text-gray-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link
            href="#hero"
            className="relative inline-flex items-center gap-3 transition-all hover:opacity-90"
            onClick={handleNavClick}
          >
            <Image
              src="/compound-meds-logo.png"
              alt="Compound Meds"
              width={200}
              height={72}
              priority
              className={`h-14 w-auto transition-all duration-500 lg:h-16 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                <span className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${
                  scrolled ? 'bg-botanical-500' : 'bg-white'
                }`} />
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-6 inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                scrolled
                  ? 'bg-botanical-600 text-white hover:bg-botanical-700'
                  : 'bg-white text-gray-900 hover:bg-white/95'
              }`}
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </nav>

          <button
            className={`rounded-xl p-2.5 transition-all duration-300 lg:hidden ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${scrolled ? 'bg-white border-t border-gray-100' : 'bg-gray-900/95 backdrop-blur-xl border-t border-white/10'}`}
        >
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className={`mt-3 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 ${
                scrolled
                  ? 'bg-botanical-600 text-white hover:bg-botanical-700'
                  : 'bg-white text-gray-900 hover:bg-white/95'
              }`}
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-medical-900 via-medical-800 to-pharma-900 pt-20 pb-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(20,184,166,0.05),transparent_50%)]" />

          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-botanical-500 opacity-10 blur-[100px] mix-blend-screen animate-blob lg:h-[600px] lg:w-[600px]" />
          <div
            className="absolute top-60 -right-40 h-80 w-80 rounded-full bg-medical-400 opacity-10 blur-[120px] mix-blend-screen animate-blob lg:h-[500px] lg:w-[500px]"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-pharma-400 opacity-10 blur-[110px] mix-blend-screen animate-blob lg:h-[550px] lg:w-[550px]"
            style={{ animationDelay: '4s' }}
          />
          <div
            className="absolute bottom-40 right-20 h-72 w-72 rounded-full bg-clean-500 opacity-10 blur-[120px] mix-blend-screen animate-blob lg:h-[450px] lg:w-[450px]"
            style={{ animationDelay: '6s' }}
          />

          <div className="absolute top-[20%] left-[15%] h-2 w-2 rounded-full bg-botanical-200 opacity-40 animate-float" />
          <div className="absolute top-[40%] left-[85%] h-3 w-3 rounded-full bg-blue-200 opacity-30 animate-float-slow" />
          <div className="absolute top-[70%] left-[25%] h-2 w-2 rounded-full bg-teal-200 opacity-35 animate-float" />
          <div
            className="absolute top-[15%] left-[70%] h-2 w-2 rounded-full bg-botanical-300 opacity-30 animate-float-slow"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-[85%] left-[45%] h-3 w-3 rounded-full bg-purple-200 opacity-30 animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-[35%] left-[90%] h-2 w-2 rounded-full bg-botanical-200 opacity-30 animate-float-slow"
            style={{ animationDelay: '3s' }}
          />
          <div
            className="absolute top-[60%] left-[10%] h-2 w-2 rounded-full bg-white opacity-30 animate-float"
            style={{ animationDelay: '4s' }}
          />
          <div
            className="absolute top-[25%] left-[50%] h-2 w-2 rounded-full bg-botanical-300 opacity-30 animate-float-slow"
            style={{ animationDelay: '5s' }}
          />

          <div className="noise absolute inset-0 opacity-60" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-12">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-botanical-300/40 bg-white/10 px-5 py-2.5">
            <ShieldCheckIcon className="h-4 w-4 text-botanical-200" />
            <span className="text-sm font-semibold text-white tracking-wide">Trusted by 500+ Pharmacies & Clinics</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-white drop-shadow-xl md:text-5xl lg:text-6xl xl:text-7xl">
            Verified Pharmaceutical <span className="text-botanical-300">Sourcing</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 leading-relaxed md:text-xl">
            Your trusted partner for compliant APIs, sterile vials, and compounded medications.{' '}
            <span className="font-semibold text-botanical-200">Sourced from verified, licensed partners.</span>
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 rounded-2xl bg-botanical-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-botanical-600"
            >
              Request Pricing
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="btn-press inline-flex items-center gap-2 rounded-2xl bg-white/95 px-8 py-4 text-lg font-bold text-gray-900 shadow-xl transition hover:bg-white"
            >
              View Products
            </a>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                <p className="text-3xl font-display font-bold md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section
        id="products"
        className="relative overflow-hidden bg-gradient-to-b from-white via-medical-50/30 to-white px-6 py-20 lg:px-12"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-medical-200 bg-medical-100 px-5 py-2">
              <CubeTransparentIcon className="h-4 w-4 text-medical-600" />
              <span className="text-xs font-bold text-medical-700">OUR PRODUCT LINE</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl lg:text-5xl">What We Supply</h2>
            <p className="mt-3 text-lg text-gray-600">
              Premium pharmaceutical solutions designed for your practice&apos;s success
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.title} className="group relative" data-animate="true">
                  <div
                    className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${product.gradient} opacity-80 transition duration-500 group-hover:scale-105`}
                  />
                  <div className="relative rounded-[2rem] bg-white p-8 shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.chip}`}>
                      <Icon className={`h-8 w-8 ${product.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">{product.title}</h3>
                    <p className="mt-3 text-gray-600">{product.description}</p>
                    <ul className="mt-6 space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-700">
                          <ShieldCheckIcon className="h-5 w-5 text-botanical-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mb-8 text-center text-sm italic text-gray-500" data-animate="true">
            Includes FDA Green-List Semaglutide and Tirzepatide.
          </p>

          <div className="text-center" data-animate="true">
            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 rounded-xl bg-botanical-600 px-8 py-4 text-base font-bold text-white shadow-xl transition hover:scale-105 hover:bg-botanical-700"
            >
              Get Started Today
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-medical-200 bg-medical-50 px-5 py-2">
              <SparklesIcon className="h-4 w-4 text-medical-600" />
              <span className="text-xs font-bold text-medical-700">WHY PARTNERS CHOOSE US</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">Compliance without the friction</h2>
            <p className="mt-3 text-base text-gray-600">
              We manage supplier vetting, documentation, and logistics so your team stays focused on patient care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-medical-100 bg-gradient-to-br from-white to-medical-50/40 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  data-animate="true"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-medical-100 text-medical-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2">
              {[...Array(5)].map((_, idx) => (
                <StarIcon key={idx} className="h-4 w-4 text-yellow-500" />
              ))}
              <span className="text-xs font-bold text-gray-700">5.0 RATING</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Trusted by Healthcare Professionals
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                data-animate="true"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
                <p className="flex-grow text-lg text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.badge} text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gradient-to-b from-medical-50/60 to-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-medical-200 bg-medical-100 px-5 py-2">
              <QuestionBadge />
              <span className="text-xs font-bold text-medical-700">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">Answers on compliance & supply</h2>
            <p className="mt-3 text-base text-gray-600">
              Still have questions? Reach out and our sourcing team will respond within one business day.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                data-animate="true"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <PlusIcon className="h-5 w-5 text-medical-500 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-medical-200 bg-medical-100 px-5 py-2">
              <EnvelopeIcon className="h-4 w-4 text-medical-600" />
              <span className="text-xs font-bold text-medical-700">GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Connect with our sourcing team
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Licensed pharmaceutical partners. Nationwide supply. Response within 24 hours.
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-medical-100 bg-gradient-to-br from-medical-50 to-clean-50 p-8"
                  data-animate="true"
                >
                  <Icon className="mb-4 h-10 w-10 text-medical-600" />
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  <a href={card.href} className="mt-1 block text-2xl font-bold text-medical-600 hover:text-medical-700 break-words">
                    {card.value}
                  </a>
                  {card.note && <p className="mt-2 text-sm text-gray-600">{card.note}</p>}
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-medical-50/30 p-8 lg:p-12" data-animate="true">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">HubSpot Form Placeholder</h3>
              <p className="mt-2 text-gray-600">
                Paste your HubSpot embed code below to replace this placeholder. Remove the placeholder div once the form
                is live.
              </p>
            </div>
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border-2 border-dashed border-medical-300 bg-white/60 p-12 text-center text-gray-600">
              HubSpot form goes here.
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-medical-900 to-pharma-900 px-6 py-12 text-white lg:px-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-medical-500 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-pharma-500 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-10 grid gap-8 md:grid-cols-4">
            <div>
              <Image
                src="/compound-meds-logo.png"
                alt="Compound Meds"
                width={180}
                height={60}
                className="mb-4 h-12 w-auto brightness-0 invert"
              />
              <p className="text-sm text-gray-400">
                Premium pharmaceutical sourcing for pharmacies and clinics nationwide.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest">Products</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="#products" className="block hover:text-white">
                  APIs
                </a>
                <a href="#products" className="block hover:text-white">
                  Sterile Vials
                </a>
                <a href="#products" className="block hover:text-white">
                  Compounded Meds
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest">Company</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="#why-us" className="block hover:text-white">
                  Why Us
                </a>
                <a href="#testimonials" className="block hover:text-white">
                  Testimonials
                </a>
                <a href="#contact" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <a href="tel:5612238133" className="block hover:text-white">
                  (561) 223-8133
                </a>
                <a href="mailto:hello@compoundmeds.com" className="block break-all hover:text-white">
                  hello@compoundmeds.com
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-botanical-500/20 bg-white/5 p-6 text-sm text-gray-300">
            <p className="font-semibold uppercase tracking-widest text-botanical-200">Important Disclaimer</p>
            <p className="mt-2 text-gray-300">
              Compound Meds is a pharmaceutical sourcing partner that connects licensed pharmacies and clinics with verified suppliers.
              We do not manufacture, compound, or directly dispense pharmaceutical products. All products are fulfilled by independent, licensed manufacturers,
              compounding pharmacies (503A and 503B facilities), and FDA-registered suppliers.
            </p>
          </div>

          <p className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
            © {currentYear} Compound Meds, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function QuestionBadge() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-medical-600 text-xs font-bold text-white">
      ?
    </span>
  );
}
