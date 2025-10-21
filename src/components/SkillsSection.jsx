import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const skills = [
  // Programming & Frameworks
  { name: "Python (TensorFlow, CVXPy)", level: 90, category: "programming" },
  { name: "C/C++", level: 85, category: "programming" },
  { name: "MATLAB/Simulink", level: 80, category: "programming" },
  { name: "ROS", level: 80, category: "programming" },
  { name: "Java", level: 75, category: "programming" },
  { name: "JavaScript", level: 70, category: "programming" },
  { name: "SQL", level: 70, category: "programming" },

  // CAD & Manufacturing
  { name: "SolidWorks", level: 90, category: "cad" },
  { name: "Blender", level: 75, category: "cad" },
  { name: "Cura / PrusaSlicer", level: 80, category: "cad" },
  { name: "RDWorks / Laser Cutting", level: 70, category: "cad" },
  { name: "3D Printing (FDM, DLP)", level: 85, category: "cad" },

  // Tools & Hardware
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "STM32", level: 70, category: "tools" },
  { name: "Raspberry Pi / Jetson Nano", level: 75, category: "tools" },
  { name: "ESP32 / Arduino", level: 80, category: "tools" },
  { name: "KUKA Robots", level: 70, category: "tools" },
];

const softSkills = [
  "Leadership",
  "Teamwork",
  "Adaptability",
  "Self-motivation",
  "Quick learning",
  "Multitasking",
  "Resilience",
  "Self-taught",
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2" },
];

const certifications = [
  {
    id: 1,
    title: "SolidWorks CSWA – CAD Design",
    issuer: "Dassault Systèmes, 2024",
    description: "Certified SolidWorks Associate in CAD Design.",
    image: "certifications/cswa.png",
    tags: ["SolidWorks", "CAD"],
    link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9LSKB6R83J",
  },
  {
    id: 2,
    title: "Additive Manufacturing Associate",
    issuer: "Dassault Systèmes, 2024",
    description: "Certified knowledge in additive manufacturing workflows.",
    image: "certifications/am.png",
    tags: ["3D Printing", "Manufacturing"],
    link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-6HQNZ38YWS",
  },
  {
    id: 3,
    title: "Sustainability Associate",
    issuer: "Dassault Systèmes, 2023",
    description: "Certification in sustainability-driven engineering practices.",
    image: "certifications/sustainability.png",
    tags: ["Sustainability", "Engineering"],
    link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EV4QFC5DTL",
  },
  // NEW: Supply Chain Specialization
  {
    id: 4,
    title: "Supply Chain Management Specialization",
    issuer: "Rutgers, The State University of New Jersey",
    description:
      "Specialization in Supply Chain Management consisting of five courses covering logistics, operations, planning, sourcing, and strategy.",
    image: "certifications/supply_chain.jpeg", 
    tags: ["Supply Chain", "Logistics"],
    link: "https://coursera.org/share/1a5e739d594e63b4502801774ce2e72b",
    details: {
      courses: [
        "Supply Chain Logistics",
        "Supply Chain Operations",
        "Supply Chain Planning",
        "Supply Chain Sourcing",
        "Supply Chain Management Strategy",
      ],
    },
  },
];

const categories = ["all", "programming", "cad", "tools"];

const levelToLabel = (level) => {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Proficient";
  if (level >= 50) return "Familiar";
  return "Beginner";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-primary">Certifications</span>
        </h2>

        {/* CERTIFICATIONS (like lectures/projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-muted-foreground">
                    Image Placeholder
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>

                {/* If the special Supply Chain cert has details, show a compact legend */}
                {cert.details && (
                  <div className="text-sm text-muted-foreground mb-4">
                    <strong className="mt-2 block">Course Certificates Completed:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {cert.details.courses.map((c, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Certification <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
