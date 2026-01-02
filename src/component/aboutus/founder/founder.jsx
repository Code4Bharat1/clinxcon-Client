"use client";

import React from "react";
import { motion } from "framer-motion";

const founder = {
  name: "Almas Sayed",
  role: "FOUNDER & CEO",
  // qualifications: "MBBS, F. Diab., MBA, FPIPA (UK)",
  company: "Clinxcon",
  img: "/founder.png",
  desc: `ALmas Sayed
Founder & CEO

A seasoned professional with 21+ years of experience across pharma, healthcare, corporate training, quality management, audit support, and business development. 
Almas currently leads Clinxcon in delivering end-to-end consulting solutions that enhance operational efficiency and enable pharma and biotech organizations to independently manage their own business processes.
An expert in upskilling and cross-skilling corporate teams, Almas has worked with esteemed organizations including Wipro, Tata Consultancy Services (TCS), Cognizant, SIRO Clinpharm, CREMA, Spanco International, and Wadia Hospital. 
She is a Certified Lead Auditor in QMS (ISO 9001:2008 & ISO 22000), an ICH-GCP–certified trainer from TCS, and holds a TTT certification from NPTEL.
With deep expertise in leadership development, communication, strategic planning, emotional intelligence, and decision-making.
Almas has trained over 50,000 professionals across 100+ organizations, helping teams enhance productivity, performance, and workplace effectiveness.`,
};

const Founder = () => {
  return (
    <div className="w-full bg-white">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 pt-14 pb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
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
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 flex gap-2">
              <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
              <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
              <span className="w-3 h-3 bg-teal-300 rounded-full"></span>
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
            </div>
          </motion.div>

          {/* RIGHT – DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
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
          className="mt-14 max-w-5xl text-base sm:text-lg md:text-[19px] leading-relaxed text-black whitespace-pre-line text-justify"
        >
          {founder.desc.split("\n").slice(2).join("\n")}
        </motion.p>
      </section>
    </div>
  );
};

export default Founder;
