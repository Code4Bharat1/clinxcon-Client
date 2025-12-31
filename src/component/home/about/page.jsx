// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function AboutUsHome() {
//   return (
//     <section
//       className="relative w-full py-16 px-6 sm:px-10 md:px-20"
//       style={{
//         background:
//           "linear-gradient(90deg, #FFFFFF 0%, #038BB0 70.19%, #6EB563 100%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//         {/* Left Side - Image */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <div className="relative  rounded-2xl overflow-hidden shadow-lg w-[90%] sm:w-[80%] md:w-[90%] lg:w-full">
//             <Image
//               src="/homeAb.svg"
//               alt="Medical Science Doctor"
//               width={600}
//               height={400}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Side - Content */}
//         <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-5">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold italic text-black">
//             About <span className="font-serif italic">Us</span>
//           </h2>

//           <p className="text-sm sm:text-base md:text-lg leading-relaxed italic text-black">
//             At <span className="font-bold">Clinxcon</span>, we are a dedicated team of
//             industry and training experts with over{" "}
//             <span className="font-semibold">20 years of experience</span> in the
//             clinical research domain. Our mission is to build a highly skilled
//             workforce that can meet the growing demands of the life sciences and
//             healthcare industries. We have successfully trained more than{" "}
//             <span className="font-semibold">3,000 students</span>, equipping them
//             with practical, industry-relevant knowledge and skills.
//           </p>

//           <Link href="/about">
//             <button className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all shadow-md">
//               Explore More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
