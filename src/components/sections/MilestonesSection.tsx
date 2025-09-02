"use client";

import { PortableText } from "@portabletext/react";
import {
  FaTrophy,
  FaArrowLeft,
  FaAward,
  FaBuilding,
  FaLightbulb,
  FaExpandArrowsAlt,
  FaGraduationCap,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";
import Link from "next/link";

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
      academic: <FaGraduationCap className="w-6 h-6" />,
      infrastructure: <FaBuilding className="w-6 h-6" />,
      awards: <FaAward className="w-6 h-6" />,
      expansion: <FaExpandArrowsAlt className="w-6 h-6" />,
      innovation: <FaLightbulb className="w-6 h-6" />,
    };
    return (
      icons[category as keyof typeof icons] || <FaTrophy className="w-6 h-6" />
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: "from-blue-500 to-blue-600",
      infrastructure: "from-gray-500 to-gray-600",
      awards: "from-yellow-500 to-yellow-600",
      expansion: "from-purple-500 to-purple-600",
      innovation: "from-green-500 to-green-600",
    };
    return (
      colors[category as keyof typeof colors] ||
      "from-emerald-500 to-emerald-600"
    );
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      backTo={{
        text: "About",
        url: "/about",
      }}
    >
      {section.introduction && section.introduction.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-xl prose-emerald max-w-none text-center">
              <PortableText value={section.introduction} />
            </div>
          </div>
        </section>
      )}

      {section.statistics && section.statistics.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {section.statistics.map((stat) => (
                <div key={stat._key} className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-br from-transparent to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {section.achievements.map((achievement) => (
              <div
                key={achievement._key}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  achievement.isHighlight
                    ? "border-4 border-yellow-400 shadow-yellow-100"
                    : ""
                }`}
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(achievement.category)} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        {getCategoryIcon(achievement.category)}
                      </div>
                      <div className="text-center mt-2 text-sm font-bold text-gray-600">
                        {achievement.year}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-emerald-700">
                          {achievement.title}
                        </h3>
                        {achievement.isHighlight && (
                          <FaAward className="w-6 h-6 text-yellow-500" />
                        )}
                      </div>

                      <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                        {achievement.category.charAt(0).toUpperCase() +
                          achievement.category.slice(1)}
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaTrophy className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Excellence Recognized Globally
          </h3>
          <p className="text-xl text-emerald-100">
            Our commitment to educational excellence continues to earn
            recognition and accolades
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Link>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
