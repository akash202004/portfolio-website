import BentoCard from "./BentoCard";

function IntroCard() {
  return (
    <BentoCard classes="col-span-3 flex items-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-cyan-600/10 opacity-60"></div>
      <div className="relative z-10 flex flex-col gap-4 md:px-8 md:py-8 px-4 py-6">
        <div className="space-y-2">
          <span className="block text-base text-gray-400 font-med">
            Hey, I&apos;m
          </span>
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight flex items-center gap-3 font-deb">
            Akash Laha
          </h1>
        </div>
        <p className="text-gray-500 text-sm font-med max-w-md leading-relaxed">
          Full-stack developer crafting modern web experiences with attention to
          detail and performance metrics.
        </p>
      </div>
    </BentoCard>
  );
}

export default IntroCard;
