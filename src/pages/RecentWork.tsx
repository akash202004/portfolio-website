import WholeProject from "../components/WholeProject";
import { motion } from "framer-motion";

interface RecentWorkProps {
  setTab: (tab: "recentWork" | "home" | "blogs" | "experience") => void;
}

const RecentWork = ({ setTab }: RecentWorkProps) => {
  const projects = [
    {
      id: 1,
      title: "Apple Music Clone",
      image: "/projects/appleMusic.png",
      description:
        "A fully functional Web based music Player, inspired by Apple Music. Features include music streaming, Time synced Lyrics and seek through music",
      githubUrl: "",
      liveUrl: "https://stream.canum.xyz",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AWS EC2",
        "Express.js",
      ],
    },
    {
      id: 2,
      title: "Calendar Pentomino",
      image: "/projects/calendarPentomino.png",
      description:
        "A Calendar Styled Pentomino Solver engine, coded in Java which uses Recursive Backtracking algorithm.",
      githubUrl: "https://github.com/vishalpokuri/pentoMino-frontend",
      liveUrl: "https://calendar-pentomino.vercel.app/",
      technologies: ["React", "Java", "Typescript", "TailwindCSS"],
    },
    {
      id: 4,
      title: "Zerobug",
      subTitle: "(In Progress)",
      image: "/projects/zerobug.png",
      description:
        "An alternative to Postman/Swagger API. Visualize, test and debug your endpoints, with Live frontend state mirroring. Create and test your flow chains with AI. ",
      githubUrl: "",
      liveUrl: "https://www.zerobug.tech",
      technologies: [
        "React",
        "Typescript",
        "CLI",
        "Web Sockets",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      id: 3,
      title: "Solcade",
      image: "/projects/solcade.png",
      description:
        "A decentralized arcade gaming platform built on Solana blockchain. Play classic games while earning cryptocurrency rewards.",
      githubUrl: "",
      liveUrl: "https://sol-cade.vercel.app",
      technologies: [
        "Next.js",
        "Typescript",
        "Solana Web3.js",
        "MongoDB",
        "Anchor",
        "Express",
      ],
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
          <h1 className="text-3xl font-deb text-white">Recent Works</h1>
          <button
            onClick={() => setTab("home")}
            className="flex items-center gap-2 px-4 py-2 border border-[#aaaaaa] rounded-lg text-[#aaaaaa] hover:text-white hover:border-[#404040] transition-all duration-200 font-deb text-sm tracking-[0.2em]"
          >
            ← BACK
          </button>
        </div>
        <p className="text-gray-400 font-reg">
          A collection of my latest projects and experiments
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <WholeProject
            subTitle={project.subTitle}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RecentWork;
