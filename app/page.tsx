'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  Bars3Icon,
  BeakerIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  HandRaisedIcon,
  HeartIcon,
  PhoneIcon,
  PlusIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, type ElementType } from 'react';

type IconComponent = ElementType;

// Navigation items
const navItems = [
  { label: 'Products', href: '#what-we-supply' },
  { label: 'Why Us', href: '#why-compound-meds' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

// Hero benefit cards
const benefits = [
  { icon: BoltIcon, title: 'Same-Day Account Setup' },
  { icon: HandRaisedIcon, title: 'Flexible Terms' },
  { icon: CubeTransparentIcon, title: 'No Minimum Orders' },
  { icon: DocumentCheckIcon, title: 'Transparent Documentation' },
];

// Products
const products = [
  {
    title: 'Compounded Medications',
    description: 'Clinic-ready formulations from licensed 503A and 503B pharmacies.',
    features: ['Injectables', 'Creams & Ointments', 'Troches', 'Capsules'],
    icon: ShoppingBagIcon,
  },
  {
    title: 'Sterile Vials & Components',
    description: 'U.S.-processed sterile components from cGMP-compliant facilities.',
    features: ['RTU Formats', 'Custom Trays', 'Vials & Stoppers', 'Verified Documentation'],
    icon: CubeTransparentIcon,
  },
  {
    title: 'Pharmaceutical APIs',
    description: 'Pharmaceutical-grade ingredients from FDA-registered manufacturers.',
    features: ['FDA Green-List Compliant', 'Third-Party Tested', 'Full Traceability'],
    icon: BeakerIcon,
  },
];

// Therapies
const therapies = [
  {
    icon: ScaleIcon,
    title: 'Weight Management & Metabolic Health',
    products: ['Semaglutide', 'Tirzepatide', 'Liraglutide'],
  },
  {
    icon: HeartIcon,
    title: 'Hormone & Sexual Health',
    products: ['Testosterone', 'PT-141', 'Tadalafil'],
  },
  {
    icon: SparklesIcon,
    title: 'Anti-Aging & Recovery',
    products: ['NAD+', 'CJC-1295', 'BPC-157'],
  },
  {
    icon: BeakerIcon,
    title: 'Specialized Compounding',
    products: ['Hair Loss Treatments', 'Dermatology', 'IV Protocols'],
  },
];

// Why Compound Meds
const whyItems = [
  { icon: ShieldCheckIcon, title: 'Verified Sourcing' },
  { icon: CubeTransparentIcon, title: 'All-In-One Platform' },
  { icon: ChatBubbleLeftRightIcon, title: 'Transparent Communication' },
  { icon: ChartBarIcon, title: 'Flexible Terms' },
];

// Testimonials
const testimonials = [
  {
    quote: 'We cut our sterile-vial costs nearly in half while improving reliability. Every order is complete, traceable, and delivered on time.',
    name: 'Katherine',
    title: 'Pharmacy Director, 503B Facility, Texas',
    initials: 'KM',
  },
  {
    quote: "After switching to Compound Meds, our GLP-1 sourcing became consistent and worry-free. The communication and documentation are excellent.",
    name: 'Dr. Lawson',
    title: 'Medical Director, Med Spa, Florida',
    initials: 'DL',
  },
  {
    quote: 'Our team was up and running same-day. Reliable supply, complete documentation, and responsive support make managing our locations so much easier.',
    name: 'Michael',
    title: 'Operations Manager, Multi-Location Clinic, Arizona',
    initials: 'MJ',
  },
];

// FAQs - Tyler's V3.1 copy
const faqs = [
  {
    question: 'What is Compound Meds?',
    answer: 'Compound Meds is a pharmaceutical sourcing partner that connects licensed pharmacies and clinics with verified suppliers of APIs, sterile components, and compounded medications. We do not manufacture products—we facilitate access to trusted, compliant sources.',
  },
  {
    question: 'Who are your suppliers?',
    answer: 'We supply health clinics with finished compounded medications from 503A and 503B compounding pharmacies, and supply 503A and 503B compounding pharmacies with APIs and sterile vials from FDA-registered, cGMP-compliant manufacturers.',
  },
  {
    question: 'What documentation do you provide?',
    answer: 'Every product order includes original manufacturer Certificates of Analysis (COAs), third-party test results when available, facility certifications, and all licensing information for the manufacturer and supplier. We provide complete traceability from manufacturer to your facility.',
  },
  {
    question: 'What are your ordering minimums and terms?',
    answer: 'Order minimums and payment terms vary by product and supplier. Many of our partners offer flexible terms including Net 30 payment options for qualified accounts. Contact us to discuss specific requirements for your facility.',
  },
  {
    question: 'Which states do you serve?',
    answer: 'We serve licensed pharmacies and clinics nationwide. Product availability may vary by state due to regulatory requirements and supplier distribution networks. Contact us to confirm availability in your area.',
  },
  {
    question: 'How do I get started?',
    answer: 'Submit an inquiry through our contact form, call us at (561) 223-8133, or email hello@compoundmeds.com. We\'ll arrange a brief meeting to learn about your needs, answer any questions, and get you set up with the right suppliers.',
  },
];

// Section IDs for progress indicator
const sections = ['hero', 'what-we-supply', 'why-compound-meds', 'testimonials', 'faq', 'contact-form', 'footer'];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section for progress indicator
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Progress Indicator */}
      <div className="progress-indicator">
        {sections.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`progress-dot ${activeSection === sectionId ? 'active' : ''}`}
            aria-label={`Scroll to ${sectionId}`}
          />
        ))}
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="#hero"
            className="relative inline-flex items-center transition-opacity hover:opacity-80"
            onClick={handleNavClick}
          >
            <Image
              src="/compound-meds-logo.png"
              alt="Compound Meds"
              width={220}
              height={80}
              priority
              className={`h-14 w-auto transition-all duration-300 lg:h-16 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-form"
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get Started
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </nav>

          <button
            className={`rounded-lg p-2 transition-colors duration-200 lg:hidden ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80'
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } ${scrolled ? 'bg-white' : 'bg-gray-900/95 backdrop-blur-lg'}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact-form"
              onClick={handleNavClick}
              className={`mt-4 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get Started
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
        {/* Particle Animation */}
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 text-center lg:px-16">
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight text-white md:text-5xl lg:text-6xl" data-animate="true">
            Verified Pharmaceutical Sourcing for{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Pharmacies & Clinics
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl" data-animate="true">
            Your trusted partner for{' '}
            <span className="text-green-400">compliant APIs</span>,{' '}
            <span className="text-green-400">sterile vials</span>, and{' '}
            <span className="text-green-400">compounded medications</span>.
          </p>

          {/* Social Proof Stats */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-400" data-animate="true">
            <span>500+ Partners Served</span>
            <span className="opacity-40">•</span>
            <span>Nationwide Coverage</span>
            <span className="opacity-40">•</span>
            <span>Same-Day Setup</span>
          </div>

          {/* Benefit Cards */}
          <div className="mx-auto mb-10 grid max-w-3xl gap-4 sm:grid-cols-2" data-animate="true">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/20">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="font-semibold text-white">{benefit.title}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-2xl"
            data-animate="true"
          >
            Get Started Today
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* What We Supply Section */}
      <section id="what-we-supply" className="bg-[#F8F9FA] px-8 py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Our Product Line</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">What We Supply</h2>
          </div>

          {/* Product Cards */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="flex flex-col rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  data-animate="true"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{product.title}</h3>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  <ul className="mt-auto space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mb-12 text-center text-sm italic text-gray-500" data-animate="true">
            Includes FDA Green-List Semaglutide and Tirzepatide.
          </p>

          {/* Therapies Subsection */}
          <div className="mt-16" data-animate="true">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-display font-bold text-gray-900 md:text-4xl">Therapies & Conditions We Support</h2>
              <p className="text-gray-600">Our formulations are used across key treatment categories.</p>
            </div>

            {/* Therapy Cards */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {therapies.map((therapy) => {
                const Icon = therapy.icon;
                return (
                  <div
                    key={therapy.title}
                    className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    data-animate="true"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mb-3 font-bold text-gray-900">{therapy.title}</h3>
                    <ul className="space-y-1.5">
                      {therapy.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="h-1 w-1 rounded-full bg-gray-400" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <p className="mb-10 text-center text-sm font-medium text-gray-600" data-animate="true">
              All GLP-1s and APIs sourced from FDA Green-List manufacturers.
            </p>

            {/* Unified CTA */}
            <div className="text-center" data-animate="true">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-2xl"
              >
                Get Started Today
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compound Meds Section */}
      <section id="why-compound-meds" className="bg-white px-8 py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Why Compound Meds</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">Why Compound Meds</h2>
          </div>

          {/* Outlined Icon Cards */}
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-outlined flex flex-col items-center rounded-xl p-8 text-center"
                  data-animate="true"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center">
                    <Icon className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white px-8 py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1.5">
              {[...Array(5)].map((_, idx) => (
                <StarIcon key={idx} className="h-4 w-4 text-yellow-500" />
              ))}
              <span className="ml-2 text-xs font-bold text-gray-700">5.0 RATING</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">Trusted by Healthcare Professionals</h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100"
                data-animate="true"
              >
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 flex-grow text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#F8F9FA] px-8 py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          </div>

          {/* Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="accordion-item group"
                open={index === 0}
                data-animate="true"
              >
                <summary className="accordion-trigger">
                  <span>{faq.question}</span>
                  <PlusIcon className="accordion-icon h-5 w-5" />
                </summary>
                <div className="accordion-content">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-white px-8 py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center" data-animate="true">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Get In Touch</span>
            </div>
            <h2 className="mb-3 text-3xl font-display font-bold text-gray-900 md:text-4xl">Connect With Our Sourcing Team</h2>
            <p className="text-gray-600">Licensed pharmaceutical partners. Nationwide supply. Response within 24 hours.</p>
          </div>

          {/* Contact Info */}
          <div className="mb-10 grid gap-6 sm:grid-cols-2" data-animate="true">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <PhoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us directly</p>
                <a href="tel:5612238133" className="font-bold text-gray-900 hover:text-green-600">
                  (561) 223-8133
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <EnvelopeIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us</p>
                <a href="mailto:hello@compoundmeds.com" className="font-bold text-gray-900 hover:text-green-600">
                  hello@compoundmeds.com
                </a>
              </div>
            </div>
          </div>

          {/* HubSpot Form Placeholder */}
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center" data-animate="true">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.3 12.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4zm-10.6 6.9l-6.6-6.6 6.6-6.6 6.6 6.6-6.6 6.6z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">HubSpot Form Placeholder</h3>
              <p className="text-gray-600">Your HubSpot lead capture form will appear here.</p>
            </div>

            <div className="mx-auto max-w-md rounded-lg bg-white p-6 text-left shadow-sm">
              <h4 className="mb-3 font-semibold text-gray-900">Setup Instructions:</h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">1.</span>
                  Go to HubSpot → Marketing → Forms
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">2.</span>
                  Create or select your lead capture form
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">3.</span>
                  Click &quot;Share&quot; → &quot;Embed code&quot;
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">4.</span>
                  Copy the embed script
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">5.</span>
                  Replace this placeholder with the embed code
                </li>
              </ol>

              <div className="mt-4 rounded bg-gray-100 p-3">
                <p className="text-xs font-mono text-gray-500">
                  {`<!-- HubSpot Embed Code -->`}<br/>
                  {`<script charset="utf-8" ...>`}<br/>
                  {`</script>`}
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              HubSpot Portal ID: 243569761 (already connected via tracking script)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 px-8 py-16 text-gray-300 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Top - Logo */}
          <div className="mb-10 text-center">
            <Image
              src="/compound-meds-logo.png"
              alt="Compound Meds"
              width={180}
              height={60}
              className="mx-auto mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="text-lg font-semibold text-white">Compound Meds</p>
          </div>

          {/* Middle - 4 Columns */}
          <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Company</h4>
              <div className="space-y-2 text-sm">
                <span className="block text-gray-500 cursor-not-allowed">About Us</span>
                <a href="#why-compound-meds" className="block hover:text-white transition-colors">Why Us</a>
                <a href="#contact-form" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Products</h4>
              <div className="space-y-2 text-sm">
                <a href="#what-we-supply" className="block hover:text-white transition-colors">APIs</a>
                <a href="#what-we-supply" className="block hover:text-white transition-colors">Sterile Vials</a>
                <a href="#what-we-supply" className="block hover:text-white transition-colors">Therapies</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link href="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="block hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/hipaa-compliance" className="block hover:text-white transition-colors">HIPAA Compliance</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:5612238133" className="block hover:text-white transition-colors">(561) 223-8133</a>
                <a href="mailto:hello@compoundmeds.com" className="block hover:text-white transition-colors">hello@compoundmeds.com</a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-8 rounded-lg border border-gray-700 bg-gray-900/50 p-6 text-xs text-gray-400">
            <p className="mb-2 font-semibold uppercase tracking-widest text-gray-300">Important Disclaimer</p>
            <p className="leading-relaxed">
              Compound Meds is a pharmaceutical sourcing partner that connects licensed pharmacies and clinics with verified suppliers.
              We do not manufacture, compound, or directly dispense pharmaceutical products. All products are fulfilled by independent,
              licensed manufacturers, compounding pharmacies (503A and 503B facilities), and FDA-registered pharmaceutical suppliers.
              Product availability, regulatory compliance, and fulfillment are the responsibility of the individual supplier. Compound
              Meds facilitates connections and provides sourcing support but does not guarantee product availability, efficacy, or
              regulatory status. Healthcare providers are responsible for verifying all supplier credentials, product documentation,
              and compliance with applicable federal and state regulations before ordering or using any products. Compounded medications
              are not FDA-approved and are prepared by state-licensed compounding pharmacies. Consult appropriate regulatory guidance
              for your specific use case.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500">
            © {currentYear} Compound Meds, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
