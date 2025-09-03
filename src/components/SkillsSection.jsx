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
    link: "https://www.certification-link.com/cswa",
  },
  {
    id: 2,
    title: "Additive Manufacturing Associate",
    issuer: "Dassault Systèmes, 2024",
    description: "Certified knowledge in additive manufacturing workflows.",
    image: "certifications/additive.png",
    tags: ["3D Printing", "Manufacturing"],
    link: "https://www.certification-link.com/additive",
  },
  {
    id: 3,
    title: "Sustainability Associate",
    issuer: "Dassault Systèmes, 2023",
    description: "Certification in sustainability-driven engineering practices.",
    image: "certifications/sustainability.png",
    tags: ["Sustainability", "Engineering"],
    link: "https://www.certification-link.com/sustainability",
  },
];

const categories = ["all", "programming", "cad", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills & Certifications</span>
        </h2>

        {/* LANGUAGES + SOFT SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="font-semibold text-xl mb-4">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang, i) => (
                <li key={i} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="font-semibold text-xl mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS (like lectures/projects) */}
        <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
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
