"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <footer
      className="bg-gradient-to-r from-[#58C73F] to-[#237C92] text-white pt-10 sm:pt-12 md:pt-16 pb-0 mt-8 sm:mt-10 md:mt-12 relative overflow-hidden"
    >
      {/* --- Main Footer Content --- */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-15 lg:ml-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-2 relative z-10 pb-12 sm:pb-16 md:pb-20 text-base sm:text-lg">

        {/* Address & Contact */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
            <Link href="/">
              <Image
                src="/logo4.png"
                alt="Clinxcon Logo"
                width={200}
                height={20}
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[135px] md:h-[135px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <div className="leading-relaxed space-y-1 font-medium text-white/90 text-sm sm:text-base md:text-lg">
            <p>M. N Road, Sonapur lane</p>
            <p>Near Manisha Plaza</p>
            <p>Kurla (W), Mumbai - 400070</p>
          </div>

          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg font-semibold">
            <a
              href="tel:8369919288"
              className="flex justify-center sm:justify-start items-center gap-2 hover:text-black transition"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" /> 
              <span className="text-xs sm:text-sm md:text-base">8369919288 / 9167242009</span>
            </a>

            <a
              href="mailto:info@clinexcel.in"
              className="flex justify-center sm:justify-start items-center gap-2 hover:text-black transition"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" /> 
              <span className="text-xs sm:text-sm md:text-base">info@Clinxcon.in</span>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center sm:text-left sm:ml-0 lg:ml-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Useful Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-black transition">
                • Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition">
                • About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-black transition">
                • Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Services</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg font-semibold">
            <li>
              <Link href="/consulting" className="hover:text-black transition">
                • Pharmacovigilance Consulting
              </Link>
            </li>
            <li>
              <Link href="/corporate" className="hover:text-black transition">
                • Corporate Training
              </Link>
            </li>
            <li>
              <Link href="/soft-skills" className="hover:text-black transition">
                • Soft Skills Training
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left sm:ml-0 lg:ml-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Newsletter</h3>
          <div className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            <p>
              Subscribe to our newsletter and get the latest updates on our
              services, training programs, and industry insights.
            </p>
          </div>
        </div>
      </div>

      {/* --- Copyright Section --- */}
      <div className="bg-black text-white py-3 sm:py-4 md:py-2 text-xs sm:text-sm md:text-base font-semibold">
        <div className="max-w-9xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-5 gap-3 sm:gap-4">

          {/* Centered Footer Text */}
          <div className="flex-1 flex justify-center order-2 sm:order-1">
            <p className="text-center text-xs sm:text-sm md:text-base leading-relaxed">
              © Copyright{" "}
              <Link
                href="/"
                className="font-semibold text-[#22D3EE] hover:text-[#1BB3C9]"
              >
                Clinxcon
              </Link>{" "}
              All Rights Reserved | Designed by{" "}
              <span className="font-bold">Code4Bharat</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 order-1 sm:order-2">
            {[
              { href: "https://www.instagram.com/Clinxcon/", icon: "/instagram.svg" },
              { href: "mailto:info@clinexcel.in", icon: "/mail.svg" },
              { href: "https://www.facebook.com/Clinxcon", icon: "/facebook.svg" },
              { href: "https://www.linkedin.com/company/Clinxcon-academy-of-clinical-research/", icon: "/linkedin.svg" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Image 
                  src={item.icon} 
                  alt="Social Icon" 
                  width={18} 
                  height={18}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;