"use client";
import React, { useEffect, useRef, useState } from "react";
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
  // {
  //   title: "Signal Detection & Medical Review",
  //   duration: "3 Weeks",
  //   img: "/signalreview.png",
  //   desc: "Eligibility : Freshers and Life Science Professionals / Medical , Dental",
  // },
  // {
  //   title: "Empower Teams With Clinxcon's Industry-Ready Training",
  //   duration: "1 Year",
  //   img: "/training.png",
  //   desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences",
  // },


  // {
  //   title: "Soft Skills Training Modules by Clinxcon",
  //   duration: "4 Weeks",
  //   img: "/softskills.png",
  //   desc: "Eligibility : Graduation / Post-Graduation in Life & Pharmaceutical Sciences",
  // },
];

export default function Services() {
  const scrollRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted, isPaused]);

  if (!isMounted) {
    return (
      <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl italic font-extrabold">Services</h2>
      </section>
    );
  }

  const scrollingCourses = [...courses, ...courses];

  return (
    <section
      className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "Times New Roman" }}
    >
      {/* HEADING with animation */}
      <div className="mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-bold text-black relative inline-block">
          Services
          <span className="absolute left-0 -bottom-2 sm:-bottom-3 w-32 sm:w-40 md:w-50 h-[3px] sm:h-[4px] bg-[#0B132B] rounded-full"></span>
        </h2>
      </div>

      {/* CARD SCROLLER */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 md:gap-8 overflow-hidden no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {scrollingCourses.map((course, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-black rounded-[20px] sm:rounded-[25px] overflow-hidden group relative"
            style={{
              width: "280px",
              minWidth: "280px",
              height: "380px",
            }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-[20px] sm:rounded-[25px]" />

            {/* Image Container */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "210px",
                width: "100%",
              }}
            >
              <motion.img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover rounded-t-[20px] sm:rounded-t-[25px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Duration Badge */}
              <motion.div
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(28, 163, 163, 0.95)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {course.duration}
              </motion.div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            {/* Content Section */}
            <div
              className="bg-gradient-to-br from-gray-900 to-black rounded-b-[20px] sm:rounded-b-[25px] relative"
              style={{
                height: "170px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-b-[20px] sm:rounded-b-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, #58B95C, #1CA3A3)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="font-bold mb-2 sm:mb-3 leading-tight"
                  style={{
                    color: "#58B95C",
                    fontSize: "17px",
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  {course.title}
                </motion.h3>

                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {course.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div 
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #58B95C 0%, transparent 70%)",
                  borderRadius: "0 0 20px 0",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Touch/Swipe indicator for mobile */}
      {/* <div className="mt-6 sm:mt-8 text-center md:hidden">
        <p className="text-sm text-gray-500 italic">
          Swipe to explore more courses →
        </p>
      </div> */}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
        
        @media (max-width: 640px) {
          .no-scrollbar {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
}