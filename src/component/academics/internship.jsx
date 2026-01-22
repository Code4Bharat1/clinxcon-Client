"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Internship() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const internshipCards = [
    { title: "Pharmacovigilance (PV) Internship", img: "/soft-skill.jpg" },
    { title: "Clinical Data Management (CDM) Internship", img: "/soft-skill.jpg" },
    { title: "Clinical Research Internship", img: "/soft-skill.jpg" },
    { title: "Live System & Database Exposure", img: "/soft-skill.jpg" },
    { title: "Mentored Industry Training Program", img: "/soft-skill.jpg" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth);
    }
    const handleResize = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.scrollWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4">
          Internship
        </h2>

        {/* PARAGRAPH */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            At{" "}
            <span className="font-bold text-green-700">ClinXcon</span>, our
            internships focus on practical training, expert mentoring, and live
            system exposure—enabling students to confidently transition from
            academics to industry.
            <br /><br />
            <span className="font-semibold text-gray-900">
              Internship Tracks Available
            </span>
            <br /><br />
            <span className="font-semibold text-gray-900">
              • Pharmacovigilance (PV):
            </span>{" "}
            ICSR processing, SAE/ADR/SUSAR assessment, MedDRA coding, reporting
            timelines, live database exposure
            <br />
            <span className="font-semibold text-gray-900">
              • Clinical Data Management (CDM):
            </span>{" "}
            CRF review, query management, data quality fundamentals
            <br />
            <span className="font-semibold text-gray-900">
              • Clinical Research:
            </span>{" "}
            ICH-GCP basics, protocols, monitoring & documentation
          </p>
        </div>
      </div>
    </section>
  );
}

export default Internship;
