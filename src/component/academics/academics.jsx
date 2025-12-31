"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Clinical Research",
    duration: "4 Weeks",
    img: "/clinicalresearch.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Pharmacovigilance (Safety)",
    duration: "5 Weeks",
    img: "/pharmacovigilance.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences / Medical , Dental",
  },
  {
    title: "Clinical Data Management",
    duration: "5 Weeks",
    img: "/clinicaldata.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
  {
    title: "Medical Writing",
    duration: "4 Weeks",
    img: "/medicalwriting.png",
    desc: "Eligibility : Post-Graduation in Life Sciences / Pharmaceutical Sciences , Graduation in Medical , Dental",
  },
  {
    title: "Regulatory Affairs",
    duration: "4 Weeks",
    img: "/regulatory.png",
    desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental",
  },
];

export default function CoursesSection() {
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
        {/* Header with Animation */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Services
        </h2>

        <img
          src="/button.png"
          alt="Courses Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mb-4 sm:mb-5 h-auto"
        />

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", `-${sliderWidth / 2}px`] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {/* Duplicate the cards for seamless loop */}
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
                {/* Card Content Container */}
                <div className="relative flex flex-col h-full">
                  {/* Duration Badge */}
                  <motion.div
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-[#6DB880] to-[#6AB365] text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm">
                      {course.duration}
                    </span>
                  </motion.div>

                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 md:h-60 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <motion.img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-center">
                            <svg class="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#6DB880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                        </div>
                      `;
                      }}
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-900 to-black text-[#6AB365] p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#6DB880] rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#6AB365] rounded-full blur-3xl" />
                    </div>

                    <motion.h4
                      className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center relative z-10 px-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {course.title}
                    </motion.h4>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow flex items-center justify-center relative z-10 px-2">
                      {course.desc}
                    </p>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6DB880] via-[#6AB365] to-[#6DB880]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
