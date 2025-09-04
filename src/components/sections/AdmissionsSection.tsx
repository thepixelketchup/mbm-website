"use client";
import {
  FaDownload,
  FaFileAlt,
  FaMoneyBillWave,
  FaBook,
  FaClipboardList,
  FaNewspaper,
  FaFolder,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface Document {
  _key: string;
  title: string;
  description?: string;
  file: any;
  category: string;
  fileSize?: string;
  lastUpdated?: string;
}

interface AdmissionStep {
  _key: string;
  stepNumber: number;
  title: string;
  description: string;
}

interface ContactInfo {
  phone?: string;
  email?: string;
  office?: string;
  hours?: string;
}

interface AdmissionsSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    documents: Document[];
    admissionProcess?: AdmissionStep[];
    contactInfo?: ContactInfo;
  };
}

export default function AdmissionsSection({ section }: AdmissionsSectionProps) {
  if (!section) return null;

  const getCategoryIcon = (category: string) => {
    const icons = {
      forms: (
        <FaClipboardList className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      fees: (
        <FaMoneyBillWave className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      academic: (
        <FaBook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      guidelines: (
        <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      prospectus: (
        <FaNewspaper className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      other: (
        <FaFolder className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
    };
    return (
      icons[category as keyof typeof icons] || (
        <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      forms: "bg-primary",
      fees: "bg-accent",
      academic: "bg-secondary",
      guidelines: "bg-primary",
      prospectus: "bg-accent",
      other: "bg-secondary",
    };
    return colors[category as keyof typeof colors] || "bg-primary";
  };

  const getCategoryTitle = (category: string) => {
    const titles = {
      forms: "Application Forms",
      fees: "Fee Structure",
      academic: "Academic Documents",
      guidelines: "Admission Guidelines",
      prospectus: "Prospectus",
      other: "Other Documents",
    };
    return titles[category as keyof typeof titles] || "Documents";
  };

  const groupedDocuments = section.documents.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = [];
      }
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, Document[]>,
  );

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
    >
      {/* Documents Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base lg:text-lg">
                Download Center
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Required Documents
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Get all the forms and information you need for admission
            </p>
          </div>

          {/* Document Categories */}
          {Object.entries(groupedDocuments).map(
            ([category, docs], categoryIndex) => (
              <div key={category} className="mb-8 sm:mb-12 lg:mb-16">
                {/* Category Header */}
                <div
                  className={`${getCategoryColor(category)} rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
                >
                  <div className="flex items-center text-white relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-lg"></div>

                    <div className="relative z-10 flex items-center w-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2">
                          {getCategoryTitle(category)}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                          {docs.length} document{docs.length > 1 ? "s" : ""}{" "}
                          available
                        </p>
                      </div>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/20 flex-shrink-0">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {docs.map((doc) => (
                    <div
                      key={doc._key}
                      className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 group hover:-translate-y-2 border border-muted"
                    >
                      {/* Document Header */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${getCategoryColor(category)} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="text-right">
                          {doc.fileSize && (
                            <span className="text-xs sm:text-sm bg-muted text-foreground/70 px-2 sm:px-3 py-1 rounded-full font-medium">
                              {doc.fileSize}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Document Content */}
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 sm:mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {doc.title}
                      </h4>

                      {doc.description && (
                        <p className="text-xs sm:text-sm lg:text-base text-foreground/80 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                          {doc.description}
                        </p>
                      )}

                      {/* Document Meta */}
                      {doc.lastUpdated && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60 mb-4 sm:mb-6">
                          <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>
                            Last updated:{" "}
                            {new Date(doc.lastUpdated).toLocaleDateString()}
                          </span>
                        </div>
                      )}

                      {/* Download Button */}
                      <a
                        href={doc.file.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full ${getCategoryColor(category)} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                        View Document
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Admission Process Section - Scrollable for many steps */}
      {section.admissionProcess && section.admissionProcess.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 bg-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                <FaClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base lg:text-lg">
                  Step by Step
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Admission Process
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Follow these simple steps to complete your admission
              </p>
            </div>

            {/* Process Steps - Scrollable Container */}
            <div className="max-h-[600px] lg:max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-track-muted scrollbar-thumb-primary p-2 pl-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {section.admissionProcess
                  .sort((a, b) => a.stepNumber - b.stepNumber)
                  .map((step, index) => (
                    <div key={step._key} className="relative">
                      <div className="bg-muted/30 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 h-full border-2 border-muted hover:border-primary transition-all duration-300 group hover:-translate-y-2">
                        {/* Step Number */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {step.stepNumber}
                        </div>

                        {/* Step Content */}
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center group-hover:text-accent transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow between steps - Desktop only */}
                      {index < section.admissionProcess!.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <FaArrowRight className="w-4 h-4 text-accent" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Scroll indicator if many steps */}
            {section.admissionProcess.length > 6 && (
              <div className="text-center mt-6 sm:mt-8">
                <p className="text-sm text-foreground/60 italic">
                  Scroll to view all {section.admissionProcess.length} steps
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact Information Section - Fixed visibility issues */}
      {section.contactInfo && (
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-primary overflow-hidden">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                <FaHeadset className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base lg:text-lg">
                  Get Support
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow-lg">
                Need Help with Admissions?
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-white/60 rounded-full mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Our admissions team is here to assist you throughout the process
              </p>
            </div>

            {/* Contact Cards - Improved visibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {section.contactInfo.phone && (
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-white drop-shadow-md">
                    Phone
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm font-semibold break-all drop-shadow-sm">
                    {section.contactInfo.phone}
                  </p>
                </div>
              )}

              {section.contactInfo.email && (
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-white drop-shadow-md">
                    Email
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm font-semibold break-all drop-shadow-sm">
                    {section.contactInfo.email}
                  </p>
                </div>
              )}

              {section.contactInfo.office && (
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-white drop-shadow-md">
                    Office
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm font-semibold drop-shadow-sm leading-relaxed">
                    {section.contactInfo.office}
                  </p>
                </div>
              )}

              {section.contactInfo.hours && (
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <FaClock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3 text-white drop-shadow-md">
                    Hours
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm font-semibold drop-shadow-sm leading-relaxed">
                    {section.contactInfo.hours}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
