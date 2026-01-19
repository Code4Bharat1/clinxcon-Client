"use client";

import React from "react";
import { motion } from "framer-motion";

const founder = {
  name: "Almas Sayed",
  role: "FOUNDER & CEO",
  company: "Clinxcon",
  img: "/founder.png",
  desc: `ALmas Sayed
Founder & CEO

Almas Sayed is a dynamic and versatile professional with 24+ years of experience across pharma, healthcare, pharmacovigilance, quality management, audit and inspection support, corporate training, and leadership development.
As Founder and CEO of ClinXcon, Almas leads the delivery of end-to-end consulting and training solutions that strengthen regulatory compliance, operational efficiency, and scalable business processes for pharmaceutical and biotechnology organizations.
Almas specializes in PV QMS design, CAPA development, SOP authoring, audit readiness, internal audits, and PV operations setup, while also driving upskilling and cross-skilling programs for continuous professional development.
Almas has worked with organizations including Wipro, TCS, Cognizant, SIRO Clinpharm, CREMA, Spanco International, and Wadia Hospital. She is a Certified Lead Auditor (ISO 9001 & ISO 22000), Certified ICH-GCP Trainer, and NPTEL-certified Train-the-Trainer.
With deep expertise in leadership and communication training, Almas has trained 50,000+ professionals across 100+ organizations, driving performance, compliance, and leadership readiness.
`,
};

const Founder = () => {
  return (
    <div className="w-full bg-white">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 pt-14 pb-10 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 inline-block
          bg-gradient-to-r from-[#0F766E] via-[#0891B2] to-[#2563EB]
          bg-clip-text text-transparent"
        >
          Founder
        </h2>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT – IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-4 -left-4 flex gap-2">
              <span className="w-4 h-4 bg-teal-600 rounded-full"></span>
              <span className="w-4 h-4 bg-teal-400 rounded-full"></span>
              <span className="w-4 h-4 bg-teal-300 rounded-full"></span>
            </div>

            <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-4 border-[#0F8B8D]">
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-6 flex gap-2">
              <span className="w-4 h-4 bg-teal-600 rounded-full"></span>
              <span className="w-4 h-4 bg-teal-400 rounded-full"></span>
              <span className="w-4 h-4 bg-teal-300 rounded-full"></span>
            </div>
          </motion.div>

          {/* RIGHT – DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
              bg-gradient-to-r from-[#0F766E] via-[#0891B2] to-[#2563EB]
              bg-clip-text text-transparent"
            >
              {founder.name}
            </h3>

            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-black">
              {founder.role},
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
              {founder.company}
            </p>
          </motion.div>

        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 max-w-5xl mx-auto text-base sm:text-lg md:text-[19px]
          leading-relaxed text-black whitespace-pre-line text-justify"
        >
          {founder.desc.split("\n").slice(2).join("\n")}
        </motion.p>
      </section>
    </div>
  );
};

export default Founder;
