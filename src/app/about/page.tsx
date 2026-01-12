"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutScrollSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2]
  );

  const images = [
    "/images/poster1.jpeg",
    "/images/poster2.jpeg",
    "/images/poster3.jpeg",
  ];

  return (
    <section ref={sectionRef} className="relative w-full ">

      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden lg:block h-[100vh] ">
        <div className="sticky top-0 h-screen container mx-auto px-10 flex items-center gap-24">

          {/* LEFT CONTENT */}
          <div className="w-1/2">
            <span className="uppercase tracking-[0.25em] text-sm text-primary/70">
              About Us
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight
              bg-gradient-to-r from-primary via-accent to-primary
              bg-clip-text text-transparent">
              Driven by Quality. <br />
              Built Across Every Digital Field.
            </h2>

            <p className="mt-10 text-xl text-white leading-relaxed max-w-xl">
              We are SutraIQ — a full-service digital solutions company crafting
              high-quality products across web, mobile, AI/ML, automation, and
              emerging technologies.
              <br /><br />
              From visually powerful websites to intelligent systems and scalable
              applications, every project is engineered with performance, clean
              architecture, and long-term impact in mind.
              <br /><br />
              We partner with brands across industries that value precision,
              clarity, and future-ready digital experiences.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 relative flex items-center justify-center">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center"
                style={{
                  opacity: useTransform(
                    imageIndex,
                    (v) => (Math.round(v) === i ? 1 : 0)
                  ),
                  scale: useTransform(
                    imageIndex,
                    (v) => (Math.round(v) === i ? 1 : 0.96)
                  ),
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* GOLDEN GLOW SHADOW */}
                <div className="absolute bottom-[-45px] w-[380px] h-[90px] bg-[#d4af37]/45 blur-[70px] rounded-full" />

                {/* IMAGE CARD */}
                <div className="relative w-[480px] h-[600px] rounded-[30px] overflow-hidden z-10">
                  <Image
                    src={img}
                    alt={`About ${i}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />

                  {/* GOLD BORDER */}
                  <div className="absolute inset-0 rounded-[30px] border border-[#d4af37]/60 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE VERSION ================= */}
      <section className="lg:hidden py-20 px-5">
      {/* TITLE */}
      <div className="mb-10">
        <span className="uppercase tracking-widest text-sm text-primary/70">
          Who We Are
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight
              bg-gradient-to-r from-primary via-accent to-primary
              bg-clip-text text-transparent">
          Driven by Quality. <br />
          Built Across Every Digital Field.
        </h2>
      </div>

      {/* SWIPE IMAGES */}
      <motion.div
        className="flex gap-6 overflow-x-auto no-scrollbar pb-6"
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.97 }}
            className="relative min-w-[85%] h-[460px] rounded-[30px] overflow-hidden"
          >
            {/* GOLD GLOW */}
            <div className="absolute inset-0 rounded-[30px] shadow-[0_30px_80px_rgba(212,175,55,0.35)] z-0" />

            {/* GOLD BORDER */}
            <div className="absolute inset-0 rounded-[30px] border border-[#d4af37]/60 z-10 pointer-events-none" />

            <Image
              src={img}
              alt={`About image ${i + 1}`}
              fill
              className="object-fit"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* TEXT */}
      <p className="mt-10 text-lg text-white-foreground leading-relaxed">
        We are SutraIQ — a full-service digital solutions company crafting
        high-quality products across web, mobile, AI/ML, automation, and
        emerging technologies.
        <br /><br />
        From visually powerful websites to intelligent systems and scalable
        applications, we focus on performance, clean architecture, and
        long-term impact.
        <br /><br />
        We partner with brands across industries that value quality,
        clarity, and future-ready digital experiences.
      </p>
    </section>

    </section>
  );
}
