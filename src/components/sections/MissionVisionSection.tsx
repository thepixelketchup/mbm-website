"use client";
import { FaEye, FaRocket, FaHeart, FaBullseye } from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";
import PortableTextComponent from "../PortableTextComponent";

interface MissionVisionSectionProps {
  section: {
    title: string;
    subtitle?: string;
    introduction?: any[];
    missionTitle?: string;
    missionContent: any[];
    visionTitle?: string;
    visionContent: any[];
    valuesTitle?: string;
    valuesContent?: any[];
  };
}

export default function MissionVisionSection({
  section,
}: MissionVisionSectionProps) {
  if (!section) return null;

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      backTo={{
        text: "About",
        url: "/about",
      }}
    >
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-transparent to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          {section.introduction && section.introduction.length > 0 && (
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-12 border border-muted group">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <FaBullseye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                    About Our Purpose
                  </h2>
                  <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>
                </div>
                <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-center">
                  <PortableTextComponent value={section.introduction} />
                </div>
              </div>
            </div>
          )}

          {/* Mission and Vision Cards */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
              {/* Mission Card */}
              <div className="group h-full">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-muted group-hover:-translate-y-2 lg:group-hover:-translate-y-3 h-full flex flex-col">
                  {/* Mission Header */}
                  <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8 lg:p-10 text-white text-center relative overflow-hidden flex-shrink-0">
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full blur-lg"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <FaRocket className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        {section.missionTitle || "Our Mission"}
                      </h2>
                    </div>
                  </div>

                  {/* Mission Content */}
                  <div className="p-6 sm:p-8 lg:p-12 flex-1 flex flex-col relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex-1">
                      {/* Decorative line */}
                      <div className="flex items-center mb-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                        <div className="w-2 h-2 bg-accent rounded-full mx-3"></div>
                        <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                      </div>

                      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                        <PortableTextComponent value={section.missionContent} />
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group h-full">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-muted group-hover:-translate-y-2 lg:group-hover:-translate-y-3 h-full flex flex-col">
                  {/* Vision Header */}
                  <div className="bg-gradient-to-r from-accent to-secondary p-6 sm:p-8 lg:p-10 text-white text-center relative overflow-hidden flex-shrink-0">
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full blur-lg"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <FaEye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        {section.visionTitle || "Our Vision"}
                      </h2>
                    </div>
                  </div>

                  {/* Vision Content */}
                  <div className="p-6 sm:p-8 lg:p-12 flex-1 flex flex-col relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/3 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex-1">
                      {/* Decorative line */}
                      <div className="flex items-center mb-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent"></div>
                        <div className="w-2 h-2 bg-secondary rounded-full mx-3"></div>
                        <div className="flex-1 h-px bg-gradient-to-l from-accent/30 to-transparent"></div>
                      </div>

                      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                        <PortableTextComponent value={section.visionContent} />
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          {section.valuesTitle && section.valuesContent && (
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-12 border border-muted group relative">
              <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" />
                  </div>
                  {/* Decorative pulse */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse"></div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                  {section.valuesTitle}
                </h2>

                <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-3 sm:mb-4"></div>

                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                  The core principles that guide our educational philosophy and
                  community
                </p>
              </div>

              <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none text-center sm:text-left relative z-10">
                <PortableTextComponent value={section.valuesContent} />
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

              {/* Decorative corner elements */}
              <div className="hidden sm:block absolute top-4 right-4 w-6 h-6 lg:w-8 lg:h-8 border-2 border-accent/30 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-4 left-4 w-4 h-4 lg:w-6 lg:h-6 bg-secondary/20 rounded-full"></div>
            </div>
          )}
        </div>
      </section>
    </SubsectionTemplate>
  );
}
