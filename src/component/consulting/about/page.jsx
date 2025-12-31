import React from "react";

const AboutSection = () => {
  return (
    <div
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mt-2"
      style={{ backgroundColor: "#36A2C080" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Left Column - Header + Image */}
        <div
          className="p-4 sm:p-6 shadow-lg"
          style={{ backgroundColor: "#1C1B1F" }}
        >
          {/* Header Button */}
          <div className="mb-6 sm:mb-8 flex justify-start">
            <div
              className="rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 w-full sm:w-auto text-center sm:text-left"
              style={{
                backgroundColor: "#17a2b8",
                border: "3px solid #0d7a8a",
              }}
            >
              <h3
                className="text-white italic font-medium text-lg sm:text-xl lg:text-2xl"
                style={{ fontFamily: "'Poltawski Nowy', serif" }}
              >
                Pharmacovigilance Consulting
              </h3>
            </div>
          </div>

          {/* Professional Image */}
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{
              backgroundColor: "#2d2d2d",
              height: "250px",
              maxHeight: "300px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/image 196.png"
                alt="Pharmacovigilance Consulting"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex items-center">
          <div className="max-w-2xl w-full">
            <p
              className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed sm:leading-snug lg:leading-normal"
              style={{
                fontFamily: "'Poltawski Nowy', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#000000",
                textAlign: "justify",
              }}
            >
              At Clinxcon, we provide comprehensive global Pharmacovigilance
              Consulting services designed to ensure regulatory compliance,
              enhance productivity, and achieve strategic Drug Safety outcomes.
            </p>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed sm:leading-snug lg:leading-normal"
              style={{
                fontFamily: "'Poltawski Nowy', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#000000",
                textAlign: "justify",
              }}
            >
              With extensive expertise across the Pharmacovigilance domain,
              Clinxcon empowers clients to address Product Safety concerns
              confidently and proactively. Whether it involves establishing
              robust systems, supporting audit readiness, leveraging technology
              and AI, or deploying specialized staff, we deliver unparalleled,
              tailored solutions to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;