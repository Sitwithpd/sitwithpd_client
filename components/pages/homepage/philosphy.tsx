"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Play } from "lucide-react";

// Extract YouTube video ID from URL
const extractYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
  );
  return match ? match[1] : null;
};

const YOUTUBE_URL = "https://youtu.be/9-KZWH3NzTY?feature=shared";
const VIDEO_ID = extractYouTubeId(YOUTUBE_URL);
export default function Philosphy() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <section className="border-[0.7px] border-[#EAECF0] bg-[#FEF4E4] rounded-[16px] flex flex-col gap-8 mt-20 py-10 lg:py-15 px-4 lg:px-10">
      <div>
        <h2 className="heading-2 text-center">
          The Philosophy Behind Sit With PD
        </h2>
        <div className="text-base text-[#664101] leading-6 space-y-7 lg:text-center mt-10">
          <p>
            Many of life's deepest answers are not found by searching farther,
            but by journeying inward — where clarity, purpose, and
            transformation begin.
          </p>
          <p>
            In a world that constantly encourages us to move faster, do more,
            and keep pushing forward, we create space to pause, reflect, and
            listen.
          </p>
          <p>
            We believe that clarity emerges from self-awareness, resilience is
            built through honest reflection, and purpose is discovered when we
            have the courage to sit with our experiences rather than run from
            them.
          </p>
          <p>
            Through Purpose, Direction, and Personal Discovery, we help
            individuals navigate life's challenges with greater understanding,
            intentionality, and confidence — because when you understand
            yourself better, you live better.
          </p>
        </div>
      </div>
      {/* video */}
      <div className="relative w-full bg-[#0a0a0a]">
        <div className="h-20 bg-black/20 lg:hidden" />

        <div className="w-full max-w-[1400px] mx-auto">
          <div className="relative w-full aspect-video rounded-[16px] overflow-hidden">
            {!isPlaying ? (
              // Lightweight thumbnail placeholder — loads instantly, no iframe overhead
              <button
                onClick={handlePlay}
                className="group relative w-full h-full cursor-pointer border-none bg-transparent p-0"
                aria-label="Play video about Sit-With-PD"
              >
                {/* YouTube thumbnail — lightweight img, no API script loaded */}
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="About Sit-With-PD video"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/30 transition-opacity duration-300 group-hover:from-black/60 group-hover:via-black/10" />

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-15 h-15 lg:w-24 lg:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-6 h-6 lg:w-10 lg:h-10 text-[#445b1c] fill-[#445b1c] ml-1" />
                  </div>
                </div>
              </button>
            ) : (
              // Full YouTube iframe — only loaded after user clicks play
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="About Sit-With-PD"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 aspect-video rounded-[10px] overflow-hidden w-full h-full border-0"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
