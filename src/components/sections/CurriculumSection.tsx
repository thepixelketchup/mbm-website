"use client";

import React from "react";
import { FaBook } from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

export interface CurriculumDocument {
  id: string;
  title: string;
  url: string;
  description?: string;
  fileType?: string;
  uploadedAt?: string; // ISO date string
}

export interface GradeItem {
  id?: string;
  title: string;
  description?: string;
  url?: string;
}

export interface GradeCurriculum {
  grade: string;
  items?: GradeItem[];
}

export interface SectionShape {
  title: string;
  subtitle?: string;
  heroImage?: unknown;
  introContent?: React.ReactNode[]; // keep as React nodes for flexible rendering
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
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Download Curriculum Documents
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            {section.autoSyncDocuments
              ? "Showing the latest admission & curriculum documents (auto-synced)."
              : documentsToShow.length > 0
                ? "Selected curriculum documents."
                : "No documents selected. Please check back or contact the admin."}
          </p>

          {documentsToShow.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {documentsToShow.map((doc) => (
                <article
                  key={doc.id ?? doc.title}
                  className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {doc.title}
                    </h3>

                    {doc.description && (
                      <p className="mt-2 text-sm text-gray-600">
                        {doc.description}
                      </p>
                    )}

                    <div className="mt-3 text-xs text-gray-500">
                      {doc.fileType && (
                        <span className="mr-2 uppercase tracking-wide">
                          {doc.fileType}
                        </span>
                      )}
                      {doc.uploadedAt && (
                        <span>
                          {new Date(doc.uploadedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:opacity-95"
                    >
                      Download
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v12m0 0l4-4m-4 4l-4-4M21 21H3"
                        />
                      </svg>
                    </a>

                    {/* optional view link if URL is a preview */}
                    {doc.url && (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg p-6 border border-dashed border-gray-200 text-center">
              <p className="text-gray-600">
                No curriculum / admission documents are available right now.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Grade-wise curriculum */}
      {Array.isArray(section.gradeWiseCurriculum) &&
        section.gradeWiseCurriculum.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
                Grade-wise Curriculum
              </h2>

              <div className="space-y-8">
                {section.gradeWiseCurriculum.map((grade) => (
                  <div
                    key={grade.grade}
                    className="bg-gray-50 rounded-lg p-6 border"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {grade.grade}
                    </h3>

                    {Array.isArray(grade.items) && grade.items.length > 0 ? (
                      <ul className="space-y-3">
                        {grade.items.map((item, idx) => (
                          <li
                            key={item.id ?? `${grade.grade}-${idx}`}
                            className="flex items-start justify-between"
                          >
                            <div>
                              <div className="font-medium text-gray-800">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-sm text-gray-600">
                                  {item.description}
                                </div>
                              )}
                            </div>

                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-600 hover:underline ml-4"
                              >
                                View
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500">
                        No items listed for this grade.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
    </SubsectionTemplate>
  );
}
