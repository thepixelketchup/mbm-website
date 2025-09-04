"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.client";

interface AboutUsSectionProps {
  section: {
    title: string;
    heroImage: any;
    description: any[];
    personName?: string;
    personRole?: string;
    personImage?: any;
    personMessage?: any[];
    missionTitle?: string;
    missionContent: any[];
    visionTitle?: string;
    visionContent: any[];
  };
}

export default function AboutUsSection({ section }: AboutUsSectionProps) {
  if (!section) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">
            {section.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(section.heroImage).width(1200).height(600).url()}
              alt={section.title}
              fill
              className="object-cover"
            />
            {/* Overlay with school branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8"></div>
          </div>
        </div>

        {/* Main Description */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-t-4 border-primary">
            <div className="prose prose-xl prose-purple max-w-none text-center">
              <PortableText
                value={section.description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-xl leading-relaxed text-foreground/90 mb-6">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold text-primary mb-6">
                        {children}
                      </h2>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Person Message Section */}
        {section.personName && section.personMessage && (
          <div className="mb-20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                {/* Person Image */}
                <div className="lg:col-span-1 flex flex-col justify-start h-full">
                  {section.personImage ? (
                    <div className="relative">
                      <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={urlFor(section.personImage)
                            .width(300)
                            .height(300)
                            .url()}
                          alt={section.personName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-4 border-purple-200 -z-10 transform translate-x-2 translate-y-2"></div>
                    </div>
                  ) : (
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-4xl font-bold">
                        {section.personName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}

                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {section.personName}
                    </h3>
                    {section.personRole && (
                      <p className="text-lg font-medium text-primary">
                        {section.personRole}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    {/* Quote marks */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2V9a2 2 0 00-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="prose prose-lg prose-purple max-w-none">
                      <PortableText
                        value={section.personMessage}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-foreground/80 leading-relaxed text-lg mb-4 italic">
                                "{children}"
                              </p>
                            ),
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2 border-l-4 border-primary">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-primary">
                  {section.missionTitle || "Our Mission"}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="prose prose-gray max-w-none">
                  <PortableText
                    value={section.missionContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-foreground/90 leading-relaxed text-lg text-center">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2 border-l-4 border-primary">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-primary">
                  {section.visionTitle || "Our Vision"}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="prose prose-gray max-w-none">
                  <PortableText
                    value={section.visionContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-foreground/90 leading-relaxed text-lg text-center">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* School Values or Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 text-primary">
              Excellence in Education Since 1927
            </h3>
            <p className="text-xl opacity-90">
              Building tomorrow's leaders through innovative learning
              experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
