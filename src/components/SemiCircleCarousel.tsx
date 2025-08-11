import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
}

interface SemiCircleCarouselProps {
  projects: Project[];
  autoRotateInterval?: number;
}

const SemiCircleCarousel = ({
  projects,
  autoRotateInterval = 3000,
}: SemiCircleCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, autoRotateInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoRotateInterval]);

  const radius = 200; // px
  const totalItems = projects.length;
  const projectWidth = 240; // Actual project component width

  return (
    <div className="relative w-full h-[200px] mx-auto overflow-hidden">
      <div className="relative w-full h-full">
        {projects.map((project, i) => {
          // Calculate relative position from current focused item
          const relativeIndex = (i - currentIndex + totalItems) % totalItems;

          // Distribute items evenly around the full circle (360°)
          const angle = (relativeIndex * 360) / totalItems;

          // Calculate opacity based on position in arc (fade out bottom half)
          let opacity = 1;
          if (angle > 180 && angle < 360) {
            // Bottom half - gradually fade out
            const fadeAngle = angle > 270 ? 360 - angle : angle - 180;
            opacity = Math.max(0.1, 1 - fadeAngle / 90);
          }

          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          const isFocused = angle === 90;
          const verticalOffset = 0.15 * radius; // 15% of radius

          return (
            <div
              key={project.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                left: `calc(50% + ${x}px - ${projectWidth / 2}px)`,
                top: `${radius - y + verticalOffset}px`,
                transform: isFocused ? "scale(1.1)" : "scale(0.9)",
                opacity: opacity,
                zIndex: isFocused ? 10 : 1,
              }}
            >
              <Project imgURL={project.image} title={project.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SemiCircleCarousel;

function Project({ imgURL, title }: { imgURL: string; title: string }) {
  return (
    <div className="w-[240px] aspect-[16/9] bg-white border-2 border-[#303030] rounded-xl overflow-hidden shadow-md relative">
      <Image
        src={imgURL}
        alt={title}
        className="w-full h-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 240px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <h3 className="text-white text-sm font-semibold drop-shadow-lg text-start">
          {title}
        </h3>
      </div>
    </div>
  );
}
