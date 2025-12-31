"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Corporate() {
  const cards = [
    {
      duration: "1 year",
      img: "/training1.png",
      title: "Empower Teams With Clinxcon’s Industry-Ready Training",
      desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental Sc"
    },
    {
      duration: "4 weeks",
      img: "/corp1.jpg",
      title: "Medical Writing",
      desc: "Eligibility : Post-Graduation in Life Sciences / Pharmaceutical Sciences , Graduation in Medical , Dental"
    },
    {
      duration: "4 weeks",
      img: "/corp2.jpg",
      title: "Clinical Research",
      desc: "Eligibility : Graduation / Post-Graduation in Life Sciences / Pharmaceutical Sciences , Medical , Dental Sc"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Corporate
        </h2>

        <img 
          src="/button.png"
          alt="Corporate Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mb-4 sm:mb-5 h-auto"
        />

        {/* IDENTICAL GRID AS COURSES PAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative flex flex-col h-full">

                {/* DURATION BADGE */}
                <motion.div 
                  className="absolute top-3 right-3 z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-[#6DB880] to-[#6AB365] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {card.duration}
                  </span>
                </motion.div>

                {/* IMAGE */}
                <div className="relative h-48 sm:h-52 md:h-60 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class='w-full h-full flex items-center justify-center'>
                          <div class='text-center'>
                            <svg class='w-16 h-16 mx-auto text-[#6DB880]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                            </svg>
                          </div>
                        </div>
                      `;
                    }}
                  />

                  {/* SHIMMER */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* CONTENT */}
                <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-900 to-black text-[#6AB365] p-5 flex flex-col items-center text-center relative overflow-hidden">

                  {/* GLOW CIRCLES */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#6DB880] rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6AB365] rounded-full blur-3xl" />
                  </div>

                  {/* TITLE */}
                  <motion.h4 
                    className="text-lg font-bold mb-3 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.title}
                  </motion.h4>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 relative z-10 px-2">
                    {card.desc}
                  </p>

                  {/* BOTTOM BORDER */}
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
        </div>

      </div>
    </section>
  );
}
