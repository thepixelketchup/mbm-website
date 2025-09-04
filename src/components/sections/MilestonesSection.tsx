"use client";
import { PortableText } from "@portabletext/react";
import {
  FaTrophy,
  FaAward,
  FaBuilding,
  FaLightbulb,
  FaExpandArrowsAlt,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface Achievement {
  _key: string;
  year: string;
  title: string;
  description: string;
  category: string;
  isHighlight?: boolean;
}

interface Statistic {
  _key: string;
  number: string;
  label: string;
}

interface MilestonesSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introduction?: any[];
    achievements: Achievement[];
    statistics?: Statistic[];
  };
}

export default function MilestonesSection({ section }: MilestonesSectionProps) {
  if (!section) return null;

  const getCategoryIcon = (category: string) => {
    const icons = {
      academic: <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      infrastructure: <FaBuilding className="w-5 h-5 sm:w-6 sm:h-6" />,
      awards: <FaAward className="w-5 h-5 sm:w-6 sm:h-6" />,
      expansion: <FaExpandArrowsAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      innovation: <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    };
    return (
      icons[category as keyof typeof icons] || (
        <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: "from-primary to-accent",
      infrastructure: "from-accent to-secondary",
      awards: "from-secondary to-primary",
      expansion: "from-primary to-secondary",
      innovation: "from-accent to-primary",
    };
    return colors[category as keyof typeof colors] || "from-primary to-accent";
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      backTo={{ text: "About", url: "/about" }}
    >
      {/* Introduction Section */}
      {section.introduction && section.introduction.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-sm sm:prose-base lg:prose-xl max-w-none text-center">
              <PortableText
                value={section.introduction}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      {section.statistics && section.statistics.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-muted/30 to-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {section.statistics.map((stat) => (
                <div
                  key={stat._key}
                  className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-muted group"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-foreground/70 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-transparent to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 lg:space-y-8">
            {section.achievements.map((achievement) => (
              <article
                key={achievement._key}
                className={`bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border group ${
                  achievement.isHighlight
                    ? "border-2 border-secondary shadow-secondary/20"
                    : "border-muted"
                }`}
              >
                {/* Mobile Layout (xs-md) */}
                <div className="block md:hidden p-4 sm:p-6">
                  {/* Header with icon, category, and year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${getCategoryColor(achievement.category)} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      >
                        {getCategoryIcon(achievement.category)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-accent bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    {achievement.isHighlight && (
                      <FaStar className="w-5 h-5 text-secondary flex-shrink-0" />
                    )}
                  </div>

                  {/* Title and category */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
                      {achievement.category}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Desktop Layout (md+) */}
                <div className="hidden md:block p-6 lg:p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon and Year */}
                    <div className="flex-shrink-0 text-center">
                      <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${getCategoryColor(achievement.category)} rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform duration-300`}
                      >
                        {getCategoryIcon(achievement.category)}
                      </div>
                      <div className="text-sm lg:text-base font-bold text-accent mt-3 bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-grow min-w-0 pr-4">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                              {achievement.title}
                            </h3>
                            {achievement.isHighlight && (
                              <FaStar className="w-5 h-5 lg:w-6 lg:h-6 text-secondary flex-shrink-0" />
                            )}
                          </div>
                          <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-primary/10 text-primary rounded-full text-sm lg:text-base font-medium capitalize">
                            {achievement.category}
                          </div>
                        </div>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl text-foreground/90 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FaTrophy className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Excellence Recognized Globally
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to educational excellence continues to earn
            recognition and accolades worldwide
          </p>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
