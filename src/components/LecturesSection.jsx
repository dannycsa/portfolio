const lectures = [
  {
    id: 1,
    title: "Casablanca International Conference on Additive Manufacturing",
    role: "Lecturer (Virtual)",
    location: "Casablanca, Morocco · Apr 2024",
    description: "Presented 'Additive Manufacturing for Tire Treads Design for Outer Space Challenging Terrains' to 300+ attendees including ESA, Airbus, and European/African universities.",
  },
  {
    id: 2,
    title: "LACCEI International Multi-Conference on Engineering, Education and Technology",
    role: "Lecturer (Virtual)",
    location: "Mexico City, Mexico · Jul 2025",
    description: "Presented 'Mechanical Design and Testing of 3D-Printed Non-Pneumatic Wheels for Human-Powered Vehicles' to Latin American researchers and academic leaders.",
  },
  {
    id: 3,
    title: "KUKA Robotic Arm Workshop – ITEC 2024",
    role: "Workshop Lecturer",
    location: "La Paz, Bolivia · May 2024",
    description: "Delivered practical sessions on KUKA arm operation, KRL programming, and ROS integration.",
  },
];


export const LecturesSection = () => {
  return (
    <section id="lectures" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Lectures & <span className="text-primary">Outreach</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Highlights of my international lectures, workshops, and STEM outreach activities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="text-xl font-semibold mb-2">{lecture.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>{lecture.role}</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {lecture.location}
              </p>
              <p className="text-sm text-muted-foreground">
                {lecture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};