"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Interview() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const interviewCards = [
    { title: "HR Interview Preparation", img: "/soft-skill.jpg" },
    { title: "Technical Interview Training", img: "/soft-skill.jpg" },
    { title: "Communication Skills Enhancement", img: "/soft-skill.jpg" },
    { title: "Mock Interviews & Practice Sessions", img: "/soft-skill.jpg" },
    { title: "Technical Evaluation & Feedback", img: "/soft-skill.jpg" },
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
          Interview
        </h2>

        {/* INTRO PARAGRAPH */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            At{" "}
            <span className="font-bold text-green-700">ClinXcon</span>, our
            Interview Guidance Program is designed to help students and early
            professionals crack interviews with confidence and industry
            readiness.
            <br /><br />
            We have a specialized team of industry experts who train candidates
            across HR rounds, technical interviews, and behavioral
            assessments—ensuring complete interview preparedness.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            What We Offer
          </h3>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9]">
            <span className="font-semibold text-gray-900">
              • HR Interview Preparation:
            </span>{" "}
            confidence building, body language, salary discussions, and
            professional etiquette
            <br />
            <span className="font-semibold text-gray-900">
              • Technical Interview Training:
            </span>{" "}
            PV, Clinical Research, CDM & Medical Writing–specific question handling
            <br />
            <span className="font-semibold text-gray-900">
              • Communication Skills Enhancement:
            </span>{" "}
            clarity, fluency, structured responses, and professional communication
            <br />
            <span className="font-semibold text-gray-900">
              • Technical Evaluation & Feedback:
            </span>{" "}
            gap analysis with personalized improvement plans
          </p>
        </div>
      </div>
    </section>
  );
}

export default Interview;
