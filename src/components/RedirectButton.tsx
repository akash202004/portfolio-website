import { TopRightArrowIcon } from "./icons/SocialIcons";

interface RedirectButtonProps {
  onClick?: () => void;
  size?: number;
  className?: string;
}

function RedirectButton({
  onClick,
  size = 16,
  className = "",
}: RedirectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center p-2 rounded-full  transition-all border border-[#303030] duration-200  active:scale-95 ${className}`}
    >
      <TopRightArrowIcon size={size} />
    </button>
  );
}

export default RedirectButton;
