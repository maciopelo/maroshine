"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroImage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .from(
        paragraphRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="hero-image h-screen md:bg-fixed bg-center md:bg-cover flex items-center justify-center text-white bg-blend-overlay bg-black/50">
      <div className="flex flex-col w-full justify-start p-4 md:p-10">
        <h1
          ref={titleRef}
          className="flex flex-col text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 sm:mb-4"
        >
          Mobilna kosmetyka
          <span ref={subtitleRef}>
            samochodów
            <span className="text-xs sm:text-sm md:text-lg font-extralight">
              i nie tylko
            </span>
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-2xl max-w-xl text-yellow-400 font-bold"
        >
          Ekologiczne sprzątanie pod Twoim domem
        </p>
      </div>
    </section>
  );
};

export default HeroImage;
