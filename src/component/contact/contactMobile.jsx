"use client";
import React, { useState } from "react";

const ContactMobile = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="block md:hidden bg-gradient-to-b from-blue-100 to-green-100">
      {/* Header */}
      <div className=" py-8">
       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ml-2 sm:ml-3 md:ml-5 mb-4 sm:mb-5 md:mb-6 relative inline-block">
          Contact Us
        </h2>
      </div>

      {/* Description */}
      {/* <div className="relative text-white text-center mx-4 my-8">
        <img
          src="/Rectangle 7358.png"
          alt="Description Background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="relative z-10 p-6">
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "Poltawski Nowy",
              fontWeight: 500,
            }}
          >
            At Clinxcon, we are a dedicated team of industry and training experts
            with over 20 years of experience in the clinical research domain. Our
            mission is to build a highly skilled workforce that can meet the
            growing demands of the life sciences and healthcare industries.
          </p>
        </div>
      </div> */}

      {/* Contact Info */}
      <div className="mx-4 bg-[#5FC4CC] p-6 rounded-2xl shadow-lg border-4 border-white mb-10">
        <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black pb-1 inline-block">
          Contact Details
        </h2>
        <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            M. N Road, Sonapur lane
            <br />
            Near Manisha Plaza
            <br />
            Kurla (W), Mumbai - 400070
          </p>
          <div className="mt-4">
            <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
            <p className="text-gray-700 text-sm">8369919288 / 7021235702</p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
            <p className="text-gray-700 text-sm">almassaved.edu@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-4 mb-10 bg-white/70 p-6 rounded-2xl shadow-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "phone", "email"].map((field, i) => (
            <div key={i}>
              <label className="block text-black font-semibold mb-2 capitalize">
                {field === "email" ? "E-Mail Id" : field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 text-gray-700"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-black font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:border-cyan-500 resize-none text-gray-700"
              required
            ></textarea>
          </div>

          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Map */}
      <div className="mx-4 pb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border-2 border-gray-300"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMobile;
