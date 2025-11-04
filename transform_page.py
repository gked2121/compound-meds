#!/usr/bin/env python3
"""
Script to transform the Compound Meds homepage based on client feedback.
This script makes surgical edits to the massive page.tsx file.
"""

import re

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def transform_page(content):
    """Apply all transformations to the page content"""

    # Phase 1: Global brand consistency & location removal (already done via sed)

    # Phase 2: Update hero headline
    content = re.sub(
        r'Your Trusted\s+<br\s*/>\s+<span[^>]*>\s+<span[^>]*>\s+Pharmaceutical\s+</span>',
        'Verified Pharmaceutical Sourcing<br/><span className="relative inline-block mt-2 mb-3"><span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">For Pharmacies & Clinics',
        content,
        flags=re.DOTALL
    )

    # Update hero subheadline
    content = re.sub(
        r'Pharma-grade APIs, US-processed sterile vials, and high-quality compounded medications.*?one reliable partner\.',
        'We connect you with licensed suppliers of pharmaceutical-grade APIs, sterile components, and compounded medications—sourced through verified, compliant partners.',
        content,
        flags=re.DOTALL
    )

    # Update trust badge
    content = re.sub(
        r'TRUSTED BY 500\+ PHARMACIES & CLINICS',
        'Trusted by pharmacies and clinics nationwide',
        content
    )

    # Phase 3: Update stats in hero - remove unverifiable numbers
    content = re.sub(
        r"'50 States Supported'",
        "'Licensed U.S. Partners Only'",
        content
    )

    content = re.sub(
        r"'500\+ Pharmacies Served'",
        "'100% Verified Documentation'",
        content
    )

    # Phase 7: Tone down "Frontier" section
    content = re.sub(
        r"We're at the Frontier of<br\s*/>\s+<span[^>]*>.*?Proactive Healthcare.*?</span>",
        "Supporting Preventative &<br/><span className=\"relative inline-block mt-2\"><span className=\"relative z-10 bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent\">Personalized Medicine</span><div className=\"absolute -bottom-2 left-0 right-0 h-4 bg-white/20 blur-xl\"></div></span>",
        content,
        flags=re.DOTALL
    )

    # Update Frontier card titles
    content = re.sub(
        r'<h3 className="text-2xl font-bold text-white mb-3">Revolutionizing Medicine</h3>',
        '<h3 className="text-2xl font-bold text-white mb-3">Preventative Therapies</h3>',
        content
    )

    content = re.sub(
        r'<h3 className="text-2xl font-bold text-white mb-3">Lead the Change</h3>',
        '<h3 className="text-2xl font-bold text-white mb-3">Personalized Protocols</h3>',
        content
    )

    # Update Frontier CTA
    content = re.sub(
        r'Join the Revolution',
        'Partner With Us',
        content
    )

    # Update "Why Choose" section header
    content = re.sub(
        r'<h2[^>]*>Why Choose Compound Meds</h2>',
        '<h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Why Choose Compound Meds</h2>',
        content
    )

    # Remove FDA/cGMP badges from footer
    content = re.sub(
        r'<div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">\s+<ShieldCheckIcon[^/]+/>\s+<span[^>]+>FDA Registered</span>\s+</div>',
        '',
        content,
        flags=re.DOTALL
    )

    content = re.sub(
        r'<div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">\s+<CheckBadgeIcon[^/]+/>\s+<span[^>]+>cGMP Certified</span>\s+</div>',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove empty Trust Badges container if badges are removed
    content = re.sub(
        r'{/\* Trust Badges - Compact \*/}\s+<div className="flex flex-wrap gap-3">\s+</div>',
        '',
        content,
        flags=re.DOTALL
    )

    return content

def main():
    input_file = 'app/page.tsx'
    output_file = 'app/page.tsx'

    print("Reading page.tsx...")
    content = read_file(input_file)

    print("Applying transformations...")
    transformed = transform_page(content)

    print("Writing updated page.tsx...")
    write_file(output_file, transformed)

    print("✓ Transformation complete!")

if __name__ == '__main__':
    main()
