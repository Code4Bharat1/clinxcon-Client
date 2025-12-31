"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

 function WhyClinxcon() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  {/* Right Section — Center Scale Animation */}
<div ref={imageRef} className="flex-1 flex justify-center items-center w-full">
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.4 }}
    className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[300px]"
  >
    <Image
      src="/image 200.png"
      alt="Clinxcon Graphic"
      width={300}
      height={330}
      className="object-contain drop-shadow-xl w-full h-auto scale-x-[-1]"
    />
  </motion.div>
</div>

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 lg:p-14 
                 flex flex-col md:flex-row items-center md:items-start 
                 gap-6 sm:gap-8 shadow-lg"
    >
      {/* Left Section */}
      <div className="flex-1 ml-0 md:ml-8 lg:ml-15 space-y-4 sm:space-y-5 lg:space-y-6">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          <span className="font-semibold text-green-700">ClinXcon</span> comprises a dynamic team backed by hands-on experience in pharmacovigilance training and a wide range of PV services and operational activities. 
          <br /><br />
          We deliver end-to-end Pharmacovigilance consulting services supported by state-of-the-art processes, ensuring our clients remain risk-free and <span className="font-semibold text-green-700">Anytime Inspection Ready (AIR)</span>.
          <br /><br />
          <span className="font-semibold text-green-700">
          Based in Mumbai, India,</span> we enable seamless communication, faster turnaround times, and customized client-centric solutions.
        </p>

        <button
          className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 
                     text-base sm:text-lg md:text-xl font-semibold text-[#006467] 
                     bg-[#89D284]
                     rounded-lg sm:rounded-xl shadow-md hover:shadow-lg 
                     hover:bg-green-600
                     cursor-pointer
                     transition-all duration-300
                     w-full sm:w-auto
                     mt-2 sm:mt-4"
          onClick={() => router.push("/about")}
        >
          Know more
        </button>
      </div>

      {/* Right Section — Simple Scroll Animation */}
      <div ref={imageRef} className="flex-1 flex justify-center items-center w-full">
        <motion.div
          
          className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[300px]"
        >
          <Image
            src="/image 200.png"
            alt="Clinxcon Graphic"
            width={300}
            height={330}
            className="object-contain drop-shadow-xl w-full h-auto scale-x-[-1]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WhyClinxcon;