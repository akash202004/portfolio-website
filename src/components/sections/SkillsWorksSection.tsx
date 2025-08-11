import AllSkills from "../AllSkills";
import BentoCard from "../cards/BentoCard";
import RedirectButton from "../RedirectButton";
import SemiCircleCarousel from "../SemiCircleCarousel";
import { useRouter } from "next/navigation";

export interface Project {
  id: number;
  title: string;
  image: string;
}

interface SkillsWorksSectionProps {
  projects: Project[];
}

const SkillsWorksSection = ({ projects }: SkillsWorksSectionProps) => {
  const router = useRouter();
  return (
    <div className="h-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2">
      <BentoCard
        classes="col-span-2 p-6 font-med"
        data-redirect="true"
        data-cursor-scale="true"
        onClick={() => router.push("/recent-work")}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-deb text-white">Recent works</p>
          <RedirectButton size={16} />
        </div>
        <SemiCircleCarousel projects={projects} autoRotateInterval={3000} />
      </BentoCard>
      <BentoCard classes="col-span-2 p-6 font-med mb-4 md:mb-0">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-deb text-white">Skills</p>
        </div>
        <AllSkills />
      </BentoCard>
    </div>
  );
};

export default SkillsWorksSection;
