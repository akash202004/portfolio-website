import IntroCard from "../cards/IntroCard";
import SocialCard from "../cards/SocialCard";
import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons/SocialIcons";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-50 grid grid-cols-1 md:grid-cols-4 md:gap-2">
      <IntroCard />
      <div
        className="hidden md:grid md:grid-cols-2 md:grid-rows-2 gap-2 h-full w-full min-h-48 md:min-h-full"
        data-redirect="true"
      >
        <SocialCard
          Icon={TwitterIcon}
          spanText="akash_202004"
          size={24}
          type="twitter"
        />
        <SocialCard
          Icon={GithubIcon}
          spanText="akash202004"
          size={24}
          type="github"
        />
        <SocialCard
          Icon={LinkedinIcon}
          spanText="akash-laha-799427244"
          size={24}
          type="linkedin"
        />
        <SocialCard
          Icon={DiscordIcon}
          spanText="akashlaha48"
          size={24}
          type="mail"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 my-4 md:hidden" data-redirect="true">
        <SocialCard
          Icon={TwitterIcon}
          spanText="akash_202004"
          size={24}
          type="twitter"
        />
        <SocialCard
          Icon={GithubIcon}
          spanText="akash202004"
          size={24}
          type="github"
        />
        <SocialCard
          Icon={LinkedinIcon}
          spanText="akash-laha-799427244"
          size={24}
          type="linkedin"
        />
        <SocialCard
          Icon={DiscordIcon}
          spanText="akashlaha48"
          size={24}
          type="mail"
        />
      </div>
    </div>
  );
};

export default HeroSection;
