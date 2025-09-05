import { Cpu, Beaker, Eye, Box } from "lucide-react"; // CPU for computer vision

export const AboutSection = () => {
const handleNavClick = (href) => {
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, 100);
};

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Mechatronics Engineer & Researcher
            </h3>

            <p className="text-muted-foreground">
              Mechatronics engineer with hands-on experience in mechanical design, robotics, and applied research. 
              Led and contributed to national and academic projects, including Bolivia’s first CubeSat selected by UNOOSA and neural network-based trajectory prediction for satellite and NASA Astrobee missions.
            </p>

            <p className="text-muted-foreground">
              Authored and presented peer-reviewed papers on additive manufacturing and STEM outreach. Experienced in CAD, prototyping, system simulation, and technical documentation, with SolidWorks certifications (CSWA, additive manufacturing, sustainability). 
              Seeking opportunities to contribute to interdisciplinary projects in robotics, AI, and intelligent systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={() => handleNavClick("#contact")}
                className="cosmic-button"
              >
                Get In Touch
              </button>

              <a
                href="CV_DanielCallata.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Robotics & AI */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Robotics & AI</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent systems, autonomous robotics, and AI solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Vision</h4>
                  <p className="text-muted-foreground">
                    Implementing visual recognition, object detection, and image analysis in robotics, AI, and biotech applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Additive Manufacturing */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Additive Manufacturing</h4>
                  <p className="text-muted-foreground">
                    Prototyping, CAD design, and sustainable manufacturing with advanced 3D printing techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
