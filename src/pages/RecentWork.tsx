import WholeProject from "../components/WholeProject";
import { motion } from "framer-motion";

interface RecentWorkProps {
  setTab: (tab: "recentWork" | "home" | "blogs" | "experience") => void;
}

const RecentWork = ({ setTab }: RecentWorkProps) => {
   const projects = [
    {
      id: 1,
      title: "Involve",
      image: "/projects/involve.png",
      description:
        "Involve is a real-time smart service booking platform that lets users instantly book nearby workers with tracking, voice, and payments.",
      liveUrl: "https://youtu.be/jEGh97kYi0o?si=lP4dPY84rSYzvtXo",
      githubUrl: "https://github.com/akash202004/involve",
      technologies: [
        "Node.js",
        "Next.js",
        "WebSockets",
        "Redis",
        "Leaflet",
        "postgreSQL",
      ],
    },
    {
      id: 2,
      title: "Ai Content Catalst",
      image: "/projects/aicontent.png",
      description:
        "Creating AI-driven content with Next.js, TypeScript, Drizzle ORM, Clerk for authentication, and Stripe for payments offers a powerful, scalable, and secure solution for modern web applications.",
      githubUrl: "https://github.com/akash202004/ai-content-catalyst",
      liveUrl: "https://content-catalyst.vercel.app/",
      technologies: ["Next,js", "Drizzle ORM", "Typescript", "Clerk", "Stripe"],
    },
    {
      id: 3,
      title: "Edu Empower",
      image: "/projects/edu-empower.png",
      description:
        "Edu-Empower is an AI-driven crowdfunding and scholarship platform providing financial aid, donor matching, and mentorship.",
      githubUrl: "https://github.com/akash202004/edu-empower",
      liveUrl: "https://edu-empower-rho.vercel.app/",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Gemini",
        "Framer Motion",
      ],
    },
    {
      id: 4,
      title: "Tomato",
      subTitle: "",
      image: "/projects/tomato.png",
      description:
        "Welcome to Tomato, your go-to food ordering website built with the MERN stack! We offer seamless Stripe integration for secure payments. As an admin, you can easily add new dishes and track orders in real-time. Enjoy delicious meals with just a few clicks!",
      githubUrl: "https://github.com/akash202004/tomato-website-frontend",
      liveUrl: "https://youtu.be/UVjA_RZHbkg?si=IXuTmqfGiUtAy5KX",
      technologies: [
        "React",
        "JavaScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Stripe"
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
