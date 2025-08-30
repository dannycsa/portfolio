import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Publications", "Lectures", "Contact"];

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-[#205054] text-white shadow z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Daniel Callata</h1>
          <nav>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            <ul className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"}`}>
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-gray-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center"
      >
        <motion.h2
          className="text-4xl font-bold text-[#205054]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Alvaro Daniel Callata Suxo
        </motion.h2>
        <p className="mt-4 text-lg max-w-2xl">
          R&D-Focused Mechatronics Engineer — Robotics, CAD & BioTech
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="mailto:dannycallata@gmail.com"
            className="px-4 py-2 bg-[#205054] text-white rounded-xl shadow hover:bg-[#163a3d]"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-callata"
            className="px-4 py-2 border border-[#205054] text-[#205054] rounded-xl hover:bg-[#205054] hover:text-white"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#205054] mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Mechatronics engineer with hands-on experience in mechanical design,
          robotics, and applied research. Led and contributed to national and
          academic projects, including Bolivia’s first CubeSat selected by
          UNOOSA and neural network-based trajectory prediction for satellite and
          Astrobee missions. Authored and presented peer-reviewed papers on
          additive manufacturing and STEM outreach. Seeking opportunities to
          contribute to interdisciplinary projects in robotics, AI, and
          intelligent systems.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Education</h3>
        <ul className="list-disc ml-6">
          <li>
            <b>UMSA</b> – B.Sc. in Biology (in progress, 2025 – Present)
          </li>
          <li>
            <b>Universidad Católica Boliviana “San Pablo”</b> – B.Eng.
            Mechatronics Engineering (Magna Cum Laude, 2019 – 2024)
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#205054] mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Lichens Computer Vision Bioindicator",
              desc: "Detecting and classifying lichen color variations as air-quality bioindicators using Python, OpenCV, and Machine Learning.",
            },
            {
              title: "Point Optimization in NASA HERC",
              desc: "Path-planning and linear programming algorithms to maximize points in rover challenge tasks.",
            },
            {
              title: "1U CubeSat Development",
              desc: "Neural network trajectory predictor for Astrobee, integrated with ROS and deployed in stratospheric balloon missions.",
            },
            {
              title: "Robotic Chess System with KUKA Arm",
              desc: "Autonomous robotic chess system integrating ROS-based control and custom PCB chessboard.",
            },
            {
              title: "ABS Post-Processing System",
              desc: "IoT-enabled ABS printing enclosure and acetone vapor chamber for improved surface finishing.",
            },
            {
              title: "NASA HERC 2024",
              desc: "Mechanical design and fabrication of rover tools, contributing to the ‘Most Improved Performance’ award.",
            },
          ].map((proj) => (
            <div key={proj.title} className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-[#205054]">
                {proj.title}
              </h3>
              <p className="mt-2 text-gray-700">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#205054] mb-6">Publications</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Mechanical Design and Testing of 3D-Printed Non-Pneumatic Wheels for
            Human-Powered Vehicles – LACCEI 2025
          </li>
          <li>
            Additive Manufacturing for Tire Treads Design for Outer Space –
            CASICAM 2025
          </li>
          <li>
            STEM Program Management and Outreach in Different Locations – IEEE
            ISEC 2025
          </li>
        </ul>
      </section>

      {/* Lectures Section */}
      <section id="lectures" className="py-20 bg-gray-50 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#205054] mb-6">Lectures & Outreach</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Casablanca International Conference on Additive Manufacturing – 2024
          </li>
          <li>
            LACCEI Conference – 2025
          </li>
          <li>KUKA Robotic Arm Workshop – 2024</li>
          <li>
            STEM Outreach (Gira STEM, Bolivia – reached 7,000+ participants)
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white container mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#205054] mb-6">Contact</h2>
        <p>
          Email: <a href="mailto:dannycallata@gmail.com">dannycallata@gmail.com</a>
        </p>
        <p>Phone: +591 78839403</p>
        <p>
          LinkedIn: {" "}
          <a
            href="https://www.linkedin.com/in/daniel-callata"
            target="_blank"
            className="text-[#205054] underline"
          >
            /in/daniel-callata
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#205054] text-white text-center">
        <p>© 2025 Daniel Callata. All rights reserved.</p>
      </footer>
    </div>
  );
}
