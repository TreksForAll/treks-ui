import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Phone } from 'lucide-react';
import SEO from '../components/ui/SEO';
import VSheshRecognitionsSection from '../components/home/VSheshRecognitionsSection';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy policy - Treks for All"
        description="Learn how Treks for All collects, uses, and protects your personal information. We are committed to safeguarding your privacy and data security. Read our comprehensive privacy policy to understand our data practices, your rights, and how we ensure the confidentiality of your information."
        image="https://treksforall.in/Home-Accessible.webp"
        url="https://treksforall.in/privacy"
      />

      <div className="pt-16 sm:pt-20 md:pt-28 min-h-screen bg-[#f5f7fa]">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8 sm:mb-16"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#fef3d1] rounded-xl mb-4 sm:mb-6">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#e0aa04]" />
            </div>
            <div className="border-l-[5px] border-[#e0aa04] pl-4 mb-3 sm:mb-4 mx-auto w-fit">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.08em] text-[#e0aa04]">
                Privacy Policy
              </h1>
            </div>
            <p className="text-sm sm:text-lg text-earth-600">
              Last Updated: January 1, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 md:p-12 space-y-8 border border-[#d1ebed]">

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-earth-900">Introduction</h2>
                </div>
                <p className="text-earth-600 leading-relaxed">
                  At Treks for All, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-earth-600 leading-relaxed">
                  We recognize the trust you place in us when you share your personal information, and we take our responsibility to protect that information seriously.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Information We Collect</h2>
                </div>

                <h3 className="text-xl font-semibold text-earth-800 mt-6 mb-3">Personal Information</h3>
                <p className="text-earth-600 leading-relaxed mb-3">
                  When you interact with our services, we may collect the following personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Date of birth and emergency contact information</li>
                  <li>Medical information relevant to your adventure participation (with your consent)</li>
                  <li>Accessibility requirements and accommodation needs</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-earth-800 mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-earth-600 leading-relaxed mb-3">
                  We may automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website or source</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">How We Use Your Information</h2>
                </div>
                <p className="text-earth-600 leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process bookings and manage your participation in our adventures</li>
                  <li>To ensure your safety and provide appropriate accommodations</li>
                  <li>To communicate with you about your bookings, inquiries, and updates</li>
                  <li>To send you newsletters and promotional materials (with your consent)</li>
                  <li>To respond to your requests and provide customer support</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <Lock className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Information Sharing and Disclosure</h2>
                </div>
                <p className="text-earth-600 leading-relaxed mb-3">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, email service providers, and adventure equipment suppliers.</li>
                  <li><strong>Adventure Partners:</strong> We may share relevant information with our partner organizations (v-shesh, Aquaterra Adventures, Metores Trust) to facilitate your adventure experience.</li>
                  <li><strong>Medical Emergencies:</strong> In case of a medical emergency, we may share relevant health information with medical professionals.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental request.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Data Security</h2>
                </div>
                <p className="text-earth-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600 mt-3">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="text-earth-600 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Your Rights and Choices</h2>
                </div>
                <p className="text-earth-600 leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-earth-600">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your personal information to another service provider</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where we rely on consent to process your information</li>
                </ul>
                <p className="text-earth-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Cookies and Tracking Technologies</h2>
                </div>
                <p className="text-earth-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site.
                </p>
                <p className="text-earth-600 leading-relaxed mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Children's Privacy</h2>
                </div>
                <p className="text-earth-600 leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#fef3d1] rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#e0aa04]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Changes to This Privacy Policy</h2>
                </div>
                <p className="text-earth-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="bg-[#e8f5f6] rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#e0aa04] rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2c646c]">Contact Us</h2>
                </div>
                <p className="text-earth-600 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#e0aa04]" />
                    <a href="mailto:admin@treksforall.in" className="text-[#377d87] hover:text-[#2c646c] transition-colors">
                      admin@treksforall.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#e0aa04]" />
                    <span className="text-earth-700">+91 96431 84862</span>
                  </div>
                </div>
              </section>

              <div className="border-t border-earth-200 pt-8 mt-8">
                <p className="text-sm text-earth-500 text-left">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      <VSheshRecognitionsSection />
    </>
  );
};

export default PrivacyPolicyPage;
