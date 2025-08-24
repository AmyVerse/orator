import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 lg:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Club Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">
              ORATOR
            </h3>
            <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
              The premier debate and public speaking club of IIIT Nagpur. Where
              words meet wisdom and voices find their power.
            </p>
            <p className="text-xs lg:text-sm text-gray-500">
              Powered by
              <Link
                className="ml-1 text-amber-800"
                href="https://amyverse.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                AmyVerse
              </Link>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-white">
              Connect
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a
                  href="https://instagram.com/orator_iiitn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@the.oratorclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:orator@iiitn.ac.in"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
          <p className="text-gray-500 text-xs lg:text-sm">
            © 2025 Orator Club, IIIT Nagpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
