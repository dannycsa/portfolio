import { useState } from "react";
import { cn } from "@/lib/utils";

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

const categories = ["all", "programming", "cad", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills & Certifications</span>
        </h2>

        {/* Languages */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="px-5 py-2 rounded-full bg-secondary/70 text-foreground font-medium"
            >
              {lang.name} ({lang.level})
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full bg-secondary/50 text-foreground text-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Category filter */}
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

        {/* Skills progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};
