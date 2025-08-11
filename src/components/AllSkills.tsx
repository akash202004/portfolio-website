import { AWSIcon, JavaIcon, WebsocketIcon } from "./icons/SocialIcons";
import Skill from "./Skill";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiExpress,
  SiLangchain,
} from "react-icons/si";

const AllSkills = () => {
  const allSkills = [
    { icon: <SiTypescript color="#3178C6" />, text: "TypeScript" },
    { icon: <SiJavascript color="#F7DF1E" />, text: "JavaScript" },
    { icon: <JavaIcon />, text: "Java" },
    { icon: <SiReact color="#61DAFB" />, text: "React" },
    { icon: <SiNextdotjs color="#000000" />, text: "Next.js" },
    { icon: <SiTailwindcss color="#06B6D4" />, text: "Tailwind CSS" },
    { icon: <SiNodedotjs color="#339933" />, text: "Node.js" },
    { icon: <SiExpress color="#000000" />, text: "Express.js" },
    { icon: <SiMongodb color="#47A248" />, text: "MongoDB" },
    { icon: <SiPostgresql color="#336791" />, text: "PostgreSQL" },
    { icon: <SiGit color="#F05032" />, text: "Git" },
    { icon: <SiDocker color="#2496ED" />, text: "Docker" },
    { icon: <AWSIcon />, text: "AWS" },
    { icon: <WebsocketIcon />, text: "Web Sockets" },
    { icon: <SiLangchain />, text: "Langchain" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {allSkills.map((skill, index) => (
        <Skill key={index} icon={skill.icon} text={skill.text} />
      ))}
    </div>
  );
};

export default AllSkills;
