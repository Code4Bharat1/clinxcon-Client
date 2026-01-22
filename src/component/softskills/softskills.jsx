"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function SoftSkills() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const softSkillCards = [
    { title: "Strategic Communication for Leaders", img: "/soft-skill.jpg" },
    { title: "Emotional Intelligence (EQ) for Leaders", img: "/soft-skill.jpg" },
    { title: "Stakeholder & Client Management", img: "/soft-skill.jpg" },
    { title: "Coaching & Mentoring Skills", img: "/soft-skill.jpg" },
    { title: "Ask for your customized topic", img: "/soft-skill.jpg" },
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
          Soft Skills
        </h2>

        {/* PARAGRAPH */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            <span className="font-semibold text-green-600">ClinXcon</span> is <span className="font-semibold text-green-600">ClinXcon</span>’s soft skills training initiative designed for corporate professionals aspiring to move into managerial and leadership roles. In today’s workplace, strong communication and interpersonal skills are essential for sustained success. Even with solid technical expertise, gaps in soft skills can restrict career growth—especially during performance appraisals.
            At <span className="font-semibold text-green-600">ClinXcon</span>, we address this through structured, practical, and role-focused training that builds confidence, improves workplace effectiveness, and prepares professionals for promotions and leadership responsibilities.
            With X-Comms, you don’t fall behind due to non-technical gaps—you grow, progress, and excel.
          </p>
        </div>

        {/* BANNER */}
        <img
          src="/button.png"
          alt="Soft Skills Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mb-6 h-auto"
        />

        {/* SLIDER – SAME AS COURSES */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", `-${sliderWidth / 2}px`] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...softSkillCards, ...softSkillCards].map((card, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px]
                           bg-white rounded-2xl sm:rounded-3xl shadow-xl
                           overflow-hidden flex flex-col group"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-52 md:h-60 bg-gray-900 overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-900 to-black
                                text-[#6AB365] p-4 sm:p-5 md:p-6
                                flex flex-col items-center justify-center text-center relative">

                  <motion.h4
                    className="text-base sm:text-lg md:text-xl font-bold mb-4 min-h-[3.5rem]
                               flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.title}
                  </motion.h4>

                  {/* LEARN MORE */}
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white
                               bg-gradient-to-r from-[#6DB880] to-[#6AB365] shadow-lg"
                  >
                    Learn More
                  </motion.button>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1
                               bg-gradient-to-r from-[#6DB880] via-[#6AB365] to-[#6DB880]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default SoftSkills;
