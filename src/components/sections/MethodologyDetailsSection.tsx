"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaBullseye,
  FaBrain,
  FaHeart,
  FaSeedling,
  FaHandsHelping,
  FaSearch,
  FaBalanceScale,
  FaPalette,
  FaCheckCircle,
  FaUsers,
  FaBook,
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";
import PortableTextComponent from "../PortableTextComponent";

interface Principle {
  _key: string;
  title: string;
  description: any[];
  iconDescription?: string;
}

interface Application {
  _key: string;
  title: string;
  description: string;
  image?: any;
  benefits?: string[];
}

interface MethodologyDetailSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    keyPrinciples?: Principle[];
    practicalApplications?: Application[];
    outcomes?: string[];
  };
}

export default function MethodologyDetailSection({
  section,
}: MethodologyDetailSectionProps) {
  if (!section) return null;

  const getIcon = (iconDescription?: string) => {
    const desc = iconDescription?.toLowerCase() || "";
    if (
      desc.includes("target") ||
      desc.includes("goal") ||
      desc.includes("aim")
    ) {
      return (
        <FaBullseye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("brain") ||
      desc.includes("thinking") ||
      desc.includes("mind")
    ) {
      return (
        <FaBrain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("heart") ||
      desc.includes("emotion") ||
      desc.includes("care")
    ) {
      return (
        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("plant") ||
      desc.includes("growth") ||
      desc.includes("develop")
    ) {
      return (
        <FaSeedling className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("hands") ||
      desc.includes("help") ||
      desc.includes("collaboration")
    ) {
      return (
        <FaHandsHelping className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("search") ||
      desc.includes("discovery") ||
      desc.includes("explore")
    ) {
      return (
        <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("balance") ||
      desc.includes("equal") ||
      desc.includes("fair")
    ) {
      return (
        <FaBalanceScale className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("art") ||
      desc.includes("creative") ||
      desc.includes("palette")
    ) {
      return (
        <FaPalette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("book") ||
      desc.includes("reading") ||
      desc.includes("learning")
    ) {
      return (
        <FaBook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("light") ||
      desc.includes("idea") ||
      desc.includes("innovation")
    ) {
      return (
        <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    if (
      desc.includes("students") ||
      desc.includes("people") ||
      desc.includes("community")
    ) {
      return (
        <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      );
    }
    // Default
    return (
      <FaBullseye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
    );
  };

  const getPrincipleColor = (index: number) => {
    const colors = ["bg-primary", "bg-secondary", "bg-accent"];
    return colors[index % colors.length];
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
      backTo={{
        text: "Methodology",
        url: "/methodology",
      }}
    >
      {/* Key Principles Section */}
      {section.keyPrinciples && section.keyPrinciples.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                <FaCogs className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base lg:text-lg">
                  Core Foundation
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Key Principles
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                The fundamental beliefs that guide our educational approach
              </p>
            </div>

            {/* Principles List */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {section.keyPrinciples.map((principle, index) => (
                <div
                  key={principle._key}
                  className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 ${getPrincipleColor(index)} rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300`}
                    >
                      {getIcon(principle.iconDescription)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-muted">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4 lg:mb-6">
                      {principle.title}
                    </h3>
                    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground/80">
                      <PortableTextComponent value={principle.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Practical Applications Section */}
      {section.practicalApplications &&
        section.practicalApplications.length > 0 && (
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-3 bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                  <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg">
                    In Practice
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  Practical Applications
                </h2>
                <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  How we implement our methodology in daily learning experiences
                </p>
              </div>

              {/* Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {section.practicalApplications.map((application, index) => (
                  <div
                    key={application._key}
                    className="bg-muted/30 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-muted group"
                  >
                    {/* Application Image */}
                    {application.image && (
                      <div className="relative h-48 sm:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                        <Image
                          src={urlFor(application.image)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={application.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Application Content */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                      {application.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                      {application.description}
                    </p>

                    {/* Benefits List */}
                    {application.benefits &&
                      application.benefits.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-accent mb-3 sm:mb-4 text-sm sm:text-base">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {application.benefits.map(
                              (benefit, benefitIndex) => (
                                <li
                                  key={benefitIndex}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-0.5 flex-shrink-0" />
                                  <span className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed">
                                    {benefit}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Expected Outcomes Section - Timeline Design */}
      {section.outcomes && section.outcomes.length > 0 && (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-accent overflow-hidden">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 text-white">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 shadow-xl">
                <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-bold text-base sm:text-lg lg:text-xl">
                  Student Success
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 drop-shadow-2xl">
                Expected Outcomes
              </h2>
              <div className="w-24 sm:w-28 lg:w-36 h-1.5 bg-white rounded-full mx-auto mb-6 sm:mb-8 shadow-lg"></div>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                What students achieve through our comprehensive methodology
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-white/30 rounded-full"></div>

              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {section.outcomes.map((outcome, index) => (
                  <div key={index} className="relative flex items-center group">
                    {/* Timeline Node */}
                    <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-accent">
                        {index + 1}
                      </span>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Card */}
                    <div className="ml-6 sm:ml-8 lg:ml-12 flex-1 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:-translate-y-1 hover:shadow-2xl">
                      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-semibold leading-relaxed drop-shadow-sm">
                        {outcome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <div className="inline-flex items-center gap-3 text-white/90 text-base sm:text-lg">
                <div className="w-12 h-px bg-white/70"></div>
                <span className="font-medium">
                  Transforming Students, Shaping Futures
                </span>
                <div className="w-12 h-px bg-white/70"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
