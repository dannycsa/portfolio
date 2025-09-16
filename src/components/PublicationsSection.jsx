import { ExternalLink } from "lucide-react";

const publications = [
  {
    id: 1,
    title:
      "Non-Pneumatic Wheel design performance for Human Powered Vehicles. Case: NASA HERC",
    authorRole: "1st Author",
    conference:
      "23rd LACCEI International Multi-Conference for Engineering, Education and Technology · Jul 2025",
    description:
      "Presented the design, fabrication, and performance evaluation of 3D-printed non-pneumatic wheels for human-powered vehicles. Focused on NASA HERC mission-oriented terrain challenges.",
    image: "publications/design.png",
    tags: ["3D Printing", "Non-Pneumatic Wheels", "NASA HERC"],
    link: "https://www.researchgate.net/publication/394894775_Non-Pneumatic_Wheel_design_performance_for_Human_Powered_Vehicles_Case_NASA_HERC",
  },
  {
    id: 2,
    title:
      "Additive Manufacturing for Tire Treads Design for Outer Space Challenging Terrains. Case: NASA HERC",
    authorRole: "2nd Author",
    conference:
      "Casablanca International Conference on Additive Manufacturing (CASICAM) · Apr 2025",
    description:
      "Explored tread pattern optimization and additive manufacturing techniques for extraterrestrial rover wheels in NASA’s Human Exploration Rover Challenge (HERC).",
    image: "publications/am_paper.png",
    tags: ["Additive Manufacturing", "Aerospace", "Robotics"],
    publicationPending: true, // not indexed yet
  },
  {
    id: 3,
    title:
      "STEM Program Management and Outreach in Different Locations of a Country. Case: Bolivian NASA HERC STEM Activities",
    authorRole: "4th Author",
    conference:
      "IEEE Integrated STEM Education Conference (ISEC) · Mar 2025",
    description:
      "Analyzed STEM outreach strategies and program management of Bolivia’s NASA HERC initiatives, showcasing inclusive approaches across diverse regions.",
    image: "publications/stem.png",
    tags: ["STEM", "Education", "Outreach"],
    link: "https://www.researchgate.net/publication/395363821_STEM_program_management_and_outreach_in_different_locations_of_a_country_Case_Bolivian_NASA_HERC_STEM_activities",
  },
];

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Academic <span className="text-primary">Publications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Peer-reviewed works presented at international conferences, bridging
          robotics, additive manufacturing, and STEM education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {pub.image ? (
                  <img
                    src={pub.image}
                    alt={pub.title}
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
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                <p className="text-sm font-medium text-primary mb-1">
                  {pub.authorRole}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {pub.conference}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {pub.description}
                </p>

                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Publication <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                ) : pub.publicationPending ? (
                  <p className="text-xs font-medium text-muted-foreground italic">
                    Publication pending
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
