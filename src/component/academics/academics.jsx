"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Clinical Research",
    img: "/clinicalresearch.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Pharmacovigilance (Safety)",
    img: "/pharmacovigilance.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Clinical Data Management",
    img: "/clinicaldata.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
  {
    title: "Medical Writing",
    img: "/medicalwriting.png",
    desc: "Eligibility : Post-Graduation in Life Sciences / Pharmaceutical Sciences , Graduation in Medical , Dental",
  },
  {
    title: "Regulatory Affairs",
    img: "/regulatory.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
  {
    title: "Ask for your customized topic ",
    img: "/clinicaldata.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  }
];

function CoursesSection() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

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

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Services
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8 text-justify">
          <strong>X-Shala</strong> is ClinXcon’s dedicated academic training platform for Medical, Pharmacy, and Life Sciences graduates.
          Our programs are specialized, hands-on, and career-focused, carefully designed to bridge the gap between classroom learning and industry expectations.
          With practical learning, real-world case studies, and industry-aligned modules, X-Shala equips students with strong subject knowledge,
          practical skills, and career readiness for roles in Clinical Research, Pharmacovigilance, Clinical Data Management, Medical Writing,
          Regulatory Affairs, and other related life-science domains.
          <br /><br />
          At X-Shala, we don’t just train — <strong>we shape future life-science professionals for real-world careers.</strong>
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4">
          Popular Services
        </h3>

        <img
          src="/button.png"
          alt="Courses Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mb-4 sm:mb-5 h-auto ml-2 sm:ml-3 md:ml-5"
        />

        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", `-${sliderWidth / 2}px`] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...courses, ...courses].map((course, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <div className="relative flex flex-col h-full">

                  {/* IMAGE (FIXED HEIGHT) */}
                  <div className="relative h-48 sm:h-52 md:h-60 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <motion.img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>

                  {/* CONTENT (FIXED HEIGHT ADDED ✅) */}
                  <div className="min-h-[200px] sm:min-h-[220px] bg-gradient-to-br from-gray-900 via-gray-900 to-black text-[#6AB365] p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center">
                    <motion.h4 className="text-base sm:text-lg md:text-xl font-bold mb-3">
                      {course.title}
                    </motion.h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
