"use client";
import {
  FaDownload,
  FaFileAlt,
  FaMoneyBillWave,
  FaBook,
  FaClipboardList,
  FaNewspaper,
  FaFolder,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaSync,
  FaInfoCircle,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface Document {
  _id: string;
  title: string;
  description?: string;
  file: any;
  category: string;
  fileSize?: string;
  lastUpdated?: string;
  isActive: boolean;
  displayOrder?: number;
}

interface DownloadsSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    autoSync: boolean;
    selectedDocuments?: Document[];
    categoryFilter?: string[];
  };
  allDocuments?: Document[]; // This will come from a separate query
}

export default function DownloadsSection({
  section,
  allDocuments = [],
}: DownloadsSectionProps) {
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

  // Determine which documents to display
  let documentsToShow: Document[] = [];
  if (section.autoSync) {
    // Show all active documents, optionally filtered by category
    documentsToShow = allDocuments.filter((doc) => {
      if (!doc.isActive) return false;
      if (section.categoryFilter && section.categoryFilter.length > 0) {
        return section.categoryFilter.includes(doc.category);
      }
      return true;
    });
  } else {
    // Show only selected documents
    documentsToShow = section.selectedDocuments || [];
  }

  // Sort documents by display order and then by category
  documentsToShow.sort((a, b) => {
    if (a.displayOrder !== undefined && b.displayOrder !== undefined) {
      return a.displayOrder - b.displayOrder;
    }
    if (a.displayOrder !== undefined) return -1;
    if (b.displayOrder !== undefined) return 1;
    return a.category.localeCompare(b.category);
  });

  // Group documents by category
  const groupedDocuments = documentsToShow.reduce(
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
              {section.autoSync ? (
                <>
                  <FaSync className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg">
                    Auto-Sync Downloads
                  </span>
                </>
              ) : (
                <>
                  <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-sm sm:text-base lg:text-lg">
                    Selected Downloads
                  </span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Available Downloads
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {section.autoSync
                ? "All available documents are automatically listed below and updated in real-time"
                : "Carefully selected documents for download"}
            </p>
          </div>

          {/* Documents Content */}
          {Object.keys(groupedDocuments).length === 0 ? (
            /* Empty State */
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <FaFileAlt className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">
                  No Documents Available
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                  Please check back later for updated documents or contact
                  administration for assistance.
                </p>
              </div>
            </div>
          ) : (
            /* Document Categories */
            Object.entries(groupedDocuments).map(
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
                        key={doc._id}
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
            )
          )}
        </div>
      </section>

      {/* Auto-sync Notice */}
      {section.autoSync && (
        <section className="py-6 sm:py-8 bg-accent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaInfoCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-white drop-shadow-sm">
                    📄 Auto-Sync Enabled
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 drop-shadow-sm">
                    This page automatically updates when new documents are added
                    to our system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
