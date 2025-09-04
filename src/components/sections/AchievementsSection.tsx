"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { FaArrowRight, FaTrophy, FaEye } from "react-icons/fa";

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
  const { achievements } = section;

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg and above
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm and below
    }
    return 3; // default for SSR
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cards per view on resize
  useState(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setCardsPerView(getCardsPerView());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  const totalSlides = Math.max(0, achievements.length - cardsPerView + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleAchievements = achievements.slice(
    currentIndex,
    currentIndex + cardsPerView,
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
            <FaTrophy className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-sm sm:text-base lg:text-lg">
              Our Success
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            {section.title}
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
          {section.subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white hover:bg-primary hover:text-white border-2 border-primary shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous achievements"
              >
                <CgChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white hover:bg-primary hover:text-white border-2 border-primary shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next achievements"
              >
                <CgChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Achievement Cards Grid */}
          <div className="px-2 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {visibleAchievements.map((achievement, index) => (
                <article
                  key={achievement._key}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-muted hover:-translate-y-2"
                >
                  {/* Image Container - Updated with object-cover */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    {achievement.image && (
                      <Image
                        src={urlFor(achievement.image)
                          .width(600)
                          .height(400)
                          .url()}
                        alt={achievement.description}
                        fill
                        style={{ objectFit: "cover" }}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <FaEye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed text-center group-hover:text-primary transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          {section.viewAllLink ? (
            <Link
              href={section.viewAllLink}
              className="inline-flex items-center gap-3 bg-primary hover:bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View All Achievements</span>
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          ) : (
            <button className="inline-flex items-center gap-3 bg-primary hover:bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span>View All Achievements</span>
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
