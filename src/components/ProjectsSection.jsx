const projects = [
  {
    id: 1,
    title: "🛰 1U CubeSat Development",
    description: `Led a team of five as GNC engineer to build a neural network-based trajectory predictor for Astrobee.
Integrated it into ROS + Gazebo for control testing.
Deployed payloads via STM32 on stratospheric balloon missions.`,
    image: "projects/project1.png", // placeholder
    tags: ["CVXPy", "Simulink", "ROS", "STM32"],
  },
  {
    id: 2,
    title: "🤖 NASA HERC Point Optimization",
    description: `Collaborating with UNIVA (Mexico) to develop LP and path-planning algorithms to maximize NASA HERC points.
Defined decision variables, constraints, and simulations combining LP with graph heuristics.`,
    image: "projects/project1.png",
    tags: ["Linear Programming", "Path Planning", "Simulation"],
  },
  {
    id: 3,
    title: "🌿 Lichens Computer Vision Bioindicator",
    description: `Developing a CV system to classify lichens as air-quality bioindicators.`,
    image: "projects/project1.png",
    tags: ["Python", "OpenCV", "Machine Learning"],
  },
  {
    id: 4,
    title: "♟ Robotic Chess System with KUKA Arm",
    description: `Founder and lead engineer of an autonomous chess system with KUKA arm, ROS control, and custom PCB chessboard.
Implemented motion planning, inverse kinematics, and EKI communication.`,
    image: "projects/project1.png",
    tags: ["ROS", "Python", "KUKA"],
  },
  {
    id: 5,
    title: "🔧 ABS Printing Optimization",
    description: `Built two systems to improve industrial ABS printing: IoT-enabled enclosure reducing warping, and acetone vapor chamber achieving glossy finishes.
Remote parameter control via mobile and Firebase dashboards.`,
    image: "projects/project1.png",
    tags: ["CAD", "MicroPython", "IoT"],
  },
  {
    id: 6,
    title: "🚀 NASA HERC 2024 Rover Design",
    description: `Designed and fabricated rover tools, contributing to the "Most Improved Performance" award.
Used SolidWorks, 3D printing, and CNC machining.`,
    image: "projects/project1.png",
    tags: ["SolidWorks", "3D Printing", "CNC"],
  },
  {
    id: 7,
    title: "Volunteering, Outreach & Lectures",
    description: `Presented Additive Manufacturing and NASA HERC projects internationally (Morocco, Mexico).
Delivered KUKA workshops and STEM outreach across Bolivia.
Led 12 students to publish 3 peer-reviewed papers on NASA HERC innovations.`,
    image: "projects/project1.png",
    tags: ["STEM Outreach", "Lectures", "Workshops"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one highlights skills, innovation, and impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
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
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
