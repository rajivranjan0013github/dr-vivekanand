import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24"
      >
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Dr. Vivekanand Sinha</h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto">Expert Pediatrician & Child Health Specialist</p>
          </div>
        </div>
      </motion.section>

      {/* Doctor's Profile Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="https://placehold.co/600x800/blue/white" 
                    alt="Dr. Vivekanand Sinha"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Vivekanand Sinha</h2>
                    <p className="text-blue-700 font-semibold mb-6">Senior Consultant Pediatrician & Child Specialist</p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">20+ Years of Experience</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span className="font-medium">Hindi, English</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium">MBBS, MD (Pediatrics)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <div className="space-y-10">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Dr. Vivekanand Sinha is a distinguished pediatrician with over 20 years of specialized experience in child healthcare. His practice at SHISHU CARE CLINIC is built on a foundation of evidence-based medicine combined with a gentle, child-friendly approach that puts both young patients and their parents at ease.
                    </p>
                    <p>
                      After completing his MBBS and MD in Pediatrics from prestigious medical institutions in India, he has dedicated his career to providing comprehensive pediatric care. His expertise spans from newborn care to adolescent health, with a special focus on preventive healthcare and developmental pediatrics.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Pediatric Care</h4>
                        <p className="text-gray-600 mt-1">Comprehensive healthcare from newborn to adolescence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Preventive Care</h4>
                        <p className="text-gray-600 mt-1">Vaccinations, growth monitoring, and developmental assessment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Emergency Care</h4>
                        <p className="text-gray-600 mt-1">Prompt attention for acute pediatric conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Child Development</h4>
                        <p className="text-gray-600 mt-1">Expert guidance on physical and behavioral development</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Clinic Information</h3>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Location</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">SHISHU CARE CLINIC</p>
                        <p className="text-gray-700">Near Sai Temple, Gewalbigha</p>
                        <p className="text-gray-700">Gaya, Bihar 823001</p>
                        <p className="text-gray-700 mt-4 flex items-center">
                          <span className="mr-2">📞</span>
                          <span className="font-medium">+91 9934098277</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Consultation Hours</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p className="text-gray-700">Sunday: Emergency Cases Only</p>
                        <p className="mt-4 text-sm font-medium text-blue-700">24/7 Emergency Contact Available for Registered Patients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Schedule Your Child's Visit</h2>
            <p className="text-xl text-blue-100 mb-10">Trust your child's health to our experienced pediatric care team.</p>
            <a 
              href="/appointment" 
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg text-lg"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 