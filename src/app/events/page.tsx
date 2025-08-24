import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Parliamentary Debate Workshop",
      date: "February 15, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Seminar Hall A",
      description:
        "Learn the fundamentals of parliamentary style debating with expert guidance from experienced debaters.",
      category: "Workshop",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Inter-College Debate Championship",
      date: "February 22, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Auditorium",
      description:
        "Compete against the best debaters from colleges across the region in this prestigious tournament.",
      category: "Competition",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Public Speaking Masterclass",
      date: "March 1, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Room B",
      description:
        "Master the art of captivating public speaking with professional trainers and industry experts.",
      category: "Masterclass",
      registrationOpen: true,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Annual Debate Championship 2024",
      date: "December 15, 2024",
      description:
        "Our biggest event of the year with participants from 25+ colleges.",
      category: "Competition",
    },
    {
      id: 5,
      title: "Rhetoric and Reasoning Workshop",
      date: "November 20, 2024",
      description:
        "A deep dive into the art of persuasive speaking and logical argumentation.",
      category: "Workshop",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting debates, workshops, and competitions that will
            sharpen your speaking skills and expand your horizons.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4e230f] mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                    {event.registrationOpen && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Registration Open
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[#4e230f] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/join"
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
                    >
                      Register Now
                    </Link>
                    <button className="border border-[#4e230f] text-[#4e230f] hover:bg-[#4e230f] hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-[#4e230f] mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-3">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#4e230f] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-2" />
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-[#4e230f] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#fcf3cc] mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-[#fcf3cc]/80 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events and be the first to register
              for exclusive workshops and competitions.
            </p>
            <Link
              href="/join"
              className="bg-amber-500 hover:bg-amber-600 text-[#4e230f] px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Join Our Club
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
