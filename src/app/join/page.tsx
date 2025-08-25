"use client";

import { ArrowRight, Check, Star } from "lucide-react";
import { useState } from "react";

export default function JoinPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const membershipBenefits = [
    "Access to all workshops and training sessions",
    "Opportunity to participate in inter-college competitions",
    "Certificate courses in public speaking and debate",
    "Networking with alumni and industry professionals",
    "Leadership development through club positions",
    "Access to exclusive resources and materials",
    "Mentorship from senior members",
    "Performance feedback and skill assessment",
  ];

  if (showSuccess) {
    return (
      <main className="pt-24 min-h-screen bg-[#fcf3cc] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
            <Check size={48} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-[#4e230f] mb-4">
            Welcome to Orator!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your interest in joining our club. We've received your
            application and will get back to you within 48 hours.
          </p>
          <p className="text-gray-600 mb-8">
            In the meantime, follow us on social media to stay updated with our
            latest events and activities.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-amber-500 hover:bg-amber-600 text-[#4e230f] px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Back to Form
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Join Orator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Unleash your potential.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Join a community of speakers and thinkers where you’ll build
            confidence, sharpen public speaking skills, and connect with
            like-minded individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4e230f] mb-4">
                Join as Contributor
              </h2>
              <p className="text-gray-600">
                Ready to actively contribute to club activities, events, and
                leadership roles
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-8">
                Apply now to become an active member and help shape the future
                of public speaking at IIIT Nagpur.
              </p>
              <a
                href="https://forms.gle/GrNVCjSkSA7PtJPj9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply Now <ArrowRight size={20} />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Opens Google Form in a new tab
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4e230f] mb-4">
                Join as Learner
              </h2>
              <p className="text-gray-600">
                Start your journey with us through workshops and learning
                sessions
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-8">
                Perfect for beginners who want to learn and grow their speaking
                skills in a supportive environment.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Coming Soon!
                </h3>
                <p className="text-blue-700">
                  Applications for learner membership will open soon. Stay tuned
                  for updates!
                </p>
              </div>
              <button
                disabled
                className="inline-flex items-center gap-2 bg-gray-300 text-gray-500 px-8 py-4 rounded-lg font-semibold text-lg cursor-not-allowed"
              >
                Applications Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#4e230f] mb-6">
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-[#4e230f] mb-4">
                Questions?
              </h3>
              <p className="text-gray-700 mb-4">
                Have questions about joining or want to know more about our
                activities? We're here to help!
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> orator@iiitn.ac.in
                </p>
                <p>
                  <strong>Office:</strong> Student Activity Council, IIIT Nagpur
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#4e230f] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What We Look For</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="text-amber-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Passion for Communication</h4>
                    <p className="text-white/80 text-sm">
                      Genuine interest in improving speaking and debating skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-amber-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Commitment</h4>
                    <p className="text-white/80 text-sm">
                      Willingness to attend regular meetings and participate
                      actively
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-amber-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Open Mind</h4>
                    <p className="text-white/80 text-sm">
                      Readiness to learn, grow, and embrace constructive
                      feedback
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-amber-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Team Spirit</h4>
                    <p className="text-white/80 text-sm">
                      Collaborative attitude and respect for diverse
                      perspectives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
