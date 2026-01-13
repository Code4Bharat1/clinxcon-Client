"use client";
import Link from "next/link";
import { blogs } from "@/blogdata/blog";

const BlogsPage = () => {
  return (
    <div className="w-full min-h-screen p-3 sm:p-5 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Shapes */}
      <img
        src="s1.png"
        className="absolute top-0 right-0 w-[180px] sm:w-[280px] md:w-[350px] opacity-80 pointer-events-none"
        alt=""
      />
      <img
        src="s2.png"
        className="absolute bottom-0 left-0 w-[140px] sm:w-[220px] md:w-[280px] opacity-80 pointer-events-none"
        alt=""
      />
      <img
        src="s3.png"
        className="absolute bottom-0 left-6 w-[60px] sm:w-[100px] md:w-[120px] opacity-70 pointer-events-none"
        alt=""
      />

      <div className="relative z-10 px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 sm:mb-8">
          Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="group block h-full"
            >
              <div
                className={`
                  relative
                  h-full
                  bg-gradient-to-br ${blog.color}
                  rounded-2xl sm:rounded-3xl
                  p-4 sm:p-7 md:p-8
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  transition-all
                  duration-500
                  ease-out
                  will-change-transform
                  active:scale-[0.98]
                  active:shadow-[0_4px_15px_rgb(0,0,0,0.15)]
                  sm:group-hover:scale-[1.05]
                  sm:group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)]
                  sm:group-hover:-translate-y-2
                  flex
                  flex-col
                  border-2 border-white/40
                  backdrop-blur-sm
                  overflow-hidden
                `}
              >
                {/* Animated gradient overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 animate-[shine_2s_ease-in-out_infinite]" />
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-white/20 rounded-bl-[100px] -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 transition-transform duration-500 group-active:scale-125 sm:group-hover:scale-150" />

                {/* Logo with subtle animation */}
                <div className="relative z-10 mb-3 sm:mb-5">
                  <img
                    src="logo.png"
                    alt="Clinxcon Logo"
                    className="w-10 sm:w-16 md:w-18 opacity-90 transition-transform duration-500 group-active:scale-105 sm:group-hover:scale-110 sm:group-hover:rotate-3"
                  />
                </div>

                {/* Title */}
                <h2 className="relative z-10 text-base sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-4 leading-snug transition-colors duration-300 group-active:text-gray-900 sm:group-hover:text-gray-900">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="relative z-10 text-black/80 text-sm sm:text-lg leading-relaxed flex-grow mb-3 sm:mb-4">
                  {blog.desc}
                </p>

                {/* Read More with animated arrow */}
                <div className="relative z-10 mt-auto flex items-center gap-2 font-semibold text-xs sm:text-base text-black/90">
                  <span className="border-b-2 border-black/80 transition-all duration-300 group-active:border-black sm:group-hover:border-black">
                    Read More
                  </span>
                  <span className="inline-block transition-transform duration-300 group-active:translate-x-1 sm:group-hover:translate-x-2">
                    →
                  </span>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogsPage;