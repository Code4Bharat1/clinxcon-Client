"use client";
import React, { useState } from "react";

export default function PharmacovigilanceConsulting() {
  const [openFeature, setOpenFeature] = useState(null);

  const features = [
    // {
    //   id: 1,
    //   title:
    //     "Transformational Pharmacovigilance Support, Leveraging Technology & AI",
    //   content:
    //     "Advanced AI-driven solutions for pharmacovigilance processes, ensuring faster and more accurate safety monitoring.",
    // },
    {
      id: 2,
      title: "Audit & Inspection Preparation, Readiness, and Support",
      content:
        "Comprehensive preparation and support services to ensure your organization is fully ready for regulatory audits and inspections.",
    },
    {
      id: 3,
      title: "Training and Development of Client Staff",
      content:
        "Customized training programs designed to upskill your team in pharmacovigilance best practices and compliance requirements.",
    },
    {
      id: 4,
      title: "Development and Maintenance of PV QMS",
      content:
        "Expert assistance in creating and maintaining a robust Pharmacovigilance Quality Management System aligned with global standards.",
    },
    {
      id: 5,
      title: "Strategic Deployment of Contract Staff",
      content:
        "Flexible staffing solutions providing experienced and highly-trained pharmacovigilance professionals.",
    },
    {
      id: 6,
      title: "Development of SOPs, Work Instructions & Guides",
      content:
        "Creation of comprehensive documentation to standardize processes & ensure compliance across all PV operations.",
    },
    {
      id: 7,
      title: "PV QMS Optimization & Continuous Improvement",
      content:
        "Ongoing evaluation, optimization, and enhancement of your Quality Management System for sustained compliance.",
    },
  ];

  const toggleFeature = (id) => {
    setOpenFeature(openFeature === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-25 py-6 sm:py-8 lg:py-10">
      <div className="">
        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mt-2 text-left">
          Pharmacovigilance Consulting
        </h1>

        {/* INTRO SECTION */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-center mt-4 sm:mt-6">
          <p className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed text-justify">
            At Clinxcon, we provide comprehensive global Pharmacovigilance
            Consulting services designed to ensure regulatory compliance,
            enhance productivity, and achieve strategic Drug Safety outcomes.
            With deep expertise across the Pharmacovigilance domain, Clinxcon
            empowers clients to address safety concerns confidently. From
            establishing robust systems to audit readiness, leveraging AI, and
            deploying specialized staff, we deliver tailored solutions for your
            organization.
          </p>

          <div className="flex-1 w-full max-w-md mx-auto">
            <img
              src="/pharConsult.jpg"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
              alt="Consulting"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="relative w-full mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10">
          {/* Green Bar */}
          <div className="bg-[#7CBF8A] w-full py-2.5 sm:py-3 lg:py-4 rounded-md shadow-md flex justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide text-center px-4">
              Our services
            </h2>
          </div>
        </div>

        {/* GRID LAYOUT — INDEPENDENT COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {features.slice(0, 4).map((f) => (
              <div key={f.id}>
                {/* Button */}
                <button
                  onClick={() => toggleFeature(f.id)}
                  className="w-full bg-[#89D284] text-black px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 rounded-xl shadow hover:shadow-lg transition-all flex justify-between items-center gap-3"
                >
                  <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-[19px] text-left leading-tight">
                    {f.title}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700 flex-shrink-0">
                    {openFeature === f.id ? "−" : "+"}
                  </span>
                </button>

                {/* INSTANT OPEN SECTION */}
                {openFeature === f.id && (
                  <div className="bg-green-50 p-4 sm:p-5 rounded-xl border border-[#7ED957] mt-2 shadow-sm">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-[17px] leading-relaxed">
                      {f.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {features.slice(4, 7).map((f) => (
              <div key={f.id}>
                {/* Button */}
                <button
                  onClick={() => toggleFeature(f.id)}
                  className="w-full bg-[#89D284] text-black px-4 sm:px-5 lg:px-6 py-3.5 sm:py-4 lg:py-5 rounded-xl shadow hover:shadow-lg transition-all flex justify-between items-center gap-3"
                >
                  <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-[19px] text-left leading-tight">
                    {f.title}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700 flex-shrink-0">
                    {openFeature === f.id ? "−" : "+"}
                  </span>
                </button>

                {/* INSTANT OPEN SECTION */}
                {openFeature === f.id && (
                  <div className="bg-green-50 p-4 sm:p-5 rounded-xl border border-[#7ED957] mt-2 shadow-sm">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-[17px] leading-relaxed">
                      {f.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}