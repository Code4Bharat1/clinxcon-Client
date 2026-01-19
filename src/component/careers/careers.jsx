"use client";
import React from "react";
import { motion } from "framer-motion";

function Careers() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-14 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Careers at ClinXcon
          </h1>
          <p className="mt-3 text-lg text-blue-700 font-medium">
            Build Careers. Shape Futures. Create Impact.
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6 sm:p-10 space-y-6"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">ClinXcon</span>, we go beyond
            training and consulting to build meaningful careers in
            <span className="font-medium"> Clinical Research</span>,
            <span className="font-medium"> Pharmacovigilance</span>, and
            <span className="font-medium"> Healthcare</span>.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We believe that people are our greatest strength and foster a culture
            rooted in <span className="font-medium">integrity and professionalism</span>,
            <span className="font-medium"> knowledge sharing and innovation</span>,
            <span className="font-medium"> respect for ideas and experience</span>, and a
            strong commitment to <span className="font-medium">continuous improvement</span>.
          </p>

          {/* Join Section */}
          <div className="pt-6 border-t">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Join the ClinXcon Team
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We are always open to collaborating with passionate experts,
              mentors, and strategic partners who can help drive business growth,
              expansion, and meaningful partnerships.
            </p>
          </div>

          {/* Email CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <p className="text-gray-800 text-base sm:text-lg">
              If you’re excited to apply your skills in a dynamic learning and
              consulting environment, share your resume at
            </p>
            <p className="mt-2 text-blue-700 font-semibold text-lg">
              clinxcon26@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Careers;
