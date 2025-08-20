import BentoCard from "./BentoCard";

interface SocialCardProps {
  Icon: React.ComponentType<{ size?: number }>;
  spanText: string;
  size?: number;
  type: string;
  "data-redirect"?: string;
}

const SocialCard = ({
  Icon,
  spanText,
  size = 20,
  type,
  ...props
}: SocialCardProps) => {
  const handleSocial = () => {
    switch (type) {
      case "resume":
        window.open(
          "https://drive.google.com/file/d/1S0Jn4LnECO2qSXtpX21junQJ_4gWDEvb/view",
          "_blank"
        );
        return;
      case "mail":
        window.open("mailto:akashlaha48@gmail.com", "_blank");
        return;
      case "linkedin":
        window.open(
          "https://www.linkedin.com/in/akash-laha-799427244/",
          "_blank"
        );
        return;
      case "github":
        window.open("https://github.com/akash202004", "_blank");
        return;
    }
  };
  return (
    <div onClick={handleSocial}>
      <BentoCard
        classes="h-full w-full aspect-square flex flex-col justify-center items-center group relative overflow-hidden cursor-pointer"
        {...props}
      >
        <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-3 group-hover:opacity-0">
          <Icon size={size} />
        </div>
        <span
          className="absolute left-0 right-0 top-1/2 translate-y-8 opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all duration-300 ease-in-out font-sb text-[#797978] text-center"
          style={{ fontSize: "10px" }}
        >
          {spanText}
        </span>
      </BentoCard>
    </div>
  );
};

export default SocialCard;
