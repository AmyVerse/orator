"use client";

import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Infacto4Page() {
  return (
    <main className="pt-24 min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-orange-900/30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl text-center mx-auto">
            <div className="mb-8">
              <span className="text-orange-400 font-semibold text-lg tracking-wider uppercase">
                Orator Presents
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-orange-400 bg-clip-text text-transparent">
              INFACTO 4.0
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-8">
              Order & Chaos
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              An Oxford-style debate that brings together voices from across the
              college, sparking powerful arguments, critical insights, and a
              clash of perspectives between the forces of order and chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="text-orange-400" size={24} />
                <span className="text-gray-300">
                  Date: <span className="text-white font-semibold">TBD</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Clock className="text-orange-400" size={24} />
                <span className="text-gray-300">
                  Time: <span className="text-white font-semibold">TBD</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="text-orange-400" size={24} />
                <span className="text-gray-300">
                  Venue:{" "}
                  <span className="text-white font-semibold">
                    Academic Building
                  </span>
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <p className="text-red-400 font-semibold text-lg mb-2">
                🔒 Registration Status
              </p>
              <p className="text-gray-300">
                Registrations are currently closed. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              About Infacto 4.0
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  The Ultimate Debate Experience
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Infacto 4.0: Order & Chaos represents the pinnacle of
                  intellectual discourse at IIIT Nagpur. This isn't just a
                  debate – it's a battleground of ideas where the fundamental
                  concepts of structure and spontaneity clash in spectacular
                  fashion.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Following the prestigious Oxford debate format, participants
                  will engage in a structured yet dynamic exchange of arguments,
                  challenging conventional thinking and exploring the delicate
                  balance between order and chaos in our modern world.
                </p>
                <div className="flex items-center gap-4 text-orange-400">
                  <Zap size={24} />
                  <span className="text-lg font-semibold">
                    High-stakes intellectual competition
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-orange-900/20 p-8 rounded-2xl border border-gray-700">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Oxford Style Format
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Formal proposition and opposition sides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Structured opening statements and rebuttals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Interactive audience participation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert panel of judges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Order vs Chaos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
                <div className="text-4xl mb-6">⚖️</div>
                <h3 className="text-3xl font-bold text-blue-400 mb-6">ORDER</h3>
                <ul className="text-gray-300 space-y-3 text-left">
                  <li>• Structure and systematic approaches</li>
                  <li>• Predictability and stability</li>
                  <li>• Rules, laws, and established frameworks</li>
                  <li>• Institutional governance</li>
                  <li>• Traditional methodologies</li>
                </ul>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
                <div className="text-4xl mb-6">🌪️</div>
                <h3 className="text-3xl font-bold text-red-400 mb-6">CHAOS</h3>
                <ul className="text-gray-300 space-y-3 text-left">
                  <li>• Innovation and creative disruption</li>
                  <li>• Adaptability and flexibility</li>
                  <li>• Breaking conventional boundaries</li>
                  <li>• Spontaneous solutions</li>
                  <li>• Revolutionary thinking</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Which philosophy should guide our society, institutions, and
              personal lives? Join us as brilliant minds from across the campus
              debate this fundamental question that shapes our understanding of
              progress, governance, and human nature itself.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Event Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-black/50 rounded-2xl border border-gray-700">
                <Users className="text-orange-400 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Top Debaters
                </h3>
                <p className="text-gray-300">
                  Featuring the most skilled debaters from across IIIT Nagpur
                </p>
              </div>

              <div className="text-center p-8 bg-black/50 rounded-2xl border border-gray-700">
                <Trophy className="text-orange-400 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Prestigious Awards
                </h3>
                <p className="text-gray-300">
                  Recognition for outstanding performance and argumentation
                </p>
              </div>

              <div className="text-center p-8 bg-black/50 rounded-2xl border border-gray-700">
                <Zap className="text-orange-400 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Intellectual Energy
                </h3>
                <p className="text-gray-300">
                  High-energy debates with real-world implications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-900 to-orange-900">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Don't miss Infacto 4.0! Follow us for the latest updates on
              registration, event details, and exclusive behind-the-scenes
              content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2 justify-center"
              >
                Join Orator Club <ArrowRight size={20} />
              </Link>
              <Link
                href="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors duration-300"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
