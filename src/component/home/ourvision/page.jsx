"use client";
import React from "react";

export default function MissionVision() {
  return (
    <div className="py-8 sm:py-10 lg:py-12 
                    px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 
                    bg-white 
                    mt-6 sm:mt-8 lg:mt-10 
                    flex justify-center">
      
      <div className="w-full max-w-7xl">
        {/* Dark Gray Top Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 pt-6 sm:pt-8">
          
          <div className="w-full md:w-1/4 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 font-semibold text-gray-800 leading-tight tracking-wide">
              Our <br /> Vision
            </h3>
          </div>

          <div className="w-full md:w-3/4 md:max-w-[80%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Be Passionate Challengers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              To be a trusted global partner in Pharmacovigilance consulting, empowering pharmaceutical companies to achieve excellence in drug safety and compliance through strategic expertise, innovation, and unwavering quality.
            </p>
          </div>
        </div>

        {/* Middle Dark Gray Divider */}
        <div className="border-t border-gray-700 my-6 sm:my-8"></div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 pt-6 sm:pt-8">
          
          <div className="w-full md:w-1/4 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 font-semibold text-gray-800 leading-tight tracking-wide">
              Our <br /> Mission
            </h3>
          </div>

          <div className="w-full md:w-3/4 md:max-w-[80%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Excellence in Every Dose.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              To strengthen global drug safety by empowering organizations to build and optimize effective in-house Pharmacovigilance capabilities, integrating our PV and medical expertise with evolving regulatory expectations and appropriate technologies to ensure efficient, compliant, and patient-centric safety systems.
            </p>
          </div>
        </div>

        {/* Bottom Dark Line */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8"></div>
      </div>
    </div>
  );
}
