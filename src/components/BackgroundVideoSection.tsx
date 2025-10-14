import { useRef } from "react";
import videoSrc from "@/assets/backgroundVideo.mp4";

const BackgroundVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section aria-label="Background video highlight" className="relative bg-background">
      <div className="container mx-auto px-4 -mt-10 md:-mt-14">
        <article className="relative group rounded-3xl overflow-hidden shadow-professional">
          {/* Video as background */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
            onMouseEnter={() => videoRef.current?.focus()}
            className="absolute inset-0 w-full h-[52vh] md:h-[60vh] object-cover transition-transform duration-700 ease-out group-hover:scale-105 focus:scale-105"
            aria-label="Company operations and sustainability showcase"
          />

          {/* Subtle gradient/blur overlay that eases on hover ("focus" effect) */}
          <div className="relative h-[52vh] md:h-[60vh]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/25 to-transparent transition-all duration-500 group-hover:from-background/40 group-hover:via-background/10" />

            {/* Caption content */}
            <div className="absolute inset-x-0 bottom-0 md:bottom-6">
              <div className="px-6 md:px-10 pb-6">
                <div className="inline-flex flex-col gap-2 bg-background/40 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-6 md:py-4">
                  <span className="text-sm md:text-base text-muted-foreground">Quantum Green Energy</span>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground">Powering the Clean Energy Revolution</h2>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
