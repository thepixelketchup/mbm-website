"use client";
import React from "react";
import {
  FaFileAlt,
  FaBook,
  FaGraduationCap,
  FaArrowRight,
  FaFolder,
  FaCloudDownloadAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

const getDocumentUrl = (fileData: any) => {
  if (fileData?.asset?.url) {
    return fileData.asset.url;
  }
  if (fileData?.url) {
    return fileData.url;
  }
  if (typeof fileData === "string" && fileData.startsWith("http")) {
    return fileData;
  }
  return "";
};

export interface CurriculumDocument {
  _id: string;
  title: string;
  description?: string;
  category: string;
  fileSize?: string;
  isActive?: boolean;
  displayOrder?: number;
  file: {
    asset: {
      url: string;
      originalFilename?: string;
    };
  };
}

export interface GradeItem {
  id?: string;
  title: string;
  description?: string;
  url?: string;
}

export interface GradeCurriculum {
  grade: string;
  description?: string;
  items?: GradeItem[];
  syllabusDocument?: {
    title: string;
    file: {
      asset?: {
        url: string;
      };
    };
  };
  subjects?: string[];
}

export interface SectionShape {
  title: string;
  subtitle?: string;
  heroImage?: unknown;
  introContent?: React.ReactNode[];
  autoSyncDocuments?: boolean;
  selectedDocuments?: CurriculumDocument[];
  gradeWiseCurriculum?: GradeCurriculum[];
}

interface CurriculumSectionProps {
  section: SectionShape;
  allDocuments?: CurriculumDocument[];
}

export default function CurriculumSection({
  section,
  allDocuments = [],
}: CurriculumSectionProps) {
  const documentsToShow: CurriculumDocument[] = React.useMemo(() => {
    if (section.autoSyncDocuments) return allDocuments ?? [];
    if (
      Array.isArray(section.selectedDocuments) &&
      section.selectedDocuments.length > 0
    ) {
      return section.selectedDocuments;
    }
    return [];
  }, [section.autoSyncDocuments, section.selectedDocuments, allDocuments]);

  const getFileTypeIcon = (category?: string) => {
    const type = category?.toLowerCase();
    if (type?.includes("pdf"))
      return <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (type?.includes("doc"))
      return <FaBook className="w-4 h-4 sm:w-5 sm:h-5" />;
    return <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />;
  };

  const getFileTypeColor = (category?: string) => {
    const type = category?.toLowerCase();
    if (type?.includes("pdf")) return "bg-red-500";
    if (type?.includes("doc")) return "bg-blue-500";
    if (type?.includes("syllabus")) return "bg-green-500";
    return "bg-primary";
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      introContent={section.introContent}
      backTo={{
        text: "Academics",
        url: "/academics",
      }}
    >
      {/* Documents Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <FaCloudDownloadAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold text-sm sm:text-base lg:text-lg">
                Document Center
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Curriculum Documents
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {section.autoSyncDocuments
                ? "Access the latest curriculum and admission documents. All documents are automatically updated and synced."
                : documentsToShow.length > 0
                  ? "Selected curriculum documents are available for viewing below."
                  : "No documents are currently available. Please check back later or contact administration."}
            </p>
          </div>

          {/* Documents Grid */}
          {documentsToShow.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {documentsToShow.map((doc) => {
                // Get the document URL from your query structure
                const documentUrl = getDocumentUrl(doc.file);
                return (
                  <article
                    key={doc._id}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-muted group hover:-translate-y-2 flex flex-col overflow-hidden"
                  >
                    {/* Document Header */}
                    <div
                      className={`${getFileTypeColor(doc.category)} p-4 sm:p-6 text-white relative overflow-hidden`}
                    >
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {getFileTypeIcon(doc.category)}
                        </div>
                        {doc.category && (
                          <span className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                            {doc.category}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Document Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-3 sm:mb-4 leading-tight line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 leading-relaxed line-clamp-3 flex-1">
                          {doc.description}
                        </p>
                      )}

                      {/* Document Meta */}
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-foreground/60 mb-4 sm:mb-6">
                        {doc.file?.asset?.originalFilename && (
                          <div className="flex items-center gap-2">
                            <FaFileAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="truncate">
                              {doc.file.asset.originalFilename}
                            </span>
                          </div>
                        )}
                        {doc.fileSize && (
                          <span className="text-accent font-medium">
                            {doc.fileSize}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        {documentUrl ? (
                          <a
                            href={documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-primary hover:bg-accent text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                            View Document
                          </a>
                        ) : (
                          <div className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-muted text-foreground/50 rounded-xl font-semibold text-sm sm:text-base cursor-not-allowed">
                            <FaFileAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                            Document Unavailable
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* No Documents State */
            <div className="max-w-md mx-auto text-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg border border-muted">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <FaFolder className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">
                  No Documents Available
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Curriculum and admission documents are not currently
                  available. Please check back later or contact the
                  administration office.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grade-wise Curriculum Section */}
      {Array.isArray(section.gradeWiseCurriculum) &&
        section.gradeWiseCurriculum.length > 0 && (
          <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-3 bg-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                  <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg">
                    Academic Structure
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  Grade-wise Curriculum
                </h2>
                <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Explore our comprehensive curriculum structure organized by
                  grade levels
                </p>
              </div>

              {/* Grade Cards */}
              <div className="space-y-6 sm:space-y-8">
                {section.gradeWiseCurriculum.map((grade, index) => (
                  <div
                    key={grade.grade}
                    className="bg-muted/30 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-muted group"
                  >
                    {/* Grade Header */}
                    <div className="bg-primary p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaBook className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                              {grade.grade}
                            </h3>
                            {grade.description && (
                              <p className="text-white/80 text-sm sm:text-base">
                                {grade.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/20">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* Grade Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      {grade.syllabusDocument && (
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-muted group/item hover:-translate-y-1 mb-6">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                <FaBook className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-bold text-primary text-base lg:text-lg group-hover/item:text-accent transition-colors duration-300">
                                  {grade.syllabusDocument.title}
                                </h4>
                                <p className="text-sm text-foreground/70">
                                  Syllabus Document
                                </p>
                              </div>
                            </div>
                            {grade.syllabusDocument.file?.asset?.url && (
                              <a
                                href={grade.syllabusDocument.file.asset.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex-shrink-0"
                              >
                                <span className="hidden sm:inline">View</span>
                                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {grade.subjects && grade.subjects.length > 0 && (
                        <div>
                          <h5 className="font-bold text-primary mb-4">
                            Subjects:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {grade.subjects.map(
                              (subject: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                  {subject}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
    </SubsectionTemplate>
  );
}
