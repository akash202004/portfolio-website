import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  classes: string;
  hoverable?: boolean;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
  "data-redirect"?: string;
}

function BentoCard({
  children,
  classes,
  hoverable = false,
  onClick,
  padding = "md",
  ...props
}: BentoCardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`${classes} bg-[#1c1c1d] rounded-2xl border-[2px] border-[#303030] transition-all duration-300 select-none ${
        hoverable
          ? "hover:bg-[#232324] hover:border-[#404040] hover:scale-[1.02] cursor-pointer"
          : ""
      } ${paddingClasses[padding]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export default BentoCard;
