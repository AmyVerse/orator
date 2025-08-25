"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { ArrowRight, Calendar, Mic, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showCurtain, setShowCurtain] = useState(true);
  const [animateCurtain, setAnimateCurtain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCurtain(true);
      setTimeout(() => setShowCurtain(false), 700);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showCurtain && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#fcf3cc] text-white transition-transform ease-initial duration-700 ${
            animateCurtain ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Image
            className="hidden p-6 sm:block"
            fill
            priority
            alt="orator"
            src={"/orator.svg"}
          />
          <Image
            className="max-sm:block p-6 sm:hidden"
            fill
            priority
            alt="orator"
            src={"/oratorsm.svg"}
          />
        </div>
      )}

      <main>
        <section className="min-h-screen bg-black flex items-center relative overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.gif"
              alt="Background animation"
              fill
              className="object-cover opacity-60 object-[70%_center] md:object-center"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/50 z-1"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl text-left">
              <h1 className="font-bold text-white leading-tight">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                  Welcome to
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="bg-[#fcf3cc] font-[jost] text-orange-500 px-3 lg:px-4 py-1 lg:py-2 rounded-lg inline-block">
                    ORATOR
                  </span>
                </div>
              </h1>
              <p className="text-lg font-[jost] sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl leading-relaxed mt-8">
                Where words meet wisdom and voices find their power through{" "}
                <span>
                  <ContainerTextFlip
                    words={["Elocution", "Oration", "Diction"]}
                  />
                </span>
                <br className="hidden sm:block"></br>
                {` `}
                Join IIIT Nagpur's premier debate and public speaking club.
              </p>
              <div className="flex flex-row gap-3 justify-start">
                <Link
                  href="/join"
                  className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Join Club <ArrowRight size={16} />
                </Link>
                <Link
                  href="/events"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 backdrop-blur-sm"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#faf3d0]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e230f] mb-4 lg:mb-6">
                Why Choose Orator?
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover the benefits of joining our vibrant community of
                speakers and debaters
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              <div className="text-center p-6 lg:p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <Mic className="text-white" size={28} />
                </div>
                <h3 className="text-base lg:text-xl font-semibold text-[#4e230f] mb-3 lg:mb-4">
                  Public Speaking
                </h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Master the art of eloquent speech and confident presentation
                </p>
              </div>

              <div className="text-center p-6 lg:p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <Trophy className="text-white" size={28} />
                </div>
                <h3 className="text-base lg:text-xl font-semibold text-[#4e230f] mb-3 lg:mb-4">
                  Competitive Debates
                </h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Participate in inter-college tournaments and competitions
                </p>
              </div>

              <div className="text-center p-6 lg:p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-base lg:text-xl font-semibold text-[#4e230f] mb-3 lg:mb-4">
                  Community
                </h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Join a vibrant community of passionate speakers and thinkers
                </p>
              </div>

              <div className="text-center p-6 lg:p-8 rounded-xl bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-base lg:text-xl font-semibold text-[#4e230f] mb-3 lg:mb-4">
                  Regular Events
                </h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  Weekly workshops, monthly competitions, and special events
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e230f] mb-4 lg:mb-6">
                Upcoming Events
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Don't miss our exciting upcoming activities and competitions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-12 lg:mb-16 max-w-7xl mx-auto">
              <div className="w-full max-w-sm bg-[#faf3d0] border border-orange-200 rounded-xl p-6 lg:p-8 hover:border-orange-300 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="text-orange-600 text-sm font-semibold mb-3 lg:mb-4 tracking-wide">
                  TBD, 2025
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#4e230f] mb-3 lg:mb-4 leading-tight">
                  Infacto 4.0
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                  An Oxford-style debate that brings together voices from across
                  the college, sparking powerful arguments, critical insights,
                  and a clash of perspectives.
                </p>
                <Link
                  href="/events/infacto4o"
                  className="text-[#4e230f] font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="w-full max-w-sm bg-[#faf3d0] border border-orange-200 rounded-xl p-6 lg:p-8 hover:border-orange-300 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="text-orange-600 text-sm font-semibold mb-3 lg:mb-4 tracking-wide">
                  October 10-11, 2025
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#4e230f] mb-3 lg:mb-4 leading-tight">
                  Orator in Tantra-Fiesta
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                  (declared soon)
                </p>
                <Link
                  href="/events"
                  className="text-[#4e230f] font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* <div className="bg-[#faf3d0] border border-orange-200 rounded-xl p-6 lg:p-8 hover:border-orange-300 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl md:col-span-2 lg:col-span-1">
                <div className="text-orange-600 text-sm font-semibold mb-3 lg:mb-4 tracking-wide">
                  MARCH 1, 2025
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#4e230f] mb-3 lg:mb-4 leading-tight">
                  Public Speaking Masterclass
                </h3>
                <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                  Master the art of captivating public speaking with
                  professional trainers and personalized feedback.
                </p>
                <Link
                  href="/events"
                  className="text-[#4e230f] font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div> */}
            </div>

            <div className="text-center">
              <Link
                href="/events"
                className="bg-[#4e230f] hover:bg-[#3a1a0b] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-semibold text-lg lg:text-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View All Events <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e230f] mb-4 lg:mb-6">
                Gallery
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Capturing moments of eloquence, passion, and growth through our
                journey
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-4 mb-12 lg:mb-16 max-w-6xl mx-auto">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🎤</div>
                    <p className="text-xs font-medium">Debates</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🏆</div>
                    <p className="text-xs font-medium">Competitions</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🎓</div>
                    <p className="text-xs font-medium">Workshops</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">👥</div>
                    <p className="text-xs font-medium">Community</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">📸</div>
                    <p className="text-xs font-medium">Highlights</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🎯</div>
                    <p className="text-xs font-medium">Events</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🌟</div>
                    <p className="text-xs font-medium">Achievements</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <div className="text-xl lg:text-2xl mb-1">🎭</div>
                    <p className="text-xs font-medium">Performances</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/gallery"
                className="bg-[#4e230f] hover:bg-[#3a1a0b] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-semibold text-lg lg:text-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Full Gallery <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e230f] mb-6 lg:mb-8 leading-tight">
                Ready to Find Your Voice?
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join Orator today and embark on a journey of self-expression,
                critical thinking, and confident communication. Your voice
                matters.
              </p>
              <Link
                href="/join"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 lg:px-16 py-4 lg:py-6 rounded-lg font-semibold text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                Join Now <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
