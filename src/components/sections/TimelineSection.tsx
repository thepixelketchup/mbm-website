"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { FaStar } from "react-icons/fa";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface TimelineEvent {
  _key: string;
  year: string;
  title: string;
  description: string;
  image?: any;
  isHighlight?: boolean;
}

interface TimelineSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    events: TimelineEvent[];
  };
}

export default function TimelineSection({ section }: TimelineSectionProps) {
  if (!section) return null;

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      heroImage={section.heroImage}
      backTo={{ text: "About", url: "/about" }}
    >
      <section className="py-5 md:py-10 xl:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            <div
              className="
                pointer-events-none absolute top-0 bottom-0 z-0
                w-[3px] rounded-full bg-gradient-to-b from-purple-600 to-pink-500
                left-1/2 -translate-x-1/2
              "
            />

            <div className="space-y-16">
              {section.events.map((event, index) => (
                <div
                  key={event._key}
                  className={`
                    relative
                    md:flex md:items-center
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  <div
                    className={`
                      relative z-10
                      w-full md:w-5/12
                      ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}
                      max-w-xl mx-auto md:mx-0
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-background
                        ${event.isHighlight ? "border-4 border-yellow-400 shadow-yellow-100" : ""}
                      `}
                    >
                      <div
                        className={`
                          inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-lg mb-4
                          ${
                            event.isHighlight
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                              : "bg-gradient-to-r from-purple-600 to-pink-500"
                          }
                        `}
                      >
                        {event.isHighlight && <FaStar className="w-4 h-4" />}
                        {event.year}
                      </div>

                      {event.image && (
                        <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                          <Image
                            src={urlFor(event.image)
                              .width(400)
                              .height(200)
                              .url()}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <h3 className="text-2xl font-bold text-purple-700 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      absolute z-10
                      left-1/2 -translate-x-1/2
                    "
                  >
                    <div
                      className={`
                        hidden md:block w-6 h-6 rounded-full border-4 border-white shadow-lg
                        ${
                          event.isHighlight
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                            : "bg-gradient-to-r from-purple-600 to-pink-500"
                        }
                      `}
                    />
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SubsectionTemplate>
  );
}
