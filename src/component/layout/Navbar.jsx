"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const servicesBtnRef = useRef(null);
  const aboutBtnRef = useRef(null);
  const academicsBtnRef = useRef(null);

  const navRef = useRef(null);

  const servicesDropRef = useRef(null);
  const aboutDropRef = useRef(null);
  const academicsDropRef = useRef(null);

  const [servicesPos, setServicesPos] = useState({ left: 0, top: 0, width: 260 });
  const [aboutPos, setAboutPos] = useState({ left: 0, top: 0, width: 200 });
  const [academicsPos, setAcademicsPos] = useState({ left: 0, top: 0, width: 260 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const computePosition = (btnEl, width = 260) => {
    if (!btnEl || !navRef.current) return { left: 0, top: 0 };

    const btnRect = btnEl.getBoundingClientRect();

    // Center horizontally under the button
    const left = Math.round(btnRect.left + btnRect.width / 2 - width / 2);

    // Position dropdown just below the button
    const top = Math.round(btnRect.bottom + 8);

    return { left, top };
  };

  const toggleServices = () => {
    if (!servicesOpen) {
      setTimeout(() => {
        const pos = computePosition(servicesBtnRef.current, 260);
        setServicesPos({ ...pos, width: 260 });
        setServicesOpen(true);
      }, 0);
      setAboutOpen(false);
      setAcademicsOpen(false);
    } else {
      setServicesOpen(false);
    }
  };

  const toggleAbout = () => {
    if (!aboutOpen) {
      setTimeout(() => {
        const pos = computePosition(aboutBtnRef.current, 200);
        setAboutPos({ ...pos, width: 200 });
        setAboutOpen(true);
      }, 0);
      setServicesOpen(false);
      setAcademicsOpen(false);
    } else {
      setAboutOpen(false);
    }
  };

  const toggleAcademics = () => {
    if (!academicsOpen) {
      setTimeout(() => {
        const pos = computePosition(academicsBtnRef.current, 260);
        setAcademicsPos({ ...pos, width: 260 });
        setAcademicsOpen(true);
      }, 0);
      setServicesOpen(false);
      setAboutOpen(false);
    } else {
      setAcademicsOpen(false);
    }
  };

  useEffect(() => {
    const handleDocClick = (e) => {
      if (!navRef.current) return;
      
      // Check if click is outside nav and outside all dropdowns
      const clickedOutsideNav = !navRef.current.contains(e.target);
      const clickedOutsideServices = servicesDropRef.current && !servicesDropRef.current.contains(e.target);
      const clickedOutsideAbout = aboutDropRef.current && !aboutDropRef.current.contains(e.target);
      const clickedOutsideAcademics = academicsDropRef.current && !academicsDropRef.current.contains(e.target);
      
      if (clickedOutsideNav && clickedOutsideServices && clickedOutsideAbout && clickedOutsideAcademics) {
        setServicesOpen(false);
        setAboutOpen(false);
        setAcademicsOpen(false);
      }
    };

    const handleResize = () => {
      setServicesOpen(false);
      setAboutOpen(false);
      setAcademicsOpen(false);
    };

    document.addEventListener("click", handleDocClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleDocClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [servicesOpen, aboutOpen, academicsOpen]);

  return (
    <>
      <nav ref={navRef} className="w-full relative shadow-md" style={{ zIndex: 1000 }}>
        <div id="dropdown-root" className="absolute left-0 top-0 w-full h-full pointer-events-none" />

        <div className="w-full shadow-md flex gap-2 sm:gap-4 relative">

          {/* LOGO */}
           <div className="py-1 pl-1 sm:pl-2 ml-1 sm:ml-2 md:ml-3 lg:ml-4 flex-shrink-0">
            <img
              src="/logo3.png"
              alt="Clinxcon Logo"
              className="w-[80px] h-[48px] sm:w-[95px] sm:h-[55px] md:w-[105px] md:h-[60px] lg:w-[120px] lg:h-[68px] xl:w-[140px] xl:h-[80px] object-contain"
            />
           </div>

          {/* GRADIENT NAVBAR */}
          <div
            className="flex-1 py-1 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 relative flex items-center justify-end md:justify-center"
            style={{
              background: "linear-gradient(to right, #72CB64, #058DAF)",
              clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0% 100%, 0 95%)",
            }}
          >
            <div className="flex items-center justify-end md:justify-center">
              <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-10 text-white font-semibold text-sm lg:text-base xl:text-lg mx-auto relative whitespace-nowrap">

                <li>
                  <a href="/" className="hover:text-gray-200 cursor-pointer">
                    Home
                  </a>
                </li>

                {/* ABOUT US */}
                <li className="relative">
                  <button
                    ref={aboutBtnRef}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAbout();
                    }}
                    className="flex items-center gap-1 hover:text-gray-200"
                  >
                    About Us
                    <ChevronDown
                      size={18}
                      className={`${aboutOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                    />
                  </button>
                </li>

                <li>
                  <a href="/event" className="hover:text-gray-200 cursor-pointer">
                    Events
                  </a>
                </li>

                <li>
                  <a href="/consulting" className="hover:text-gray-200 cursor-pointer">
                    Pharmacovigilance
                  </a>
                </li>

                {/* SERVICES */}
                <li className="relative">
                  <button
                    ref={servicesBtnRef}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleServices();
                    }}
                    className="flex items-center gap-1 hover:text-gray-200"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`${servicesOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                    />
                  </button>
                </li>

                {/* ACADEMICS */}
                <li className="relative">
                  <button
                    ref={academicsBtnRef}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAcademics();
                    }}
                    className="flex items-center gap-1 hover:text-gray-200"
                  >
                    Academics
                    <ChevronDown
                      size={18}
                      className={`${academicsOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                    />
                  </button>
                </li>

                <li>
                  <a href="/blog" className="hover:text-gray-200 cursor-pointer">
                    Blogs
                  </a>
                </li>

                <li>
                  <a href="/careers" className="hover:text-gray-200 cursor-pointer">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="/contact" className="hover:text-gray-200 cursor-pointer">
                    Contact
                  </a>
                </li>

              </ul>

              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg text-center py-4 sm:py-6 space-y-3 font-semibold text-sm mx-3 text-black z-[20000]">

            <a href="/" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Home
            </a>

            <details>
              <summary className="flex justify-center items-center gap-1 py-1 hover:text-[#058DAF] cursor-pointer">
                About Us <ChevronDown size={16} />
              </summary>
              <div className="mt-2 space-y-2">
                <a href="/about" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  About Us
                </a>
                <a href="/founder" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Our Founder
          </a>
                <a href="/team" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Our Team
                </a>
                
              </div>
            </details>

            <a href="/event" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Events
            </a>

            <a href="/consulting" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Consulting
            </a>

            <details>
              <summary className="flex justify-center items-center gap-1 py-1 hover:text-[#058DAF] cursor-pointer">
                Services <ChevronDown size={16} />
              </summary>
              <div className="mt-2 space-y-2">
                <a href="/consulting" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Pharmacovigilance Consulting
                </a>
                <a href="/corporate" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Corporate Training
                </a>
                <a href="/soft-skills" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Soft Skills Training
                </a>
              </div>
            </details>

            <details>
              <summary className="flex justify-center items-center gap-1 py-1 hover:text-[#058DAF] cursor-pointer">
                Academics <ChevronDown size={16} />
              </summary>
              <div className="mt-2 space-y-2">
                <a href="/academics" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Domain Courses
                </a>
                <a href="" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Communication
                </a>
                <a href="" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Internship Programs
                </a>
                <a href="" onClick={() => setMenuOpen(false)} className="block py-2 hover:bg-gray-100 cursor-pointer">
                  Placement Assistance
                </a>
              </div>
            </details>

            <a href="/blog" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Blogs
            </a>

            <a href="/careers" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Careers
            </a>

            <a href="/contact" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-[#058DAF] cursor-pointer">
              Contact
            </a>

          </div>
        )}
      </nav>

      {/* PORTALED DROPDOWNS */}
      {mounted && aboutOpen && createPortal(
        <div
          ref={aboutDropRef}
          style={{
            position: "fixed",
            pointerEvents: "auto",
            left: aboutPos.left,
            top: aboutPos.top,
            width: aboutPos.width,
            zIndex: 999999,
          }}
          className="bg-white rounded-lg shadow-xl py-3"
          onClick={(e) => e.stopPropagation()}
        >
          <a href="/about" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            About Us
          </a>
          <a href="/founder" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Our Founder
          </a>
          <a href="/team" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Our Team
          </a>
          
        </div>,
        document.body
      )}

      {mounted && servicesOpen && createPortal(
        <div
          ref={servicesDropRef}
          style={{
            position: "fixed",
            left: servicesPos.left,
            top: servicesPos.top,
            width: servicesPos.width,
            zIndex: 999999,
          }}
          className="bg-white rounded-lg shadow-xl py-3"
          onClick={(e) => e.stopPropagation()}
        >
           <a href="/consulting" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Pharmacovigilance Consulting
          </a>
          <a href="/corporate" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Corporate Training
          </a>
          <a href="/soft-skills" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Soft Skills Training
          </a>
        </div>,
        document.body
      )}

      {mounted && academicsOpen && createPortal(
        <div
          ref={academicsDropRef}
          style={{
            position: "fixed",
            left: academicsPos.left,
            top: academicsPos.top,
            width: academicsPos.width,
            zIndex: 999999,
          }}
          className="bg-white rounded-lg shadow-xl py-3"
          onClick={(e) => e.stopPropagation()}
        >
          <a href="/academics" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Domain Courses
          </a>
          <a href="" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Communication
          </a>
          <a href="" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Internship Programs
          </a>
          <a href="" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Placement Assistance
          </a>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;