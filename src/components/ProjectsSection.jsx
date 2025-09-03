const projects = [
  {
    id: 1,
    title: "🛰 1U CubeSat Development",
    description: `Led GNC team developing a neural network-based trajectory predictor for Astrobee.
Integrated it into ROS + Gazebo for control testing.
Deployed payloads via STM32 on stratospheric balloon missions for sensor validation.`,
    image: "projects/cubesat.png",
    tags: ["CVXPy", "Simulink", "ROS", "STM32"],
  },
  {
    id: 2,
    title: "🤖 NASA HERC Point Optimization",
    description: `Developing ML models to predict rover task success, time, energy, and points.
Integrating probabilistic outputs into graph-based planners for optimized routes under user constraints.`,
    image: "projects/point.png",
    tags: ["ML", "Probabilistic Modeling", "Graph Optimization"],
  },
  {
    id: 3,
    title: "🌿  Computer Vision Segmentation Project",
    description: `Creating custom datasets and implementing semantic segmentation and ML detection models, evaluated on real-world data.
Integrating IoT-sourced environmental data from in-house prototypes for model validation.`,
    image: "projects/tree.jpg",
    tags: ["Python", "OpenCV", "Machine Learning"],
  },
  {
    id: 4,
    title: "♟ Robotic Chess System with KUKA Arm",
    description: `Founder and lead engineer of an autonomous chess system integrating KUKA robotic arm, ROS control, and custom PCB chessboard.
Implemented motion planning, inverse kinematics, and EKI communication.`,
    image: "projects/rc.png",
    tags: ["ROS", "Python", "KUKA", "CAD"],
  },
  {
    id: 5,
    title: "🔧 ABS Printing Optimization",
    description: `Built IoT-enabled systems for industrial ABS printing: a thermally controlled enclosure to prevent warping and an acetone vapor chamber to improve surface finish.
Implemented remote parameter control via mobile interface and Firebase dashboards.`,
    image: "projects/abs.png",
    tags: ["CAD", "MicroPython", "IoT", "Firebase"],
  },
  {
    id: 6,
    title: "🚀 NASA HERC 2024 Rover Design",
    description: `Led rover tool design and fabrication, contributing to the "Most Improved Performance" award.
Produced components via CAD modeling, 3D printing, and CNC machining.
Led team to publish and present 3 peer-reviewed papers on NASA HERC innovations at international conferences.`,
    image: "projects/task.png",
    tags: ["SolidWorks", "3D Printing", "CNC", "Mechanical Design"],
  },
  {
    id: 7,
    title: "🔐 Biometric Registration and Access Control System",
    description: `Led development of a biometric registration and entry/exit control system at workplace arrival points.
Integrated database, software, and hardware modules for reliable employee authentication.`,
    image: "projects/fingerprint.jpg",
    tags: ["C#/.NET", "SQL Server", "Embedded Systems"],
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
