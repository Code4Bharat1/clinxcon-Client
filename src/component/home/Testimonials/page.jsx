"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rutuja Dattatray Chougale",
      title: "M. Pharm, Bharati's Vidyapeeth College of Pharmacy",
      image: "/testimonial.png",
      text: "Alma Madam's insightful teaching refined my theoretical skills in clinical research and boosted my confidence to be job-ready through her inspiring guidance and practical teaching.",
      rating: 5,
      color: "blue",
      align: "left"
    },
    {
      id: 2,
      name: "U Nivetha",
      title: "Pharm. D, Sri Ramachandra Institute of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's practical and effective teaching made complex medical terms easy to understand. Her training gave me confidence to apply for jobs with ease.",
      rating: 5,
      color: "green",
      align: "right"
    },
    {
      id: 3,
      name: "Nagnikar Shruti Subhash",
      title: "M. Pharm, Satara College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's simplified teaching approach made complex ICSR and PV concepts easy to understand and follow. It helped me gain clarity and confidence.",
      rating: 5,
      color: "blue",
      align: "left"
    },
    {
      id: 4,
      name: "Naziya Khan",
      title: "B. Pharm, St. John's College of Pharmacy",
      image: "/testimonial.png",
      text: "Almaa Ma'am's practical teaching and real-time explanation of case processing helped me understand every aspect clearly. Best place to learn PV!",
      rating: 5,
      color: "green",
      align: "right"
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Banner */}
        <div className="w-full mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div className="relative flex items-center overflow-hidden">
            {/* Full Width Green Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#76CD61] via-[#5BC179] to-[#3EAD89] shadow-lg h-[75px] sm:h-[60px] lg:h-[80px]"></div>

            
            {/* Content Container */}
            <div className="relative w-full flex flex-row items-center px-0 sm:px-8 md:px-16 lg:px-32 xl:px-60">

              {/* Testimonials Text */}
              <div className="px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white z-10 whitespace-nowrap">
                Testimonials
              </div>
              
              {/* White Arrow Shape */}
              <div className="relative ml-0 sm:ml-4 lg:ml-8 mt-2 sm:mt-0 w-full sm:w-auto">
                {/* Arrow pointing right - Hidden on mobile */}
                <div className="relative bg-white shadow-lg px-2 sm:px-8 md:px-12 lg:px-20 
py-2 sm:py-4 lg:py-5 flex items-center 
w-auto max-w-full
min-w-[180px] sm:min-w-[280px] lg:min-w-[350px]">

                  {/* Left arrow point - Hidden on mobile */}
                  <div className="absolute -left-3 sm:-left-5 md:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 w-0 h-0 
border-t-[16px] sm:border-t-[25px] md:border-t-[30px] lg:border-t-[35px] border-t-transparent
border-r-[12px] sm:border-r-[20px] md:border-r-[25px] lg:border-r-[30px] border-r-white
border-b-[16px] sm:border-b-[25px] md:border-b-[30px] lg:border-b-[35px] border-b-transparent"/>

                  
                  <span className="text-[11px] xs:text-sm sm:text-base md:text-lg lg:text-xl 
font-semibold text-gray-800 
text-center sm:text-left 
w-full whitespace-normal leading-tight">

                    Hear from those who trusted us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zigzag Testimonial Cards */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 xl:space-y-20">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex ${
                item.align === "right" 
                  ? "justify-start lg:justify-end" 
                  : "justify-start"
              }`}
            >
              <div
                className={`group relative w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-300 p-5 sm:p-6 md:p-8 lg:p-10 border-[3px] sm:border-[4px] ${
                  item.color === "blue" ? "border-[#5BC8DB]" : "border-[#7DD67C]"
                } hover:scale-[1.02]`}
              >
                {/* Speech Bubble Tail - More prominent */}
                <div
                  className={`absolute ${
                    item.align === "right"
                      ? "right-8 sm:right-12 md:right-16 lg:right-20"
                      : "left-8 sm:left-12 md:left-16 lg:left-20"
                  } -bottom-8 sm:-bottom-9 lg:-bottom-10 w-0 h-0 border-t-[32px] sm:border-t-[36px] lg:border-t-[40px] ${
                    item.color === "blue" 
                      ? "border-t-[#5BC8DB]" 
                      : "border-t-[#7DD67C]"
                  } ${
                    item.align === "right"
                      ? "border-r-[32px] sm:border-r-[36px] lg:border-r-[40px] border-r-transparent"
                      : "border-l-[32px] sm:border-l-[36px] lg:border-l-[40px] border-l-transparent"
                  } drop-shadow-md`}
                ></div>

                {/* Content */}
                <div className={`flex flex-col ${
                  item.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-start gap-4 sm:gap-5 lg:gap-6 xl:gap-8`}>
                  {/* Image */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-xl border-[4px] sm:border-[5px] border-gray-100 object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 ${
                    item.align === "right" ? "lg:text-right" : "lg:text-left"
                  } text-center lg:text-left`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base md:text-[15px] text-gray-700 leading-relaxed mb-3 sm:mb-4 italic">
                      {item.text}
                    </p>

                    {/* Stars */}
                    <div className={`flex gap-1 ${
                      item.align === "right" ? "lg:justify-end justify-center" : "justify-center lg:justify-start"
                    }`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current drop-shadow-sm"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}