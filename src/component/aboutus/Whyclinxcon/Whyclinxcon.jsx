"use client";
import React from "react";

const WhyClinxcon = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          Why{" "}
          <span className="font-semibold text-green-700">
            Clinxcon
          </span>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT – IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl max-w-[480px] w-full">
            <img
              src="/whyclinxcon.jpg"   // replace with your image
              alt="Why Clinxcon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT – TEXT */}
        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-black text-justify max-w-xl">
            Clinxcon has established itself as a trusted global partner in
            Pharmacovigilance, leveraging over a decade of expertise in an
            ever-evolving regulatory landscape. With our modular and end-to-end
            Drug Safety solutions, supported by regulatory-compliant database
            access when needed, we empower clients to meet compliance
            requirements and prioritize Patient Safety effectively.
          </p>

          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-black text-justify max-w-xl">
            Our passion for Pharmacovigilance drives us to bridge industry gaps
            and deliver high-quality, customized services that address the
            unique challenges of both emerging innovator companies and
            established pharma/biotech manufacturers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyClinxcon;
