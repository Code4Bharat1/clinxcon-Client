"use client";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white">

      {/* ================= ABOUT US SECTION ================= */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT – HEADING + TEXT */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
                About Us
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
                <span className="font-bold text-green-700">ClinXcon</span>{" "}
                delivers specialized Pharmacovigilance training and consulting
                services designed to support organizations in building robust,
                compliant, and inspection-ready safety systems. Our approach
                combines practical industry knowledge, regulatory insight, and
                operational excellence to help clients navigate complex global PV
                requirements with confidence.
              </p>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-end">
            <div className="relative rounded-[28px] overflow-hidden shadow-xl w-full max-w-[460px] h-full">
              <img
                src="/about.png"
                alt="About ClinXcon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CLINXCON SECTION ================= */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT – HEADING + IMAGE */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-10">
                Why{" "}
                <span className="font-bold text-green-700">
                  ClinXcon ?
                </span>
              </h2>

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[480px] h-full">
                <img
                  src="/whyclinxcon.png"
                  alt="Why ClinXcon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT – TEXT */}
          <div className="flex flex-col justify-start">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
              <span className="font-bold text-green-700">ClinXcon</span>{" "}
              works closely with start-up innovators, growing companies,
              and established pharma and biotech organizations, offering tailored
              solutions that address real-world challenges across the PV
              lifecycle. From hands-on training to process design, SOP
              implementation, audit preparedness, and operational support,
              <span className="font-bold text-green-700"> ClinXcon</span>{" "}
              focuses on solutions that are both effective and sustainable.
            </p>

            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-black">
              Our USP includes :-
            </p>

            <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-xl">
              <li>• Quality-focused delivery aligned with regulatory and quality compliance</li>
              <li>• Commitment to timely and reliable deliverables</li>
              <li>• A collaborative, partnership-driven approach to drive client success</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
