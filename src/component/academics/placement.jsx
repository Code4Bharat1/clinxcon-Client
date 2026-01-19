"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Placement() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const placementCards = [
    { title: "Placement Assistance Program", img: "/soft-skill.jpg" },
    { title: "Hospital & Clinical Site Opportunities", img: "/soft-skill.jpg" },
    { title: "CROs, SMOs & BA/BE Centers", img: "/soft-skill.jpg" },
    { title: "Healthcare IT & Pharma Roles", img: "/soft-skill.jpg" },
    { title: "Career Guidance & Job Alignment", img: "/soft-skill.jpg" },
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
          Placement
        </h2>

        {/* INTRO PARAGRAPH */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            <span className="font-semibold text-gray-900">
              X-Connect | Placement Assistance at ClinXcon – Bridging Talent with Opportunity
            </span>
            <br /><br />
            At <span className="font-semibold text-gray-900">ClinXcon</span>, we don’t just train—you get guided placement support to help you step confidently into the healthcare and clinical research industry.
            <br /><br />
            Our Placement Assistance Program connects trained candidates with hospitals, CROs, SMOs, BA/BE centers, healthcare IT companies, and pharma organizations—aligning skills with real-world job opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Placement;
