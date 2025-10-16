import Link from 'next/link';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HIPAA Compliance",
  description: "CompoundMeds HIPAA compliance information. Learn about our data protection, privacy safeguards, and healthcare compliance standards.",
  openGraph: {
    title: "HIPAA Compliance | CompoundMeds",
    description: "Learn about CompoundMeds HIPAA compliance and data protection standards",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://compoundmeds.com/hipaa-compliance",
  },
};

export default function HIPAACompliance() {
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
            <span className="text-sm font-semibold text-blue-700">Healthcare Compliance</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">HIPAA Compliance</h1>
          <p className="text-lg text-gray-600">
            Last Updated: <time dateTime="2025-01-15">January 15, 2025</time>
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to HIPAA Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              CompoundMeds is committed to protecting the privacy and security of Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations. This document outlines our policies and practices to ensure compliance with HIPAA requirements when working with covered entities and business associates.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our Role</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business Associate Relationship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When CompoundMeds provides services to HIPAA-covered entities (such as pharmacies, clinics, or healthcare providers), we function as a Business Associate. As a Business Associate, we:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Execute Business Associate Agreements (BAAs) with covered entities</li>
              <li>Implement appropriate safeguards to protect PHI</li>
              <li>Report any security incidents or breaches as required</li>
              <li>Ensure our subcontractors also comply with HIPAA requirements</li>
              <li>Make PHI available to individuals as required by HIPAA</li>
              <li>Return or destroy PHI upon termination of services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Limited PHI Exposure</h3>
            <p className="text-gray-700 leading-relaxed">
              CompoundMeds primarily supplies pharmaceutical ingredients and compounds. In most cases, we do not create, receive, maintain, or transmit Protected Health Information. However, when we do have access to PHI through our business operations, we maintain strict HIPAA compliance protocols.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Security Rule Compliance</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Administrative Safeguards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have implemented comprehensive administrative safeguards including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Security Management Process:</strong> Risk analysis, risk management, sanction policy, and information system activity review</li>
              <li><strong>Workforce Security:</strong> Authorization procedures, workforce clearance, and termination procedures</li>
              <li><strong>Information Access Management:</strong> Access authorization, access establishment, and modification procedures</li>
              <li><strong>Security Awareness Training:</strong> Regular training on security reminders, protection from malware, log-in monitoring, and password management</li>
              <li><strong>Security Incident Procedures:</strong> Response and reporting protocols for security incidents</li>
              <li><strong>Contingency Planning:</strong> Data backup, disaster recovery, and emergency mode operations</li>
              <li><strong>Business Associate Contracts:</strong> Written contracts with all subcontractors who may have access to PHI</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Physical Safeguards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our physical safeguards protect PHI from unauthorized physical access:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Facility Access Controls:</strong> Secure facilities with controlled access points, visitor logs, and security personnel</li>
              <li><strong>Workstation Security:</strong> Policies regarding workstation use and positioning to minimize unauthorized viewing</li>
              <li><strong>Device and Media Controls:</strong> Procedures for disposal, media re-use, and accountability of hardware containing PHI</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Technical Safeguards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We employ robust technical safeguards to protect electronic PHI (ePHI):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access Control:</strong> Unique user identification, automatic logoff, and encryption/decryption mechanisms</li>
              <li><strong>Audit Controls:</strong> Hardware, software, and procedural mechanisms to record and examine system activity</li>
              <li><strong>Integrity Controls:</strong> Mechanisms to ensure ePHI is not improperly altered or destroyed</li>
              <li><strong>Transmission Security:</strong> Encryption and integrity controls for ePHI transmitted over electronic networks</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Privacy Rule Compliance</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Minimum Necessary Standard</h3>
            <p className="text-gray-700 leading-relaxed">
              We adhere to the minimum necessary standard by limiting the use, disclosure, and requests for PHI to the minimum necessary to accomplish the intended purpose. Our workforce members have access only to PHI required for their specific job functions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Notice of Privacy Practices</h3>
            <p className="text-gray-700 leading-relaxed">
              When functioning as a Business Associate, we support covered entities in their obligation to provide Notice of Privacy Practices to patients. We do not independently issue such notices as we are not a covered entity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Individual Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We support individuals' rights under HIPAA, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to access their PHI</li>
              <li>Right to request amendments to their PHI</li>
              <li>Right to receive an accounting of disclosures</li>
              <li>Right to request restrictions on uses and disclosures</li>
              <li>Right to request confidential communications</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Breach Notification</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Breach Response Protocol</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a breach of unsecured PHI, we follow a comprehensive breach response protocol:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Discovery and Assessment:</strong> Immediate investigation to determine the nature and scope of the breach</li>
              <li><strong>Containment:</strong> Immediate action to contain the breach and prevent further unauthorized access</li>
              <li><strong>Risk Assessment:</strong> Evaluation of the probability that PHI has been compromised</li>
              <li><strong>Notification:</strong> Notification to affected covered entities within 60 days of discovery</li>
              <li><strong>Documentation:</strong> Complete documentation of the breach, response, and mitigation efforts</li>
              <li><strong>Mitigation:</strong> Implementation of corrective actions to prevent future breaches</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Breach Incidents</h3>
            <p className="text-gray-700 leading-relaxed">
              CompoundMeds maintains a clean compliance record with no reportable HIPAA breaches to date. We continuously monitor our systems and processes to maintain this record of security.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Workforce Training and Compliance</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Regular Training Programs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All CompoundMeds workforce members receive comprehensive HIPAA training:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Initial Training:</strong> Complete HIPAA training within 30 days of hire</li>
              <li><strong>Annual Refresher Training:</strong> Yearly updates on HIPAA requirements and best practices</li>
              <li><strong>Targeted Training:</strong> Role-specific training for employees with PHI access</li>
              <li><strong>Security Awareness:</strong> Ongoing education about emerging threats and security protocols</li>
              <li><strong>Incident Response Training:</strong> Procedures for identifying and reporting security incidents</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sanctions Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We maintain a sanctions policy to enforce HIPAA compliance. Workforce members who fail to comply with HIPAA policies are subject to disciplinary action, up to and including termination of employment and, where appropriate, civil or criminal penalties.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Associate Agreements</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">BAA Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Business Associate Agreements include all required provisions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Permitted and required uses and disclosures of PHI</li>
              <li>Requirement to implement appropriate safeguards</li>
              <li>Prohibition on unauthorized use or disclosure of PHI</li>
              <li>Requirement to report security incidents and breaches</li>
              <li>Requirement for subcontractor agreements</li>
              <li>Individual access and amendment rights</li>
              <li>Accounting of disclosures obligations</li>
              <li>Return or destruction of PHI upon termination</li>
              <li>Auditing and monitoring rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Requesting a BAA</h3>
            <p className="text-gray-700 leading-relaxed">
              If you are a covered entity or business associate requiring a Business Associate Agreement with CompoundMeds, please contact our compliance team at hello@compoundmeds.com. We will execute a BAA prior to any creation, receipt, maintenance, or transmission of PHI.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subcontractor Management</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We ensure HIPAA compliance extends to all subcontractors who may have access to PHI:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Due Diligence:</strong> Thorough vetting of subcontractors' security practices</li>
              <li><strong>Written Agreements:</strong> Business Associate Agreements with all subcontractors</li>
              <li><strong>Ongoing Monitoring:</strong> Regular audits and assessments of subcontractor compliance</li>
              <li><strong>Termination Rights:</strong> Right to terminate relationships with non-compliant subcontractors</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention and Disposal</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Retention Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain PHI only for as long as necessary to fulfill our business associate obligations or as required by law. HIPAA-related documentation is retained for a minimum of six (6) years from the date of creation or last effective date, whichever is later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Secure Disposal</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination of services or retention period expiration, we ensure secure disposal of PHI:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Electronic Media:</strong> Secure deletion methods that render data unrecoverable</li>
              <li><strong>Paper Records:</strong> Cross-cut shredding or incineration</li>
              <li><strong>Hardware:</strong> Physical destruction or secure wiping of storage devices</li>
              <li><strong>Certification:</strong> Documentation of all PHI disposal activities</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Regular Risk Assessments</h3>
            <p className="text-gray-700 leading-relaxed">
              We conduct annual risk assessments to identify potential vulnerabilities and implement appropriate safeguards. These assessments evaluate administrative, physical, and technical safeguards across our entire organization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Policy Updates</h3>
            <p className="text-gray-700 leading-relaxed">
              Our HIPAA policies and procedures are reviewed and updated regularly to reflect changes in regulations, industry best practices, and our business operations. All workforce members are notified of policy updates and receive necessary training.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Compliance Monitoring</h3>
            <p className="text-gray-700 leading-relaxed">
              We maintain ongoing compliance monitoring through regular audits, security assessments, and workforce compliance checks. Our dedicated compliance team ensures adherence to all HIPAA requirements.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Security Concerns</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have concerns about the security or privacy of PHI in our care, or if you suspect a security incident, please report it immediately:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email:</strong> hello@compoundmeds.com (Mark as "URGENT: HIPAA Security Concern")</li>
              <li><strong>Phone:</strong> (561) 223-8133 (Ask for HIPAA Compliance Officer)</li>
              <li><strong>Response Time:</strong> We investigate all reports within 24 hours</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All reports are treated confidentially and no retaliation will occur against individuals who report security concerns in good faith.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4">HIPAA Compliance Questions</h2>
            <p className="mb-4 text-blue-50">
              For questions about our HIPAA compliance program, Business Associate Agreements, or to report a security incident:
            </p>
            <div className="space-y-2 text-blue-50">
              <p><strong className="text-white">HIPAA Compliance Officer</strong></p>
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
