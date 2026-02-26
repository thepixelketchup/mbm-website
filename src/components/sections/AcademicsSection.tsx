"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity.client";
import {
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
  Building2,
  FlaskConical,
  Activity,
  Utensils,
  Palette,
  Laptop,
  Download,
  ArrowRight,
  Play,
  CalendarDays,
  FileText,
  TrendingUp,
  Eye,
} from "lucide-react";
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

interface ActivityType {
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
      featuredActivities?: ActivityType[];
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
      FaBook: <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaUsers: <Users className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaTrophy: <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaGraduationCap: <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaChartLine: <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaBuilding: <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaFlask: <FlaskConical className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaFutbol: <Activity className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaUtensils: <Utensils className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaPalette: <Palette className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaLaptopCode: <Laptop className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaCalendarAlt: <CalendarDays className="w-5 h-5 lg:w-6 lg:h-6" />,
      FaFileAlt: <FileText className="w-5 h-5 lg:w-6 lg:h-6" />,
    };
    return (
      icons[iconName || "FaBook"] || (
        <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />
      )
    );
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
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
        <section className="py-20 lg:py-28 relative bg-background overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Academic Excellence
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {section.academicStats.map((stat) => (
                <motion.div
                  variants={fadeInUp}
                  key={stat._key}
                  className="glass p-8 rounded-[2rem] text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                      {getIcon(stat.icon)}
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Curriculum Highlights Section */}
      {section.curriculumHighlights && (
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                {section.curriculumHighlights.title}
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                {section.curriculumHighlights.description}
              </p>
            </motion.div>

            {section.curriculumHighlights.featuredDocuments &&
              section.curriculumHighlights.featuredDocuments.length > 0 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                  {section.curriculumHighlights.featuredDocuments.map((doc) => (
                    <motion.div
                      variants={fadeInUp}
                      key={doc._id}
                      className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/20"
                    >
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <FileText className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-sm text-foreground/60 mb-6 line-clamp-3">
                          {doc.description}
                        </p>
                      )}
                      <a
                        href={doc.file.asset.url}
                        download
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors duration-300"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}

            <div className="text-center">
              <a
                href={section.curriculumHighlights.viewAllLink}
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
              >
                View Complete Curriculum
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Facilities Highlights Section */}
      {section.facilitiesHighlights && (
        <section className="py-20 lg:py-28 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                {section.facilitiesHighlights.title}
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                {section.facilitiesHighlights.description}
              </p>
            </motion.div>

            {section.facilitiesHighlights.featuredFacilities &&
              section.facilitiesHighlights.featuredFacilities.length > 0 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                  {section.facilitiesHighlights.featuredFacilities.map(
                    (facility) => (
                      <motion.div
                        variants={fadeInUp}
                        key={facility._key}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col"
                      >
                        {facility.image && (
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={urlFor(facility.image).width(600).height(400).url()}
                              alt={facility.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                          </div>
                        )}
                        <div className="p-8 flex-1 flex flex-col">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              {getIcon(facility.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                              {facility.name}
                            </h3>
                          </div>
                          <p className="text-foreground/70 leading-relaxed">
                            {facility.description}
                          </p>
                        </div>
                      </motion.div>
                    ),
                  )}
                </motion.div>
              )}

            <div className="text-center">
              <a
                href={section.facilitiesHighlights.viewAllLink}
                className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 group"
              >
                Explore All Facilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links Section */}
      {section.quickLinks && section.quickLinks.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent to-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Quick Access
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {section.quickLinks.map((link) => (
                <motion.a
                  variants={fadeInUp}
                  key={link._key}
                  href={link.url}
                  className="glass block p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 group border border-primary/10 hover:border-primary"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform shadow-md">
                      {getIcon(link.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {link.title}
                    </h3>
                  </div>
                  {link.description && (
                    <p className="text-foreground/70 mb-6 line-clamp-2">
                      {link.description}
                    </p>
                  )}
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300 font-semibold">
                    Access Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}

