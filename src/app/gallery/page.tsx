export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Infacto 3.0",
      category: "Competition",
      year: "2024",
      images: [
        "/gallery/debate1.jpg",
        "/gallery/debate2.jpg",
        "/gallery/debate3.jpg",
      ],
    },
    {
      id: 2,
      title: "Rang-e-Vaad : TURNCOURT",
      category: "Competition",
      year: "2025",
      images: ["/gallery/workshop1.jpg", "/gallery/workshop2.jpg"],
    },
    {
      id: 3,
      title: "MUN 3.0",
      category: "Competition",
      year: "2025",
      images: [
        "/gallery/speaking1.jpg",
        "/gallery/speaking2.jpg",
        "/gallery/speaking3.jpg",
        "/gallery/speaking4.jpg",
      ],
    },
    {
      id: 4,
      title: "Tantra-Fiesta x Orator",
      category: "Competition",
      year: "2025",
      images: ["/gallery/tournament1.jpg", "/gallery/tournament2.jpg"],
    },
  ];

  const achievements = [
    {
      title: "Best Debate Club 2024",
      description:
        "Awarded by IIIT Nagpur for outstanding contribution to student development",
      year: "2024",
    },
    {
      title: "Regional Champions",
      description: "Won the Central India Inter-College Debate Championship",
      year: "2023",
    },
    {
      title: "Most Active Club",
      description:
        "Recognition for consistent events and high student participation",
      year: "2023",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-[#fcf3cc]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4e230f] mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of eloquence, passion, and growth. Explore our
            journey through the years.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold">
            All
          </button>
          <button className="bg-white text-[#4e230f] border border-[#4e230f] px-6 py-2 rounded-full font-semibold hover:bg-[#4e230f] hover:text-white transition-colors">
            Competitions
          </button>
          <button className="bg-white text-[#4e230f] border border-[#4e230f] px-6 py-2 rounded-full font-semibold hover:bg-[#4e230f] hover:text-white transition-colors">
            Workshops
          </button>
          <button className="bg-white text-[#4e230f] border border-[#4e230f] px-6 py-2 rounded-full font-semibold hover:bg-[#4e230f] hover:text-white transition-colors">
            Masterclasses
          </button>
        </div>

        <div className="space-y-16">
          {galleryItems.map((item) => (
            <section
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#4e230f] mb-2">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                      <span className="text-gray-600">{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {item.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                            📷
                          </div>
                          <p className="text-sm">Image {index + 1}</p>
                        </div>
                      </div>
                      {/* <Image 
                        src={image} 
                        alt={`${item.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      /> */}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-4xl font-bold text-[#4e230f] text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-3">
                Achievements
              </h3>
              <p className="text-gray-600 mb-3">Listing Soon</p>
              <span className="text-amber-600 font-semibold">2025</span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">�</span>
              </div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-3">
                Recognition
              </h3>
              <p className="text-gray-600 mb-3">Listing Soon</p>
              <span className="text-amber-600 font-semibold">2025</span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#4e230f] mb-3">
                Milestones
              </h3>
              <p className="text-gray-600 mb-3">Listing Soon</p>
              <span className="text-amber-600 font-semibold">2025</span>
            </div>
          </div>
        </section>

        <section className="mt-20 bg-[#4e230f] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-[#fcf3cc] mb-6">
            Watch Our Journey
          </h2>
          <p className="text-[#fcf3cc]/80 mb-8 max-w-2xl mx-auto">
            Experience the passion and energy of our debates through this
            highlights reel from our recent events.
          </p>
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                  ▶️
                </div>
                <p>Video Highlights Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
