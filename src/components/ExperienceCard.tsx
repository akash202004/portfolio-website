import { motion } from "framer-motion";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
  companyUrl?: string;
  employmentType?: string; // Full-time, Part-time, Contract, Internship
  isCurrentJob?: boolean;
}

const ExperienceCard = ({
  position,
  company,
  duration,
  description,
  companyUrl,
  employmentType,
  isCurrentJob = false,
}: ExperienceCardProps) => {
  const handleCompanyClick = () => {
    if (companyUrl) {
      window.open(companyUrl, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#1c1c1d] rounded-2xl border-[2px] border-[#303030] p-4 md:p-6 hover:border-[#404040] transition-all duration-300 group"
    >
      {/* Mobile Layout: Stacked Rows */}
      <div className="block md:hidden space-y-1">
        {/* Row 1: Job Role | Tag */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-deb text-white group-hover:text-gray-100 transition-colors">
            {position}
          </h2>
          <div className="flex items-center gap-2">
            {isCurrentJob && (
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-med border border-green-500/30">
                Current
              </span>
            )}
            {employmentType && (
              <span className="px-2 py-1 bg-[#2a2a2a] text-gray-400 text-xs rounded-full font-med">
                {employmentType}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Company Name | Duration */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleCompanyClick}
            className={`text-base font-sb transition-colors ${
              companyUrl
                ? "text-blue-400 hover:text-blue-300 cursor-pointer"
                : "text-gray-300"
            }`}
          >
            {company}
          </button>
          <span className="text-sm text-gray-400 font-reg">{duration}</span>
        </div>
      </div>

      {/* Desktop Layout: Original Design */}
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex justify-between w-full items-center">
                <h2 className="text-xl font-deb text-white group-hover:text-gray-100 transition-colors">
                  {position}
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-400 font-reg">
                  <span>{duration}</span>
                </div>
              </div>
              {isCurrentJob && (
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-med border border-green-500/30">
                  Current
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <button
                onClick={handleCompanyClick}
                className={`text-lg font-sb transition-colors ${
                  companyUrl
                    ? "text-blue-400 hover:text-blue-300 cursor-pointer"
                    : "text-gray-300"
                }`}
              >
                {company}
              </button>
              {employmentType && (
                <span className="px-3 py-1 bg-[#2a2a2a] text-gray-400 text-xs rounded-full font-med">
                  {employmentType}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {/* Description */}
        <p className="text-gray-300 font-reg text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
