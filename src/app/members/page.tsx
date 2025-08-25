"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function MembersPage() {
  const [selectedYear, setSelectedYear] = useState(2025);

  const timelineYears = [
    { year: 2024, label: "2024", disabled: false },
    { year: 2025, label: "2025", disabled: false },
  ];
  const leadership = [
    {
      name: "Tanuj Game",
      position: "Lead",
      btId: "BT24ECE069",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      bio: "Leading Orator with vision and dedication to excellence in debate and public speaking.",
      email: "tanuj.game@orator.com",
    },
    {
      name: "Shreyam Prashar",
      position: "Co-Lead",
      btId: "BT24CSE059",
      year: "Second Year",
      branch: "Computer Science Engineering",
      bio: "Supporting the vision and managing strategic initiatives for the club's growth.",
      email: "shreyam.prashar@orator.com",
    },
  ];

  const domainLeads = [
    {
      name: "Diya Das",
      position: "Domain Lead",
      btId: "BT24ECE043",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Content & Anchoring",
    },
    {
      name: "Shantanu Wankhede",
      position: "Domain Lead",
      btId: "BT24CSE150",
      year: "Second Year",
      branch: "Computer Science Engineering",
      domain: "Content & Anchoring",
    },
    {
      name: "Sarthak Gupta",
      position: "Domain Lead",
      btId: "BT24ECE087",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Design",
    },
    {
      name: "Sanskruti Malani",
      position: "Domain Lead",
      btId: "BT24CSE202",
      year: "Second Year",
      branch: "Computer Science Engineering",
      domain: "Media",
    },
    {
      name: "Rutva Gandhi",
      position: "Domain Lead",
      btId: "BT24ECE068",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Scheduling & Co-ordination",
    },
    {
      name: "Amulya Yadav",
      position: "Domain Lead",
      btId: "BT24CSH066",
      year: "Second Year",
      branch: "Computer Science Engineering (HCI-GT)",
      domain: "Web Dev and Video Editing",
    },
    {
      name: "Sarthak Srivastava",
      position: "Domain Lead",
      btId: "BT24ECE038",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Logistics & Operations",
    },
    {
      name: "Yash Gupta",
      position: "Domain Lead",
      btId: "BT24ECI018",
      year: "Second Year",
      branch: "Electronics & Communication Engineering (IoT)",
      domain: "Logistics & Operations",
    },
    {
      name: "Vaidehi Turkar",
      position: "Domain Lead",
      btId: "BT24CSH037",
      year: "Second Year",
      branch: "Computer Science Engineering (HCI-GT)",
      domain: "Hospitality",
    },
    {
      name: "Rakshit Ladda",
      position: "Domain Lead",
      btId: "BT24CSD066",
      year: "Second Year",
      branch: "Computer Science Engineering (DSA)",
      domain: "Hospitality",
    },
    {
      name: "Devasya Dwivedi",
      position: "Domain Lead",
      btId: "BT24CSD048",
      year: "Second Year",
      branch: "Computer Science Engineering (DSA)",
      domain: "PR & Outreach",
    },
    {
      name: "Hardik Garg",
      position: "Domain Lead",
      btId: "BT24ECE019",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Marketing",
    },
    {
      name: "Dilkhush Choubey",
      position: "Domain Lead",
      btId: "BT24ECE065",
      year: "Second Year",
      branch: "Electronics & Communication Engineering",
      domain: "Marketing",
    },
    {
      name: "Dev Pathak",
      position: "Domain Lead",
      btId: "BT24CSE030",
      year: "Second Year",
      branch: "Computer Science Engineering",
      domain: "Corporate",
    },
    {
      name: "Vivek Mishra",
      position: "Domain Lead",
      btId: "BT24CSE046",
      year: "Second Year",
      branch: "Computer Science Engineering",
      domain: "Content & Anchoring",
    },
  ];

  const alumni = [
    {
      name: "Dr. Rajesh Verma",
      batch: "2019-2023",
      currentPosition: "Software Engineer at Google",
      achievement: "Winner of National Debate Championship 2022",
    },
    {
      name: "Kavya Menon",
      batch: "2018-2022",
      currentPosition: "Lawyer at Supreme Court",
      achievement: "Best Speaker Award - Inter-University Tournament 2021",
    },
    {
      name: "Aditya Tiwari",
      batch: "2017-2021",
      currentPosition: "Product Manager at Microsoft",
      achievement: "Founded the club's first international partnership",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who drive Orator forward and inspire
            excellence in debate and public speaking.
          </p>
        </div>

        {/* Year Selection */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-lg">
            {timelineYears.map((item) => (
              <button
                key={item.year}
                onClick={() => !item.disabled && setSelectedYear(item.year)}
                disabled={item.disabled}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === item.year
                    ? "bg-[#4e230f] text-white"
                    : item.disabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
                {item.disabled && <span className="ml-2 text-xs">(Soon)</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Team Content - Conditional based on selected year */}
        {selectedYear === 2025 && (
          <>
            {/* Leadership */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
                Leadership Team 2025
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {leadership.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-amber-700 text-center">
                          <div className="w-20 h-20 mx-auto mb-2 bg-amber-300 rounded-full flex items-center justify-center">
                            <span className="text-3xl">👑</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#4e230f] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-amber-600 font-bold text-lg mb-2">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-1 font-mono">
                        ID: {member.btId}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        {member.year} • {member.branch}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                      <div className="flex space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Domain Leads */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
                Domain Leads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainLeads.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-500"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#4e230f]">
                          {member.name}
                        </h3>
                        <p className="text-amber-600 font-semibold text-sm">
                          {member.domain}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="font-mono">ID: {member.btId}</p>
                      <p>
                        {member.year} • {member.branch}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Statistics */}
            <section className="mb-20">
              <div className="bg-[#4e230f] rounded-lg p-12">
                <h2 className="text-3xl font-bold text-[#fcf3cc] text-center mb-12">
                  Team Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">
                      17
                    </div>
                    <div className="text-[#fcf3cc]">Leadership Members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">
                      10
                    </div>
                    <div className="text-[#fcf3cc]">Domain Areas</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">
                      5
                    </div>
                    <div className="text-[#fcf3cc]">Academic Branches</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">
                      100%
                    </div>
                    <div className="text-[#fcf3cc]">Second Year Students</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Notable Alumni */}
            {/* <section className="mb-20">
              <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
                Notable Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {alumni.map((alum, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-amber-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#4e230f] mb-2">
                      {alum.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-2">
                      {alum.batch}
                    </p>
                    <p className="text-gray-700 mb-3">{alum.currentPosition}</p>
                    <p className="text-sm text-gray-600 italic">
                      {alum.achievement}
                    </p>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Join Us CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-12">
                <h2 className="text-3xl font-bold text-[#4e230f] mb-4">
                  Want to Join Our Team?
                </h2>
                <p className="text-[#4e230f]/80 mb-6 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who want to
                  grow their speaking skills and contribute to our community.
                </p>
                <a
                  href="/join"
                  className="bg-[#4e230f] hover:bg-[#3a1b0b] text-[#fcf3cc] px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
                >
                  Join Orator Today
                </a>
              </div>
            </section>
          </>
        )}

        {/* Placeholder for 2024 team */}
        {selectedYear === 2024 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-[#4e230f] mb-4">
                2024 Team
              </h2>
              <p className="text-gray-600 mb-6">
                The 2024 team information will be added soon. Stay tuned for
                updates!
              </p>
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-sm text-gray-500">
                This section is under construction
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
