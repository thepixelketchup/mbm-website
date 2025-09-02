"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.client";
import {
  FaDownload,
  FaFileAlt,
  FaMoneyBillWave,
  FaBook,
  FaClipboardList,
  FaNewspaper,
  FaFolder,
  FaCalendarAlt,
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
      forms: <FaClipboardList className="w-8 h-8" />,
      fees: <FaMoneyBillWave className="w-8 h-8" />,
      academic: <FaBook className="w-8 h-8" />,
      guidelines: <FaFileAlt className="w-8 h-8" />,
      prospectus: <FaNewspaper className="w-8 h-8" />,
      other: <FaFolder className="w-8 h-8" />,
    };
    return (
      icons[category as keyof typeof icons] || <FaFileAlt className="w-8 h-8" />
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      forms: "from-blue-500 to-blue-600",
      fees: "from-green-500 to-green-600",
      academic: "from-purple-500 to-purple-600",
      guidelines: "from-orange-500 to-orange-600",
      prospectus: "from-red-500 to-red-600",
      other: "from-gray-500 to-gray-600",
    };
    return (
      colors[category as keyof typeof colors] || "from-indigo-500 to-indigo-600"
    );
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
              Available Downloads
            </h2>
            <p className="text-xl text-gray-600">
              {section.autoSync
                ? "All available documents are automatically listed below"
                : "Selected documents for download"}
            </p>
          </div>

          {Object.keys(groupedDocuments).length === 0 ? (
            <div className="text-center py-16">
              <FaFileAlt className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No Documents Available
              </h3>
              <p className="text-gray-500">
                Please check back later for updated documents.
              </p>
            </div>
          ) : (
            Object.entries(groupedDocuments).map(([category, docs]) => (
              <div key={category} className="mb-12">
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl p-6 mb-6`}
                >
                  <div className="flex items-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {getCategoryTitle(category)}
                      </h3>
                      <p className="text-white/90">
                        {docs.length} document{docs.length > 1 ? "s" : ""}{" "}
                        available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {docs.map((doc) => (
                    <div
                      key={doc._id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
                    >
                      {/* Document Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg flex items-center justify-center`}
                        >
                          <FaFileAlt className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          {doc.fileSize && (
                            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {doc.fileSize}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Document Info */}
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {doc.title}
                      </h4>

                      {doc.description && (
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {doc.description}
                        </p>
                      )}

                      {doc.lastUpdated && (
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <FaCalendarAlt className="w-3 h-3 mr-1" />
                          Last updated:{" "}
                          {new Date(doc.lastUpdated).toLocaleDateString()}
                        </div>
                      )}

                      {/* Download Button */}
                      <a
                        href={doc.file.asset.url}
                        download
                        className={`w-full bg-gradient-to-r ${getCategoryColor(category)} text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200`}
                      >
                        <FaDownload className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Auto-sync Notice */}
      {section.autoSync && (
        <section className="py-8 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-indigo-100">
              📄 This page automatically updates when new documents are added to
              our admissions section
            </p>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
