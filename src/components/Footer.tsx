import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf3d0] text-gray-700 py-8 lg:py-12 border-t border-orange-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-[jost] lg:text-2xl font-bold mb-3 lg:mb-4 text-[#4e230f]">
              ORATOR
            </h3>
            <p className="text-gray-700 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
              The premier debate and public speaking club of IIIT Nagpur. Where
              words meet wisdom and voices find their power.
            </p>
            <p className="text-xs lg:text-sm text-gray-600">
              Powered by
              <Link
                className="ml-1 text-orange-600"
                href="https://amyverse.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                AmyVerse
              </Link>
            </p>
          </div>

          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-[#4e230f]">
              Quick Links
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <Link
                  href="/events"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-[#4e230f]">
              Connect
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a
                  href="https://instagram.com/orator_iiitn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@the.oratorclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:orator@iiitn.ac.in"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm lg:text-base"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
          <p className="text-gray-600 text-xs lg:text-sm">
            © 2025 Orator Club, IIIT Nagpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
