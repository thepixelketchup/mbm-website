"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaBullseye,
  FaBrain,
  FaHeart,
  FaSeedling,
  FaHandsHelping,
  FaSearch,
  FaBalanceScale,
  FaPalette,
  FaCheckCircle,
  FaUsers,
  FaBook,
  FaLightbulb,
} from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";
import PortableTextComponent from "../PortableTextComponent";

interface Principle {
  _key: string;
  title: string;
  description: any[];
  iconDescription?: string;
}

interface Application {
  _key: string;
  title: string;
  description: string;
  image?: any;
  benefits?: string[];
}

interface MethodologyDetailSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    keyPrinciples?: Principle[];
    practicalApplications?: Application[];
    outcomes?: string[];
  };
}

export default function MethodologyDetailSection({
  section,
}: MethodologyDetailSectionProps) {
  if (!section) return null;

  const getIcon = (iconDescription?: string) => {
    const desc = iconDescription?.toLowerCase() || "";

    if (
      desc.includes("target") ||
      desc.includes("goal") ||
      desc.includes("aim")
    ) {
      return <FaBullseye className="w-8 h-8" />;
    }
    if (
      desc.includes("brain") ||
      desc.includes("thinking") ||
      desc.includes("mind")
    ) {
      return <FaBrain className="w-8 h-8" />;
    }
    if (
      desc.includes("heart") ||
      desc.includes("emotion") ||
      desc.includes("care")
    ) {
      return <FaHeart className="w-8 h-8" />;
    }
    if (
      desc.includes("plant") ||
      desc.includes("growth") ||
      desc.includes("develop")
    ) {
      return <FaSeedling className="w-8 h-8" />;
    }
    if (
      desc.includes("hands") ||
      desc.includes("help") ||
      desc.includes("collaboration")
    ) {
      return <FaHandsHelping className="w-8 h-8" />;
    }
    if (
      desc.includes("search") ||
      desc.includes("discovery") ||
      desc.includes("explore")
    ) {
      return <FaSearch className="w-8 h-8" />;
    }
    if (
      desc.includes("balance") ||
      desc.includes("equal") ||
      desc.includes("fair")
    ) {
      return <FaBalanceScale className="w-8 h-8" />;
    }
    if (
      desc.includes("art") ||
      desc.includes("creative") ||
      desc.includes("palette")
    ) {
      return <FaPalette className="w-8 h-8" />;
    }
    if (
      desc.includes("book") ||
      desc.includes("reading") ||
      desc.includes("learning")
    ) {
      return <FaBook className="w-8 h-8" />;
    }
    if (
      desc.includes("light") ||
      desc.includes("idea") ||
      desc.includes("innovation")
    ) {
      return <FaLightbulb className="w-8 h-8" />;
    }
    if (
      desc.includes("students") ||
      desc.includes("people") ||
      desc.includes("community")
    ) {
      return <FaUsers className="w-8 h-8" />;
    }

    // Default
    return <FaBullseye className="w-8 h-8" />;
  };

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
      backTo={{
        text: "Methodology",
        url: "/methodology",
      }}
    >
      {section.keyPrinciples && section.keyPrinciples.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                Key Principles
              </h2>
              <p className="text-xl text-gray-600">
                The fundamental beliefs that guide our approach
              </p>
            </div>

            <div className="space-y-12">
              {section.keyPrinciples.map((principle, index) => (
                <div
                  key={principle._key}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                      {getIcon(principle.iconDescription)}
                    </div>
                  </div>

                  <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                      {principle.title}
                    </h3>
                    <div className="prose prose-indigo max-w-none">
                      <PortableTextComponent value={principle.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {section.practicalApplications &&
        section.practicalApplications.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                  Practical Applications
                </h2>
                <p className="text-xl text-gray-600">
                  How we implement our methodology in daily learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.practicalApplications.map((application) => (
                  <div
                    key={application._key}
                    className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg"
                  >
                    {application.image && (
                      <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                        <Image
                          src={urlFor(application.image)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={application.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                      {application.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {application.description}
                    </p>

                    {application.benefits &&
                      application.benefits.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-indigo-600 mb-3">
                            Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {application.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {section.outcomes && section.outcomes.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Expected Outcomes
              </h2>
              <p className="text-xl text-indigo-100">
                What students achieve through our methodology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {section.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg leading-relaxed">{outcome}</p>
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
