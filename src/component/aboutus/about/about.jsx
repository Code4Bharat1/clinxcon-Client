"use client";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* ================= ABOUT US SECTION ================= */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-12">
          About Us
        </h2>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – TEXT */}
          <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
              <span className="font-semibold text-green-700">Clinxcon</span>{" "}
              delivers specialized Pharmacovigilance training and consulting
              services designed to support organizations in building robust,
              compliant, and inspection-ready safety systems. Our approach
              combines practical industry knowledge, regulatory insight, and
              operational excellence to help clients navigate complex global PV
              requirements with confidence.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center lg:justify-end">
  <div
    className="
      relative
      rounded-[28px]
      overflow-hidden
      shadow-xl

      w-full
      max-w-[460px]           
      h-[320px] sm:h-[380px] md:h-[440px] lg:h-[430px]  
    "
  >
    <img
      src="/about.png"
      alt="About Clinxcon"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        </div>
      </section>

      {/* ================= WHY CLINXCON SECTION ================= */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">

        {/* HEADING */}
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Why{" "}
            <span className="font-semibold text-green-700">
              Clinxcon ?
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – IMAGE */}
          <div className="flex justify-center lg:justify-start">
  <div className="relative rounded-[32px] overflow-hidden shadow-2xl 
                  max-w-[480px] w-full
                  h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]">
    <img
      src="/Whyclinxcon.png"
      alt="Why Clinxcon"
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* RIGHT – TEXT */}
          <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
              ClinXcon work closely with start-up innovators, growing companies, and established pharma and biotech organizations, offering tailored solutions that address real-world challenges across the PV lifecycle. From hands-on training to process design, SOP implementation, audit preparedness, and operational support, ClinXcon focuses on solutions that are both effective and sustainable.</p>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
Our USP includes ;-</p>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl"> 
•	Quality-focused delivery aligned with regulatory and quality compliance</p>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">  
•	Commitment to timely and reliable deliverables</p>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">  
•	A collaborative, partnership-driven approach to drive client success</p>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.9] text-justify text-black max-w-xl">
Choose ClinXcon as your trusted partner for Pharmacovigilance training and consulting, where compliance, operational efficiency, and patient safety remain at the core of everything we do.

            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
