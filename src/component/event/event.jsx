"use client";
import React from "react";
import { Poltawski_Nowy } from "next/font/google";

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-10">

      {/* ========= HEADER ========= */}
      <div className="w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-black">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Events
        </h2>
      </div>

      {/* ======= EVENTS SECTION ======= */}
{/* ======= EVENTS SECTION ======= */}
<div className="w-full flex justify-center mt-12 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">

    {/* ================= LEFT CARD ================= */}
    <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_#A5F3AC] border border-green-300 max-w-[420px]">

      {/* LIVE + WEBINAR */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <img src="/p1.png" className="w-70 h-25" />

        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-green-700 font-extrabold text-xl leading-snug">
        CLINICAL RESEARCH <br />
        OF PHARMACOVIGILANCE <br />
        AGGREGATE REPORTS
      </h2>

      {/* Bullet Points */}
      <div className="flex justify-between px-6 mt-4 text-[15px] font-bold text-gray-800">
        <ul className="space-y-1">
          <li>• PSUR</li>
          <li>• DSUR</li>
        </ul>
        <ul className="space-y-1">
          <li>• PADER</li>
          <li>• PBRER</li>
        </ul>
      </div>

      {/* Description */}
      <p className="text-center text-gray-700 mt-4 text-[14px] font-semibold leading-relaxed">
        Discover the joy and energy of sports through our exclusive event 
        designed to promote fitness, teamwork, and fun.
      </p>

      {/* Footer */}
      <div className="flex justify-center gap-10 mt-5 text-[14px] text-black font-bold">
        <div className="flex items-center gap-2">
          <i className="ri-calendar-line text-[16px]"></i>
          <p>19-05-2025</p>
        </div>

        <div className="flex items-center gap-2">
          <i className="ri-time-line text-[16px]"></i>
          <p>06:52 AM</p>
        </div>
      </div>
    </div>

    {/* ================= RIGHT CARD ================= */}
    <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_#A5D8F3] border border-cyan-300 max-w-[420px]">

      {/* LIVE + WEBINAR */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <img src="/p1.png" className="w-70 h-25" />

        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-green-700 font-extrabold text-xl">
        THE ROLE OF A CRA
      </h2>
      <p className="text-center text-gray-700 font-extrabold text-[14px] mt-1">
        CLINICAL RESEARCH ASSOCIATE
      </p>

      {/* Bullet List with Bars */}
      <div className="mt-6 space-y-3 text-[14px] text-gray-900 font-bold">
        {[
          "Verify Data Accuracy",
          "Ensure Patient Safety",
          "Monitor Clinical Trials",
          "Manage Documentation",
          "Maintain Communication",
          "Train and Support Site Staff",
        ].map((item, idx) => (
          <div key={idx}>
            <div className="h-[2px] bg-gray-300 mb-1"></div>
            <p className="text-center">{item}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-center gap-10 mt-5 text-[14px] text-black font-bold">
        <div className="flex items-center gap-2">
          <i className="ri-calendar-line text-[16px]"></i>
          <p>24-08-2025</p>
        </div>

        <div className="flex items-center gap-2">
          <i className="ri-time-line text-[16px]"></i>
          <p>07:30 PM</p>
        </div>
      </div>
    </div>

  </div>
</div>


    </div>
  );
};

export default EventsPage;
