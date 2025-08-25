import { BookOpen, Calendar, Trophy, Users } from "lucide-react";

export default function HistoryPage() {
  const milestones = [
    {
      year: "2021",
      title: "Foundation of Orator",
      description:
        "Founded by a group of passionate students who believed in the power of effective communication and debate.",
      achievement: "Club established with 15 founding members",
    },
    {
      year: "2021",
      title: "First Inter-College Event",
      description:
        "Organized our first inter-college debate competition, bringing together students from across the region.",
      achievement: "30+ colleges participated",
    },
    {
      year: "2022",
      title: "Regional Recognition",
      description:
        "Multiple wins across MUN and Debate competition in India",
      achievement: "Regional Champions",
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description:
        "Expanded our activities to include public speaking workshops, guest lectures, and international collaborations.",
      achievement: "100+ active members",
    },
    {
      year: "2025",
      title: "Most succesfull event : Infacto 3.0",
      description:
        "An inter-college debate competition based on Oxford style.",
      achievement: "150+ participations",
    },
    {
      year: "2025",
      title: "Current Legacy",
      description:
        "Continuing our mission to foster eloquent speakers and critical thinkers who will shape tomorrow's discourse.",
      achievement: "100+ members strong",
    },
  ];

  const foundingPrinciples = [
    {
      icon: <BookOpen size={32} />,
      title: "Pursuit of Knowledge",
      description:
        "We believe that true eloquence comes from deep understanding and continuous learning.",
    },
    {
      icon: <Users size={32} />,
      title: "Inclusive Community",
      description:
        "Creating a welcoming space where every voice is heard and every perspective is valued.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Excellence in Speaking",
      description:
        "Striving for the highest standards in debate, public speaking, and critical thinking.",
    },
    {
      icon: <Calendar size={32} />,
      title: "Consistent Growth",
      description:
        "Regular practice, workshops, and competitions to ensure continuous improvement.",
    },
  ];

  const legacyNumbers = [
    { number: "100+", label: "Alumni Worldwide" },
    { number: "20+", label: "Events Conducted" },
    { number: "50+", label: "Awards Won" },
    { number: "25+", label: "Partner Institutions" },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Our History
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to regional recognition - discover the
            journey of passion, growth, and excellence that defines Orator.
          </p>
        </div>

        {/* Founding Story */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#4e230f] mb-6 text-center">
              The Beginning
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center text-xl leading-relaxed mb-8">
                "In the corridors of IIIT Nagpur, a vision was born - to create
                a platform where ideas could flourish, voices could be heard,
                and minds could be shaped through the art of eloquent
                discourse."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="mb-4">
                    Orator was founded in 2021 by a group of passionate students
                    who recognized the transformative power of effective
                    communication. What started as informal discussions in the
                    campus cafeteria grew into structured debates, and
                    eventually blossomed into the premier speaking club of our
                    institution.
                  </p>
                  <p className="mb-4">
                    Our founders believed that in an increasingly connected
                    world, the ability to articulate thoughts clearly, argue
                    persuasively, and listen critically would be essential
                    skills for future leaders. Thus, Orator was born with a
                    mission to nurture these very capabilities.
                  </p>
                  <p>
                    Today, we stand as a testament to what passionate
                    individuals can achieve when they unite behind a common
                    vision of excellence and growth.
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#4e230f] mb-4">
                    Founding Vision
                  </h3>
                  <blockquote className="italic text-gray-700 border-l-4 border-amber-500 pl-4">
                    "To create eloquent speakers, critical thinkers, and
                    confident leaders who will shape the discourse of tomorrow
                    through the power of words and wisdom."
                  </blockquote>
                  <div className="mt-4 text-sm text-gray-600">
                    - Founding Members, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
            Journey Through Time
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-500 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-amber-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#4e230f] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {milestone.description}
                      </p>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Principles */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
            Our Founding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundingPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4e230f] mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy in Numbers */}
        <section className="mb-20">
          <div className="bg-[#4e230f] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#fcf3cc] text-center mb-12">
              Our Legacy in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {legacyNumbers.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#fcf3cc] text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
            Hall of Fame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-2">
                Championship Wins
              </h3>
              <p className="text-gray-600">
                12 major tournament victories including regional and national
                level competitions
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-2">
                Individual Honors
              </h3>
              <p className="text-gray-600">
                Over 50 individual awards for best speaker, best debater, and
                outstanding performance
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-2">
                Recognition
              </h3>
              <p className="text-gray-600">
                Institutional awards for excellence in student activities and
                community contribution
              </p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-[#4e230f] mb-6">
              Looking Forward
            </h2>
            <p className="text-[#4e230f]/80 mb-8 max-w-3xl mx-auto text-lg">
              As we continue our journey, we remain committed to our founding
              vision while adapting to the changing landscape of communication
              and discourse. Our goal is to nurture the next generation of
              leaders, thinkers, and changemakers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold text-[#4e230f] mb-2">Global Reach</h3>
                <p className="text-[#4e230f]/80 text-sm">
                  Expanding our network to connect with debate clubs worldwide
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold text-[#4e230f] mb-2">
                  Digital Innovation
                </h3>
                <p className="text-[#4e230f]/80 text-sm">
                  Embracing technology to enhance learning and participation
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold text-[#4e230f] mb-2">
                  Community Impact
                </h3>
                <p className="text-[#4e230f]/80 text-sm">
                  Using our skills to contribute meaningfully to society
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
