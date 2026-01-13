import { blogs } from "@/blogdata/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 font-semibold hover:text-black transition-all duration-300"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-6">
        <div className="relative bg-[#b6efed] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg overflow-hidden">
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/15 rounded-bl-full -mr-12 -mt-12" />
          
         <div className="relative z-10 flex items-center gap-4 sm:gap-6">

            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Clinxcon"
                className="w-12 sm:w-14 md:w-16 h-auto"
              />
            </div>

            {/* Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>
{/* Mobile Image (below title) */}
{blog.image && (
  <div className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 mt-6">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full rounded-xl shadow-md object-cover"
    />
  </div>
)}

      {/* Content Section */}
      {/* Content Section */}
<article className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">

  {/* Heading
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
    {blog.title}
  </h1> */}
  {/* Image + Initial Text */}
<div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-start">

  {/* Text beside image */}
  <div>
    {blog.content
      .trim()
      .split("\n\n")
      .slice(0, 2)
      .map((para, index) => (
        <p
          key={index}
          className="mb-4 sm:mb-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
        >
          {para}
        </p>
      ))}
  </div>

  {/* Image (RIGHT side, slightly larger) */}
  {blog.image && (
  <div className="hidden md:flex justify-end">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full max-w-[600px] rounded-xl shadow-md object-cover"
    />
  </div>
)}

</div>


  {/* Remaining content – FULL WIDTH */}
  <div className="mt-6 sm:mt-8">
    {blog.content
      .trim()
      .split("\n\n")
      .slice(2)
      .map((para, index) => (
        <p
          key={index}
          className="mb-4 sm:mb-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
        >
          {para}
        </p>
      ))}
  </div>

</article>

    </div>
  );
}