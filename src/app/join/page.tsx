"use client";

import { ArrowRight, Check, Star } from "lucide-react";
import { useState } from "react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    branch: "",
    experience: "",
    motivation: "",
    interests: [] as string[],
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const interests = [
    "Parliamentary Debates",
    "Public Speaking",
    "Model United Nations",
    "Creative Writing",
    "Event Organization",
    "Research & Analysis",
    "Social Media Management",
    "Workshop Facilitation",
  ];

  const membershipBenefits = [
    "Free access to all workshops and training sessions",
    "Opportunity to participate in inter-college competitions",
    "Certificate courses in public speaking and debate",
    "Networking with alumni and industry professionals",
    "Leadership development through club positions",
    "Access to exclusive resources and materials",
    "Mentorship from senior members",
    "Performance feedback and skill assessment",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Join Orator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to unleash your potential? Join our community of passionate
            speakers and thinkers who are shaping the future through the power
            of words.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#4e230f] mb-6">
              Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your.email@iiitdmj.ac.in"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Current Year *
                  </label>
                  <select
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Branch *
                </label>
                <select
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="EE">Electrical Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Previous Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Experience Level</option>
                  <option value="none">No prior experience</option>
                  <option value="school">School level debates/speeches</option>
                  <option value="college">College level participation</option>
                  <option value="competitive">
                    Competitive debating experience
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="rounded text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Why do you want to join Orator? *
                </label>
                <textarea
                  name="motivation"
                  required
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Tell us about your motivation to join and what you hope to achieve..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-[#4e230f] py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Submit Application <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* Membership Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#4e230f] mb-6">
                Membership Benefits
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

            {/* Requirements */}
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

            {/* Contact Info */}
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
                  <strong>Email:</strong> contact@orator-iiitdmj.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 XXXXX XXXXX
                </p>
                <p>
                  <strong>Office:</strong> Student Activity Center, IIIT Nagpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
