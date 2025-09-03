const lectures = [
  {
    id: 1,
    title: "Casablanca International Conference on Additive Manufacturing",
    role: "Lecturer (Virtual)",
    location: "Casablanca, Morocco · Apr 2024",
    description:
      "Presented 'Additive Manufacturing for Tire Treads Design for Outer Space Challenging Terrains' to 300+ attendees including ESA, Airbus, and European/African universities.",
    image: "lectures/lecture1.png", // add your own image path
    tags: ["Additive Manufacturing", "Aerospace", "International Lecture"],
  },
  {
    id: 2,
    title:
      "LACCEI International Multi-Conference on Engineering, Education and Technology",
    role: "Lecturer (Virtual)",
    location: "Mexico City, Mexico · Jul 2025",
    description:
      "Presented 'Mechanical Design and Testing of 3D-Printed Non-Pneumatic Wheels for Human-Powered Vehicles' to Latin American researchers and academic leaders.",
    image: "lectures/lecture2.png",
    tags: ["Non-Pneumatic Wheels", "3D Printing", "STEM"],
  },
  {
    id: 3,
    title: "KUKA Robotic Arm Workshop – ITEC 2024",
    role: "Workshop Lecturer",
    location: "La Paz, Bolivia · May 2024",
    description:
      "Delivered practical sessions on KUKA arm operation, KRL programming, and ROS integration.",
    image: "lectures/lecture3.png",
    tags: ["Robotics", "KUKA", "Workshops"],
  },
];

export const LecturesSection = () => {
  return (
    <section id="lectures" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Lectures</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my international lectures, workshops, and conference talks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {lecture.image ? (
                  <img
                    src={lecture.image}
                    alt={lecture.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-muted-foreground">
                    Image Placeholder
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {lecture.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{lecture.title}</h3>
                <p className="text-sm font-medium text-primary mb-1">
                  {lecture.role}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {lecture.location}
                </p>
                <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line leading-relaxed">
                  {lecture.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
