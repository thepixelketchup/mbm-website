"use client";
import { FaClock, FaStar, FaGraduationCap, FaHistory } from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";
import PortableTextComponent from "../PortableTextComponent";

interface Milestone {
  _key: string;
  year: string;
  description: string;
}

interface FoundingStorySectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    foundingYear: string;
    founderName?: string;
    storyContent: any[];
    milestones?: Milestone[];
    legacyContent?: any[];
  };
}

export default function FoundingStorySection({
  section,
}: FoundingStorySectionProps) {
  if (!section) return null;

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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founding Year and Founder Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
              <FaGraduationCap className="inline-block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              Est. {section.foundingYear}
            </div>
            {section.founderName && (
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto">
                Founded by{" "}
                <strong className="text-primary">{section.founderName}</strong>
              </p>
            )}
          </div>

          {/* Main Story Content */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 border border-muted group">
              <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                  <FaHistory className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-2 sm:mb-3">
                    Our Foundation Story
                  </h2>
                  <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>
                </div>
                <div className="text-center sm:text-left">
                  <PortableTextComponent value={section.storyContent} />
                </div>
              </div>
            </div>
          </div>

          {/* Key Founding Milestones - Enhanced Design with Fixed Heights */}
          {section.milestones && section.milestones.length > 0 && (
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
                  Key Founding Milestones
                </h2>
                <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                  Important moments that shaped our institution's early years
                </p>
              </div>

              {/* Mobile Timeline Layout (xs-sm) */}
              <div className="block md:hidden relative">
                {/* Vertical timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>

                <div className="space-y-8">
                  {section.milestones.map((milestone, index) => (
                    <div
                      key={milestone._key}
                      className="relative flex items-start"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                      {/* Content card - Fixed height */}
                      <div className="ml-16 flex-1">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-muted group overflow-hidden relative h-40 flex flex-col">
                          {/* Background gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                                  <FaClock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                                    {milestone.year}
                                  </div>
                                </div>
                              </div>
                              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                            </div>

                            <div className="flex-1 overflow-hidden">
                              <p className="text-sm text-foreground/90 leading-relaxed line-clamp-4">
                                {milestone.description}
                              </p>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet Enhanced Cards (md-lg) - Fixed height */}
              <div className="hidden md:block lg:hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {section.milestones.map((milestone, index) => (
                    <div
                      key={milestone._key}
                      className="group relative overflow-hidden"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-muted group-hover:-translate-y-2 relative overflow-hidden h-64 flex flex-col">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                              <FaClock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                                {milestone.year}
                              </div>
                              <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mt-1"></div>
                            </div>
                          </div>

                          <div className="flex-1 overflow-hidden">
                            <p className="text-base text-foreground/90 leading-relaxed line-clamp-6">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Premium Cards (lg+) - Fixed height */}
              <div className="hidden lg:block">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
                  {section.milestones.map((milestone, index) => (
                    <div key={milestone._key} className="group relative h-full">
                      {/* Main card with premium styling - Fixed height */}
                      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-muted group-hover:-translate-y-3 relative h-96 flex flex-col">
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-br from-primary to-accent p-6 relative overflow-hidden">
                          {/* Floating background elements */}
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                <FaClock className="w-8 h-8 text-white" />
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white mb-1">
                                {milestone.year}
                              </div>
                              <div className="text-white/80 text-sm">
                                Milestone #{index + 1}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content area - Flex grow */}
                        <div className="p-8 relative flex-1 flex flex-col">
                          {/* Background decoration */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center mb-4">
                              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                              <div className="w-2 h-2 bg-accent rounded-full mx-3"></div>
                              <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                            </div>

                            <div className="flex-1 overflow-hidden mb-6">
                              <p className="text-base lg:text-lg text-foreground/90 leading-relaxed line-clamp-4">
                                {milestone.description}
                              </p>
                            </div>

                            {/* Impact indicator - Fixed at bottom */}
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
                                <span className="text-sm text-accent font-medium">
                                  Founding Impact
                                </span>
                              </div>
                              <div className="text-2xl text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                                {String(index + 1).padStart(2, "0")}
                              </div>
                            </div>
                          </div>

                          {/* Corner decoration */}
                          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Legacy Content */}
          {section.legacyContent && section.legacyContent.length > 0 && (
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-lg border border-primary/20">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <FaStar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-secondary mx-auto" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
                  Our Legacy
                </h2>
                <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-3 sm:mb-4"></div>
                <p className="text-sm sm:text-base lg:text-lg text-primary/70 max-w-3xl mx-auto">
                  The enduring impact and continuing tradition of excellence
                </p>
              </div>

              <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-center sm:text-left">
                <PortableTextComponent value={section.legacyContent} />
              </div>

              {/* Decorative elements */}
              <div className="hidden sm:block absolute top-4 right-4 w-8 h-8 lg:w-12 lg:h-12 border-2 border-secondary/30 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-4 left-4 w-6 h-6 lg:w-10 lg:h-10 bg-accent/20 rounded-full"></div>
            </div>
          )}
        </div>
      </section>
    </SubsectionTemplate>
  );
}
