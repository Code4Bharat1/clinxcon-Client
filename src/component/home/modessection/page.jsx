"use client";
import React, { useEffect } from "react";

export default function ModesSection() {
  const modes = [
    {
      id: 1,
      title: "ONLINE",
      description:
        "Access our expert-led courses from anywhere, with interactive sessions, recorded lectures, and virtual assignments.",
    },
    {
      id: 2,
      title: "OFFLINE",
      description:
        "Engage in face-to-face learning with hands-on experience in a dedicated classroom setting.",
    },
    {
      id: 3,
      title: "HYBRID",
      description:
        "A perfect blend of online convenience and offline interaction for flexible learning.",
    },
  ];

  // ✅ Mobile flip functionality
  useEffect(() => {
    const cards = document.querySelectorAll(".flip-card");

    const toggleFlip = function () {
      this.classList.toggle("flip-mobile");
    };

    cards.forEach((card) => {
      card.addEventListener("click", toggleFlip);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", toggleFlip);
      });
    };
  }, []);

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className="text-6xl font-bold text-gray-900 inline-block pb-3 border-b-4 border-gray-900"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          Modes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="group w-full h-[28rem] flip-card"
              style={{ perspective: "1400px" }}
            >
              <div className="relative w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180 flip-wrapper">

                {/* FRONT */}
                <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
                  <div className="w-80 h-72 bg-[#52C048] clip-hex flex items-center justify-center border-4 border-teal-500 shadow-2xl">
                    <h3
                      className="text-4xl font-bold tracking-wider"
                      style={{ fontFamily: "Poltawski Nowy" }}
                    >
                      {mode.title}
                    </h3>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden flex items-center justify-center">
                  <div className="w-80 h-72 bg-[#298589] clip-hex flex items-center justify-center px-8 text-center border-4 border-teal-600 shadow-2xl">
                    <p
                      className="text-xl font-medium leading-relaxed"
                      style={{ fontFamily: "Poltawski Nowy" }}
                    >
                      {mode.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon Clip Path */}
      <style>{`
  .clip-hex {
    clip-path: polygon(
      25% 6.7%,
      75% 6.7%,
      100% 50%,
      75% 93.3%,
      25% 93.3%,
      0% 50%
    );
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }

  /* MOBILE TAP FLIP */
  .flip-mobile .flip-wrapper {
    transform: rotateY(180deg);
  }
`}</style>
    </div>
  );
}
