"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Communication() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const communicationCards = [
    { title: "Professional Communication Fundamentals", img: "/soft-skill.jpg" },
    { title: "Corporate Etiquette & Workplace Behavior", img: "/soft-skill.jpg" },
    { title: "Presentation & Public Speaking Skills", img: "/soft-skill.jpg" },
    { title: "Documentation & Email Writing Skills", img: "/soft-skill.jpg" },
    { title: "Customized Communication Training", img: "/soft-skill.jpg" },
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
          Communication
        </h2>

        {/* PARAGRAPH */}
        <div className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-8">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            <span className="font-semibold text-gray-900">X-Comms</span> is{" "}
            <span className="font-bold text-green-700">ClinXcon</span>’s focused
            training and mentoring program designed to build essential soft
            skills and professional communication for Pharmacy and life sciences
            students and early-career professionals. The program helps learners
            transition confidently from academic environments into the
            corporate world.
            <br /><br />
            X-Comms enhances workplace communication, stakeholder interaction,
            documentation clarity, presentation skills, and professional
            conduct—enabling students to collaborate effectively, express ideas
            clearly, and perform with confidence in corporate and regulatory
            settings.
            <br /><br />
            By strengthening personal effectiveness, teamwork, and leadership
            readiness, X-Comms prepares students not just for their first
            job—but for long-term professional growth.
            <br /><br />
            <span className="font-semibold text-gray-900">
              Communicate better. Perform stronger. Grow faster.
            </span>
          </p>
        </div>

        {/* BANNER */}
        <img
          src="/button.png"
          alt="Communication Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mb-6 h-auto"
        />

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-5 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", `-${sliderWidth / 2}px`] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...communicationCards, ...communicationCards].map((card, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px]
                           bg-white rounded-2xl sm:rounded-3xl shadow-xl
                           overflow-hidden flex flex-col group"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 sm:h-52 md:h-60 bg-gray-900 overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                <div
                  className="flex-grow bg-gradient-to-br from-gray-900 via-gray-900 to-black
                             text-[#6AB365] p-4 sm:p-5 md:p-6
                             flex flex-col items-center justify-center text-center relative"
                >
                  <motion.h4
                    className="text-base sm:text-lg md:text-xl font-bold mb-4 min-h-[3.5rem]
                               flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.title}
                  </motion.h4>

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

export default Communication;
