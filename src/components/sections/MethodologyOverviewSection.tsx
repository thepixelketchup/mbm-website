"use client";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaClipboardCheck,
  FaHeart,
  FaArrowRight,
  FaGraduationCap,
  FaBook,
  FaBrain,
  FaUsers,
  FaRocket,
  FaEye,
} from "react-icons/fa";
import Link from "next/link";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface MethodologyCard {
  _key: string;
  title: string;
  description: string;
  iconName?: string;
  color?: string;
  link: string;
}

interface MethodologyOverviewSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: string;
    introContent?: any[];
    methodologyCards: MethodologyCard[];
  };
}

export default function MethodologyOverviewSection({
  section,
}: MethodologyOverviewSectionProps) {
  if (!section) return null;

  const getIcon = (iconDescription?: string) => {
    // Simple mapping based on common words in the description
    const iconName = iconDescription?.toLowerCase() || "";
    if (iconName.includes("teacher") || iconName.includes("teaching")) {
      return (
        <FaChalkboardTeacher className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (
      iconName.includes("lightbulb") ||
      iconName.includes("idea") ||
      iconName.includes("philosophy")
    ) {
      return (
        <FaLightbulb className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (
      iconName.includes("clipboard") ||
      iconName.includes("assessment") ||
      iconName.includes("check")
    ) {
      return (
        <FaClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (
      iconName.includes("heart") ||
      iconName.includes("values") ||
      iconName.includes("culture")
    ) {
      return (
        <FaHeart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (iconName.includes("book") || iconName.includes("learning")) {
      return (
        <FaBook className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (iconName.includes("brain") || iconName.includes("thinking")) {
      return (
        <FaBrain className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    if (iconName.includes("users") || iconName.includes("students")) {
      return (
        <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      );
    }
    // Default icon
    return (
      <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
    );
  };

  const getColorClasses = (color?: string, index?: number) => {
    // Use your color scheme instead of gradients
    const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-primary"];

    // If a specific color is provided, try to map it
    if (color) {
      const colorMap = {
        blue: "bg-primary",
        green: "bg-secondary",
        purple: "bg-accent",
        orange: "bg-secondary",
        red: "bg-accent",
      };
      return colorMap[color as keyof typeof colorMap] || "bg-primary";
    }

    // Otherwise cycle through colors based on index
    return colors[index! % colors.length];
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
    >
      {/* Main Methodology Cards Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base lg:text-lg">
                Our Approach
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Methodology Pillars
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive approaches that define our educational excellence
              and student success
            </p>
          </div>

          {/* Methodology Cards Grid - Equal Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {section.methodologyCards.map((card, index) => (
              <div key={card._key} className="group h-full">
                <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 border border-muted h-full flex flex-col">
                  {/* Card Header */}
                  <div
                    className={`${getColorClasses(card.color, index)} p-6 sm:p-8 text-white text-center relative overflow-hidden flex-shrink-0`}
                  >
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-lg"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        {getIcon(card.iconName)}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content - Flexible height */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 flex-1">
                      {card.description}
                    </p>

                    {/* Learn More Link - Always at bottom */}
                    <div className="mt-auto">
                      <Link
                        href={card.link}
                        className={`inline-flex items-center gap-2 ${getColorClasses(card.color, index)} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <span>Learn More</span>
                        <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-primary overflow-hidden">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          {/* CTA Header */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base lg:text-lg">
                See It In Action
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Experience Our Methodology
            </h3>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-white/60 rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover how our proven educational approaches create
              transformative learning experiences for every student
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/academics"
              className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Academics
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
