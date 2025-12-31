"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MedicalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const slides = [
    { image: "/image1.png", lines: ["WELCOME TO", "Clinxcon"] },
    { image: "/image2.png", lines: ["SHAPING THE","NEXT ERA OF","INTELLIGENT SAFETY","SURVEILLANCE"] },
    { image: "/image3.png", lines: ["TURNING", "SAFETY DATA", "INTO SMART", "INSIGHTS"] },
    { image: "/image4.png", lines: ["DRIVING SMARTER","PHARMACOVIGILANCE THROUGH","EXPERTISE & INNOVATION"] },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length, isMounted]);

  if (!isMounted) {
    return (

      <div
        className="relative w-full overflow-hidden shadow-xl min-h-[350px] sm:min-h-[400px] md:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url('${slides[0].image}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    );
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const franklinFont = {
    fontFamily:
      '"Franklin Gothic Demi", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    letterSpacing: "0.5px",
  };

  return (
    <div className="relative w-full overflow-hidden mt-3 sm:mt-4 lg:mt-5 shadow-xl min-h-[400px] sm:min-h-[480px] md:min-h-[550px]">
      {/* === Background Slideshow === */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } bg-cover bg-center`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        ))}
      </div>

      {/* === LEFT / RIGHT ARROW BUTTONS === */}
<button
  onClick={(e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }}
  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30
             bg-white/20 hover:bg-white/30 text-white 
             backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center
             transition-all duration-300 border border-white/40"
>
  ‹
</button>

<button
  onClick={(e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }}
  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30
             bg-white/20 hover:bg-white/30 text-white
             backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center
             transition-all duration-300 border border-white/40"
>
  ›
</button>


      {/* === Banner Content === */}
      <div className="relative flex flex-col min-h-[400px] sm:min-h-[480px] md:min-h-[550px] md:flex-row">
        
        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden relative w-full px-4 py-8 sm:px-6 sm:py-10 flex flex-col justify-center text-white z-20 min-h-[400px] sm:min-h-[460px]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom right, #6ec492 0%, #3caea3 50%, #1a6e87 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
              opacity: "0.85",
            }}
          ></div>

          <div className="relative z-10 text-center backdrop-blur-[3px] px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slides[currentIndex].lines.map((line, i) => (
                  <motion.h2
                    key={i}
                    custom={i}
                    variants={lineVariants}
                    style={franklinFont}
                    className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-white leading-tight sm:leading-snug tracking-tight uppercase"
                  >
                    {line}
                  </motion.h2>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div
          className="hidden md:flex relative w-[55%] lg:w-[57%] xl:w-[55%]   w-[45%] lg:w-[48%] xl:w-[45%] w-[35%] lg:w-[38%] xl:w-[35%] p-8 lg:p-10 xl:p-14 flex-col justify-center text-white z-20 backdrop-blur-[5px] min-h-[480px] lg:min-h-[500px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)"



,

          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#68c07e]/80 via-[#469d8b]/75 to-[#1a6e87]/70 opacity-[0.9] z-0"></div>

          <div className="relative z-10 -translate-y-[30px] lg:-translate-y-[40px] translate-x-[-5px] lg:translate-x-[-10px] text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slides[currentIndex].lines.map((line, i) => (
                  <motion.h2
                    key={i}
                    custom={i}
                    variants={lineVariants}
                    style={franklinFont}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight lg:leading-snug tracking-tight uppercase"
                  >
                    {line}
                  </motion.h2>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* === Right Side (Unused spacing) === */}
        <div className="relative w-full md:w-[65%] lg:w-[62%] xl:w-[65%] min-h-[400px] sm:min-h-[480px] md:min-h-[500px] lg:min-h-[575px] mt-0 md:mt-10"></div>
      </div>

      {/* === Slider Dots === */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
              currentIndex === index
                ? "bg-white scale-110 shadow-md"
                : "bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
} 