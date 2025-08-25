import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Infacto 4.0 : Order and Chaos",
      date: "TBD",
      time: "TBD",
      location: "Academic Building",
      description:
        "An Oxford-style debate that brings together voices from across the college, sparking powerful arguments, critical insights, and a clash of perspectives.",
      category: "Competition",
      registrationOpen: false,
      registrationLink: "/join", // Link for registration when open
      learnMoreLink: "/events/infacto4o", // Link to detailed event page
    },
    {
      id: 2,
      title: "Tantra-Fiesta x Orator",
      date: "October 10-11, 2025",
      time: "TBD",
      location: "Academic Building",
      description: "to be revealed",
      category: "Competition",
      registrationOpen: false,
      registrationLink: "/join", // Link for registration when open
      learnMoreLink: "/tf2025",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Rang-e-Vaad : TURNCOURT",
      date: "April 19, 2025",
      description:
        "Every case has two sides, but can you argue both? One moment you're defending, the next you're tearing it apart.",
      category: "Competition",
    },
    {
      id: 5,
      title: "MUN 3.0",
      date: "February 27-28, 2025",
      description:
        "Global security hangs in the balance. The agenda for UNGA-DISEC is here—diplomacy, strategy, and tough decisions await.",
      category: "Competition",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting debates, workshops, and competitions that will
            sharpen your speaking skills and expand your horizons.
          </p>
        </div>

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
                    {event.registrationOpen ? (
                      <Link
                        href={event.registrationLink || "/join"}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
                      >
                        Register Now
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg font-semibold cursor-not-allowed text-center"
                      >
                        Register Now
                      </button>
                    )}
                    <Link
                      href={event.learnMoreLink || "#"}
                      className="border border-[#4e230f] text-[#4e230f] hover:bg-[#4e230f] hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
