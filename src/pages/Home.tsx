import HeroSection from "../components/sections/HeroSection";
import LocationExperienceBlogsSection from "../components/sections/LocationExperienceBlogsSection";
import SkillsWorksSection from "../components/sections/SkillsWorksSection";
import { PROJECTS } from "../data/projects";
import { motion } from "framer-motion";

function Home() {
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
      className="md:space-y-4"
    >
      {/* Row 1 */}
      <HeroSection />
      {/* Row 2 */}
      <SkillsWorksSection projects={PROJECTS} />
      {/* Row 3 */}
      <LocationExperienceBlogsSection />
    </motion.div>
  );
}

export default Home;
