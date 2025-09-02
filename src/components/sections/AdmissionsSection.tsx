"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.client";
import {
  FaGraduationCap,
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
              Download Required Documents
            </h2>
            <p className="text-xl text-gray-600">
              Get all the forms and information you need for admission
            </p>
          </div>

          {Object.entries(groupedDocuments).map(([category, docs]) => (
            <div key={category} className="mb-12">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                  <div
                    key={doc._key}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
                  >
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

                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {doc.title}
                    </h4>

                    {doc.description && (
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {doc.description}
                      </p>
                    )}

                    {doc.lastUpdated && (
                      <p className="text-xs text-gray-500 mb-4">
                        Last updated:{" "}
                        {new Date(doc.lastUpdated).toLocaleDateString()}
                      </p>
                    )}

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
          ))}
        </div>
      </section>

      {section.admissionProcess && section.admissionProcess.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                Admission Process
              </h2>
              <p className="text-xl text-gray-600">
                Follow these simple steps to complete your admission
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.admissionProcess
                .sort((a, b) => a.stepNumber - b.stepNumber)
                .map((step, index) => (
                  <div key={step._key} className="relative">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 h-full border-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                        {step.stepNumber}
                      </div>

                      <h3 className="text-xl font-bold text-indigo-700 mb-4 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>

                    {index < section.admissionProcess!.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <FaArrowRight className="w-6 h-6 text-indigo-400" />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {section.contactInfo && (
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Need Help with Admissions?
            </h2>
            <p className="text-xl opacity-90 mb-12">
              Our admissions team is here to assist you
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.contactInfo.phone && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <FaPhone className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-white/90">{section.contactInfo.phone}</p>
                </div>
              )}

              {section.contactInfo.email && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <FaEnvelope className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-white/90">{section.contactInfo.email}</p>
                </div>
              )}

              {section.contactInfo.office && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-white/90">{section.contactInfo.office}</p>
                </div>
              )}

              {section.contactInfo.hours && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <FaClock className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-white/90">{section.contactInfo.hours}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
