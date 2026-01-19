"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Corporate() {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const cards = [
    { title: "ICH-GCP (R3)", img: "/training1.png" },
    { title: "Aggregate Reports", img: "/corp1.jpg" },
    { title: "Signal Management", img: "/corp2.jpg" },
    { title: "GVP Modules", img: "/corp2.jpg" },
    { title: "Audit & Inspection Readiness", img: "/corp2.jpg" },
    { title: "Customized Corporate Training", img: "/corp2.jpg" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth);
    }
    const resize = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.scrollWidth);
      }
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative py-14 sm:py-18 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="ml-2 sm:ml-3 md:ml-5 mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative inline-block">
            Corporate Training
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#6AB365]" />
          </h2>
        </div>

        {/* ================= X-SKILLS STORY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl ml-2 sm:ml-3 md:ml-5 mb-14"
        >
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.9] text-justify">
            <span className="font-semibold text-gray-900">X-Skills</span> is ClinXcon’s
            domain-focused corporate training initiative designed for professionals
            across CROs, pharma, and healthcare IT. Our programs strengthen role-based
            expertise, regulatory awareness, and audit readiness through
            hands-on, industry-aligned learning.
            <br /><br />
            We prepare teams for higher responsibility, leadership pathways, and
            future-ready compliance in an evolving clinical research and
            pharmacovigilance ecosystem.
          </p>
        </motion.div>

        {/* ================= CTA BANNER ================= */}
        <div className="ml-2 sm:ml-3 md:ml-5 mb-10">
          <img
            src="/button.png"
            alt="Popular Corporate Programs"
            className="w-full max-w-[420px]"
          />
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-6 md:gap-8"
            animate={{ x: ["0%", `-${sliderWidth / 2}px`] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {[...cards, ...cards].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="min-w-[280px] lg:min-w-[320px] 
                           h-[420px] bg-white rounded-3xl 
                           shadow-lg hover:shadow-2xl 
                           transition-all duration-500 overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="h-[55%] relative overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="h-[45%] bg-gradient-to-br from-gray-900 to-black 
                                text-[#6AB365] flex flex-col 
                                items-center justify-center text-center p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-4 min-h-[3rem]">
                    {card.title}
                  </h4>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full text-sm font-semibold text-white
                               bg-gradient-to-r from-[#6DB880] to-[#6AB365] shadow-md"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Corporate;
