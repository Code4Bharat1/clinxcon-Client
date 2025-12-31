"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative top bar */}
      
      
      {/* Header */}
      <div className="px-8 py-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Contact Us
        </h2>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto px-8 py-8 relative">
        <div className="flex flex-col lg:flex-row gap-0 items-center justify-center">
          
          {/* Contact Details Card - Left Side with overlap */}
          <div 
            className="w-full lg:w-[320px] bg-white rounded-3xl p-6 shadow-xl relative z-20 lg:-mr-12"
            style={{
              boxShadow: '0 20px 50px rgba(125, 211, 219, 0.4)',
              border: '4px solid #7DD3DB'
            }}
          >
            <h2 className="text-xl font-bold text-teal-600 mb-5 border-b-3 border-teal-600 pb-2 inline-block">
              Contact details
            </h2>

            <div className="bg-white rounded-xl p-5 mt-4 space-y-5 shadow-sm">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1">Address</h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    M.N Road, Sonapur lane Near<br />
                    Manisha Plaza Kurla(W),<br />
                    Mumbai - 400070
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1">Call Us</h3>
                  <p className="text-gray-700 text-xs">8369919200 / 7021235702</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1">Email Us</h3>
                  <p className="text-gray-700 text-xs">almassayed.edu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div 
            className="flex-1 max-w-lg bg-white rounded-3xl p-8 shadow-xl relative z-10 lg:pl-16"
            style={{
              boxShadow: '0 20px 50px rgba(134, 239, 172, 0.4)',
              border: '4px solid #86EFAC'
            }}
          >
            <h2 className="text-2xl font-bold text-black mb-6">
              Send Message
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-black font-semibold mb-1.5 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-black font-semibold mb-1.5 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* E-Mail ID */}
              <div>
                <label className="block text-black font-semibold mb-1.5 text-sm">
                  E-Mail Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your E-Mail Id"
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-black font-semibold mb-1.5 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-teal-500 resize-none text-gray-700 text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-teal-500 text-white px-10 py-2 rounded-md font-semibold text-sm hover:bg-teal-600 transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="text-center py-10 px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed">
          Thank you for your interest — we're happy<br />
          to connect and collaborate.
        </h2>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-8 pb-8">
        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0181899621634!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;