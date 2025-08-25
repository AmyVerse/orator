"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf3d0] flex items-center justify-center px-4">
      <div className="max-w-4xl mt-24 mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#4e230f] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4e230f] mb-6">
            Page Not Found
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 border-l-4 border-orange-500">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            "The eloquent speaker knows that even silence has its place in
            discourse. Sometimes, what is not said speaks louder than words
            themselves."
          </blockquote>
          <cite className="text-orange-600 font-semibold text-lg">
            — The Art of Oratory
          </cite>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 md:p-8 mb-8">
          <p className="text-gray-600">
            The page may have been moved, deleted, or perhaps it never existed
            at all— much like the perfect argument that comes to mind after the
            debate has ended.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#4e230f] hover:bg-[#3a1a0b] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Home size={20} />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border-2 border-[#4e230f] text-[#4e230f] hover:bg-[#4e230f] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
