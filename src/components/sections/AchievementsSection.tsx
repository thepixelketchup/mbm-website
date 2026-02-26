"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/lib/sanity.client";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Eye } from "lucide-react";

interface Achievement {
  _key: string;
  image: any;
  description: string;
}

interface AchievementsSectionProps {
  section: {
    title: string;
    subtitle?: string;
    achievements: Achievement[];
    viewAllLink?: string;
  };
}

export default function AchievementsSection({
  section,
}: AchievementsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const { achievements } = section;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(0, achievements?.length - cardsPerView + 1);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const visibleAchievements = achievements?.slice(
    currentIndex,
    currentIndex + cardsPerView,
  ) || [];

  if (!achievements?.length) return null;

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Soft decorative background elements */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Trophy className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide uppercase">
              Hall of Fame
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            {section.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />

          {section.subtitle && (
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {section.subtitle}
            </p>
          )}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="hidden sm:block">
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white text-foreground hover:bg-primary hover:text-white border border-gray-200 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 transform -translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white text-foreground hover:bg-primary hover:text-white border border-gray-200 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 transform translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Achievement Cards Grid */}
          <div className="overflow-hidden px-2 py-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {visibleAchievements.map((achievement, index) => (
                  <motion.article
                    key={achievement._key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-50">
                      {achievement.image ? (
                        <Image
                          src={urlFor(achievement.image).width(800).height(600).url()}
                          alt={achievement.description || "Achievement"}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-100">
                          <Trophy className="w-16 h-16 opacity-50" />
                        </div>
                      )}

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 text-white">
                          <Eye className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                      <p className="text-lg text-foreground/80 leading-relaxed font-medium line-clamp-4">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Decorative bottom line */}
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-3 mt-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-primary/50 w-2"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        {section.viewAllLink && (
          <div className="text-center mt-16">
            <Link
              href={section.viewAllLink}
              className="inline-flex items-center gap-2 group border border-primary/20 bg-primary/5 hover:bg-primary text-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
