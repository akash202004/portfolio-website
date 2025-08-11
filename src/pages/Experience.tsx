import ExperienceCard from "../components/ExperienceCard";
import CareerTimeline from "../components/CareerTimeline";
import { motion } from "framer-motion";

interface ExperienceProps {
  setTab: (tab: "recentWork" | "home" | "blogs" | "experience") => void;
}

const Experience = ({ setTab }: ExperienceProps) => {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "InsightAI",
      duration: "July 2025 - Present",
      employmentType: "Internship",
      companyUrl: "https://insightai.pro",
      description:
        "Built a Next.js/TypeScript marketing site and a secure, responsive dashboard for enterprise LLM querying and user management. Focused on performance, accessibility, and RBAC using Tailwind and Framer Motion.",
    },
    {
      position: "Frontend Developer Intern",
      company: "Pixelcraft",
      duration: "June 2025",
      employmentType: "Internship",
      companyUrl: "https://pixelcraft.com",
      description:
        "Developed a banking dashboard within a game UI, improving data visualization and user experience. Enhanced performance and refactored UI from Figma, reducing load times by 25%.",
    },
  ];

  const pageVariants = {
    hidden: { filter: "blur(10px)", transform: "translateY(10%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  const pageTransition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      transition={pageTransition}
      className="space-y-6"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-deb text-white">Experience</h1>
          <button
            onClick={() => setTab("home")}
            className="flex items-center gap-2 px-4 py-2 border border-[#aaaaaa] rounded-lg text-[#aaaaaa] hover:text-white hover:border-[#404040] transition-all duration-200 font-deb text-sm tracking-[0.2em]"
          >
            ← BACK
          </button>
        </div>
        <p className="text-gray-400 font-reg">
          My professional journey and key contributions
        </p>
      </div>

      {/* Interactive Career Timeline */}
      <div className="mb-8 p-6 bg-[#2a2a2a] rounded-2xl">
        <h3 className="text-lg font-deb text-white mb-6">Career Timeline</h3>
        <CareerTimeline experiences={experiences} />
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            position={experience.position}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
            companyUrl={experience.companyUrl}
            employmentType={experience.employmentType}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
