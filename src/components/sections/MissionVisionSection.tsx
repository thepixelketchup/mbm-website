"use client";

import { FaEye, FaRocket, FaHeart } from "react-icons/fa";
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
      <section className="py-20 bg-gradient-to-br from-transparent to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          {section.introduction && section.introduction.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                <div className="prose prose-xl prose-purple max-w-none text-center">
                  <PortableTextComponent value={section.introduction} />
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {section.missionTitle || "Our Mission"}
                  </h2>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="prose prose-lg prose-purple max-w-none">
                    <PortableTextComponent value={section.missionContent} />
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEye className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {section.visionTitle || "Our Vision"}
                  </h2>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="prose prose-lg prose-purple max-w-none">
                    <PortableTextComponent value={section.visionContent} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {section.valuesTitle && section.valuesContent && (
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {section.valuesTitle}
                </h2>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <PortableTextComponent value={section.valuesContent} />
              </div>
            </div>
          )}
        </div>
      </section>
    </SubsectionTemplate>
  );
}
