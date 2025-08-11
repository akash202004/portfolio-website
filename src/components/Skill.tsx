import React from "react";

interface SkillProps {
  icon: React.ReactNode;
  text: string;
}

const Skill = ({ icon, text }: SkillProps) => {
  return (
    <div
      className="
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        text-white font-med text-sm justify-center
        transition-all duration-200 ease-in-out
        hover:scale-105 cursor-pointer select-none
      "
      style={{
        background: "#2a2a2a",
      }}
    >
      <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
        {icon}
      </span>
      <span className="text-xs leading-0">{text}</span>
    </div>
  );
};

export default Skill;
