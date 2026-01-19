"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const leftVariant = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= TEAM DATA ================= */

const teamMembers = [
  {
    id: 1,
    name: "Manish Shirodkar",
    role: "HEAD – GROWTH & OPERATIONS SUPPORT",
    img: "/member1.png",
    desc: `Manish Shirodkar
Founder & CEO

Manish Shirodkar is a seasoned pharmaceutical sales leader with 20+ years of progressive experience across top organizations including Wockhardt Limited, Novo Nordisk, Mylan Pharmaceuticals, Bioquest Solutions, Merck Sharp & Dohme, AstraZeneca, Alkem–Bergen, Novartis India, and Bayer India. He has excelled in driving large teams, launching and scaling high-value brands, achieving consistent revenue growth, and building strong market presence across multiple therapeutic areas such as metabolic disorders, cardiology, respiratory, gynecology, IVF, nephrology, and primary care. Known for his strategic sales leadership, people development, business expansion, and operational excellence, Manish has repeatedly delivered top-ranking performance, led cross-functional initiatives, reduced operational costs, and strengthened organisational productivity across regions.`,
  },
  {
    id: 2,
    name: "Nandan Thakur",
    role: "HEAD – PV TECHNOLOGY & COMPLIANCE",
    img: "/member2.png",
    desc: `Nandan Thakur 
Head – Technology & Compliance

Mr. Nandan Thakur is a seasoned IT and CSV professional with over three decades of experience in consulting, system validation, compliance, and IT quality management for the Life Sciences and Healthcare industry. He has led large LIMS implementation and validation projects, managed global IT compliance initiatives, and headed the VCoE_CSQA at TCS, supporting major pharma and medical device clients across Europe and the USA. His expertise includes GxP system lifecycle management, CSV audits, CAPA, electronic records and signatures, and QE/QA-QMS processes aligned with 21 CFR Part 11, EU Annex 11, and global regulatory standards.`,
  },
  {
    id: 3,
    name: "Dr. Athira Ajith",
    role: "PV MEDICAL OFFICER",
    img: "/member3.png",
    desc: `Dr. Athira Ajith
PV Medical Officer

Dr. Athira Ajith is an MBBS, MD (Pharmacology) professional with strong experience in Pharmacovigilance, clinical research, and ADR monitoring. She has worked across reputed institutions including Govt. Medical College Thrissur, Govt. Medical College Manjeri, Jubilee Mission Medical College & Research Institute, Care to Home, and CHC Poonthura. Her expertise spans ICSR case processing, MedDRA coding, causality assessment, signal detection, and regulatory safety reporting, with hands-on experience using Vigiflow and Argus. She has guided medical students, contributed to research projects, and presented multiple papers and posters at national forums.`,
  },
  {
    id: 4,
    name: "Rukaiyah",
    role: "PV DRUG SAFETY ASSOCIATE",
    img: "/member4.png",
    desc: `Rukaiyah
PV Drug Safety Associate

B.Pharm graduate with hands-on experience in research, pharmaceutical operations, and pharmacovigilance. Interned at IIT Bombay, and at Manbro Pharmaceuticals, gaining exposure to production and GMP workflows. Currently working with Clinxcon supporting ICSR case processing, literature management, and documentation activities. Published academic research in nanoemulgel formulation and skilled in analysis, communication, organization, and basic German (A2).`,
  },
  {
    id: 5,
    name: "Sushma",
    role: "PV DATABASE EXPERT",
    img: "/member5.png",
    desc: `Sushma 
PV Database Expert 

A dedicated B.Pharm professional currently working as a Pharmacovigilance Project Coordinator at Clinxcon Research, supporting PV operations including ICSR case processing (beginner level), literature search & management, SOP drafting, training coordination, and audit/inspection readiness. Previously interned in Quality Control at Micro Labs Ltd, gaining hands-on exposure to QC processes and documentation. Strong in communication, attention to detail, and quick learning, with growing expertise across drug safety, clinical research documentation, and regulatory workflows—ready to contribute effectively to evolving PV and clinical operations roles.`,
  },
];

/* ================= COMPONENT ================= */

const Team = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFB]">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 pt-12 md:pt-16 pb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-6 relative inline-block">
          Our Team
        </h2>
      </section>

      {/* MEMBERS */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-20">

        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start pl-0 md:pl-8"
          >

            {/* LEFT – IMAGE + NAME + ROLE */}
            <motion.div
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="inline-block border-2 border-black p-1">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[200px] h-[240px] sm:w-[220px] sm:h-[260px] object-contain"
                />
              </div>

              {/* NAME – GRADIENT */}
              <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left
                bg-gradient-to-r from-[#0F766E] via-[#0891B2] to-[#2563EB]
                bg-clip-text text-transparent break-words">
                {member.name}
              </h3>

              {/* ROLE – SLIGHTLY SMALLER + WRAP */}
              <h4 className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-black
                text-center md:text-left break-words leading-snug">
                {member.role}
              </h4>
            </motion.div>

            {/* RIGHT – CONTENT ONLY */}
            <motion.div
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mt-1 text-sm sm:text-base md:text-[18px] lg:text-[19px]
                leading-relaxed text-black font-normal whitespace-pre-line text-justify">
                {member.desc.split("\n").slice(2).join("\n")}
              </p>
            </motion.div>

          </div>
        ))}

      </section>
    </div>
  );
};

export default Team;
