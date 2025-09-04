"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaTrophy,
  FaBuilding,
  FaFlask,
  FaFutbol,
  FaUtensils,
  FaPalette,
  FaLaptopCode,
  FaDownload,
  FaArrowRight,
  FaPlay,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
  FaEye,
} from "react-icons/fa";
import { JSX } from "react";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface Stat {
  _key: string;
  number: string;
  label: string;
  icon?: string;
}

interface Document {
  _id: string;
  title: string;
  description?: string;
  file: any;
  category: string;
  fileSize?: string;
}

interface Facility {
  _key: string;
  name: string;
  description: string;
  image?: any;
  icon?: string;
}

interface Activity {
  _key: string;
  name: string;
  description: string;
  image?: any;
  category?: string;
}

interface QuickLink {
  _key: string;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  color?: string;
}

interface AcademicsOverviewSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    academicStats?: Stat[];
    curriculumHighlights?: {
      title: string;
      description: string;
      featuredDocuments?: Document[];
      viewAllLink: string;
    };
    facilitiesHighlights?: {
      title: string;
      description: string;
      featuredFacilities?: Facility[];
      viewAllLink: string;
    };
    activitiesHighlights?: {
      title: string;
      description: string;
      featuredActivities?: Activity[];
      viewAllLink: string;
    };
    galleryHighlights?: {
      title: string;
      description: string;
      featuredImages?: any[];
      viewAllLink: string;
    };
    quickLinks?: QuickLink[];
  };
}

export default function AcademicsOverviewSection({
  section,
}: AcademicsOverviewSectionProps) {
  if (!section) return null;

  const getIcon = (iconName?: string) => {
    const icons: Record<string, JSX.Element> = {
      FaBook: <FaBook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaUsers: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaTrophy: <FaTrophy className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaGraduationCap: (
        <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaChartLine: (
        <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaBuilding: (
        <FaBuilding className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaFlask: <FaFlask className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaFutbol: <FaFutbol className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaUtensils: (
        <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaPalette: <FaPalette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      FaLaptopCode: (
        <FaLaptopCode className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaCalendarAlt: (
        <FaCalendarAlt className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      ),
      FaFileAlt: <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    };
    return (
      icons[iconName || "FaBook"] || (
        <FaBook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      )
    );
  };

  const getColorClasses = (color?: string) => {
    const colors = {
      blue: "from-primary to-accent hover:from-accent hover:to-primary",
      green: "from-accent to-secondary hover:from-secondary hover:to-accent",
      purple: "from-primary to-accent hover:from-accent hover:to-secondary",
      orange: "from-secondary to-accent hover:from-accent hover:to-primary",
      pink: "from-accent to-secondary hover:from-primary hover:to-accent",
      teal: "from-accent to-primary hover:from-primary hover:to-secondary",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
      backTo={{
        text: "Academics",
        url: "/academics",
      }}
    >
      {/* Academic Statistics Section */}
      {section.academicStats && section.academicStats.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-muted/30 to-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Academic Excellence in Numbers
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {section.academicStats.map((stat) => (
                <div
                  key={stat._key}
                  className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-muted group hover:-translate-y-2"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {getIcon(stat.icon)}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
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

      {/* Curriculum Highlights Section */}
      {section.curriculumHighlights && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                {section.curriculumHighlights.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                {section.curriculumHighlights.description}
              </p>
            </div>

            {section.curriculumHighlights.featuredDocuments &&
              section.curriculumHighlights.featuredDocuments.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {section.curriculumHighlights.featuredDocuments.map((doc) => (
                    <div
                      key={doc._id}
                      className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group border border-muted"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3 line-clamp-2">
                        {doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4 line-clamp-3">
                          {doc.description}
                        </p>
                      )}
                      <a
                        href={doc.file.asset.url}
                        download
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base group-hover:text-accent transition-colors duration-300"
                      >
                        <FaDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              )}

            <div className="text-center">
              <a
                href={section.curriculumHighlights.viewAllLink}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-accent hover:to-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Complete Curriculum
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Facilities Highlights Section */}
      {section.facilitiesHighlights && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                {section.facilitiesHighlights.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                {section.facilitiesHighlights.description}
              </p>
            </div>

            {section.facilitiesHighlights.featuredFacilities &&
              section.facilitiesHighlights.featuredFacilities.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                  {section.facilitiesHighlights.featuredFacilities.map(
                    (facility) => (
                      <div
                        key={facility._key}
                        className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-muted hover:-translate-y-2"
                      >
                        {facility.image && (
                          <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                            <Image
                              src={urlFor(facility.image)
                                .width(500)
                                .height(300)
                                .url()}
                              alt={facility.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        )}
                        <div className="p-4 sm:p-6">
                          <div className="flex items-center mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center mr-3 text-white group-hover:scale-110 transition-transform duration-300">
                              {getIcon(facility.icon)}
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                              {facility.name}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-3">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}

            <div className="text-center">
              <a
                href={section.facilitiesHighlights.viewAllLink}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-secondary hover:to-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore All Facilities
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Activities Highlights Section */}
      {section.activitiesHighlights && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                {section.activitiesHighlights.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                {section.activitiesHighlights.description}
              </p>
            </div>

            {section.activitiesHighlights.featuredActivities &&
              section.activitiesHighlights.featuredActivities.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {section.activitiesHighlights.featuredActivities.map(
                    (activity) => (
                      <div key={activity._key} className="group">
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                          {activity.image && (
                            <div className="relative h-48 sm:h-56 lg:h-64">
                              <Image
                                src={urlFor(activity.image)
                                  .width(400)
                                  .height(400)
                                  .url()}
                                alt={activity.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2">
                                  {activity.name}
                                </h3>
                                {activity.category && (
                                  <span className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                    {activity.category}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <p className="text-sm sm:text-base text-foreground/80 mt-3 sm:mt-4 px-2 leading-relaxed line-clamp-3">
                          {activity.description}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              )}

            <div className="text-center">
              <a
                href={section.activitiesHighlights.viewAllLink}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-primary hover:to-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Discover All Activities
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Highlights Section */}
      {section.galleryHighlights &&
        section.galleryHighlights.featuredImages && (
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  {section.galleryHighlights.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  {section.galleryHighlights.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
                {section.galleryHighlights.featuredImages
                  .slice(0, 8)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <Image
                        src={urlFor(image).width(400).height(400).url()}
                        alt="Gallery image"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="text-center">
                <a
                  href={section.galleryHighlights.viewAllLink}
                  className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-accent hover:to-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Complete Gallery
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </section>
        )}

      {/* Quick Links Section */}
      {section.quickLinks && section.quickLinks.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Quick Access
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80">
                Find what you're looking for faster
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {section.quickLinks.map((link) => (
                <a
                  key={link._key}
                  href={link.url}
                  className={`group block p-4 sm:p-6 bg-gradient-to-r ${getColorClasses(link.color)} text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(link.icon)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                        {link.title}
                      </h3>
                    </div>
                  </div>
                  {link.description && (
                    <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                      {link.description}
                    </p>
                  )}
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold mr-2 text-sm sm:text-base">
                      Access Now
                    </span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
