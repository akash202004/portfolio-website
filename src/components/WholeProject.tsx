import Image from "next/image";
import { GithubIcon, WebLinkIcon } from "./icons/SocialIcons";

interface WholeProjectProps {
  title: string;
  image: string;
  subTitle?: string;
  description?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
}

const WholeProject = ({
  title,
  image,
  subTitle,
  description,
  githubUrl,
  liveUrl,
  technologies = [],
}: WholeProjectProps) => {
  return (
    <div className="w-full bg-[#1c1c1d] rounded-2xl border-[2px] border-[#303030] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side - Image */}
        <div className="aspect-video md:aspect-auto relative min-h-[230px]">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right side - Project Details */}
        <div className="p-6 flex flex-col justify-center space-y-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-deb text-white">
              {title} {subTitle && <p className="text-gray-400">{subTitle}</p>}
            </h2>
            <div className="flex gap-3">
              {githubUrl && (
                <button
                  onClick={() => window.open(githubUrl, "_blank")}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <GithubIcon size={22} />
                </button>
              )}
              {liveUrl && (
                <button
                  onClick={() => window.open(liveUrl, "_blank")}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <WebLinkIcon size={22} />
                </button>
              )}
            </div>
          </div>

          {description && (
            <p className="text-gray-300 font-reg text-sm leading-relaxed">
              {description}
            </p>
          )}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded-full font-med"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WholeProject;
