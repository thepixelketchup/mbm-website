"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaBuilding,
  FaArrowLeft,
  FaFlask,
  FaFutbol,
  FaUtensils,
  FaBookOpen,
  FaShoppingCart,
  FaCogs,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import SubsectionTemplate from "../subsection_template/subsection-template";
import PortableTextComponent from "../PortableTextComponent";

interface Facility {
  _key: string;
  name: string;
  category: string;
  description: any[];
  images: any[];
  features?: string[];
  capacity?: string;
}

interface FacilitiesSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    facilities: Facility[];
  };
}

export default function FacilitiesSection({ section }: FacilitiesSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<string, number>
  >({});

  if (!section) return null;

  const getCategoryIcon = (category: string) => {
    const icons = {
      labs: <FaFlask className="w-8 h-8" />,
      sports: <FaFutbol className="w-8 h-8" />,
      dining: <FaUtensils className="w-8 h-8" />,
      library: <FaBookOpen className="w-8 h-8" />,
      shops: <FaShoppingCart className="w-8 h-8" />,
      other: <FaCogs className="w-8 h-8" />,
    };
    return (
      icons[category as keyof typeof icons] || (
        <FaBuilding className="w-8 h-8" />
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      labs: "from-green-500 to-emerald-600",
      sports: "from-orange-500 to-red-600",
      dining: "from-yellow-500 to-orange-600",
      library: "from-purple-500 to-indigo-600",
      shops: "from-pink-500 to-rose-600",
      other: "from-gray-500 to-slate-600",
    };
    return (
      colors[category as keyof typeof colors] || "from-blue-500 to-indigo-600"
    );
  };

  const nextImage = (facilityKey: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [facilityKey]: ((prev[facilityKey] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (facilityKey: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [facilityKey]: ((prev[facilityKey] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  // Group facilities by category
  const groupedFacilities = section.facilities.reduce(
    (acc, facility) => {
      if (!acc[facility.category]) {
        acc[facility.category] = [];
      }
      acc[facility.category].push(facility);
      return acc;
    },
    {} as Record<string, Facility[]>,
  );

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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(groupedFacilities).map(([category, facilities]) => (
            <div key={category} className="mb-16">
              <div
                className={`bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl p-6 mb-8`}
              >
                <div className="flex items-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold capitalize">
                      {category.replace("_", " ")}
                    </h2>
                    <p className="text-white/90">
                      {facilities.length} facility
                      {facilities.length > 1 ? "ies" : "y"} available
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {facilities.map((facility) => {
                  const currentIndex = currentImageIndex[facility._key] || 0;
                  return (
                    <div
                      key={facility._key}
                      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative">
                          {facility.images && facility.images.length > 0 && (
                            <div className="relative h-80 lg:h-full">
                              <Image
                                src={urlFor(facility.images[currentIndex])
                                  .width(600)
                                  .height(400)
                                  .url()}
                                alt={facility.name}
                                fill
                                className="object-cover"
                              />

                              {facility.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() =>
                                      prevImage(
                                        facility._key,
                                        facility.images.length,
                                      )
                                    }
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                  >
                                    <FaChevronLeft className="w-5 h-5 text-gray-700" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      nextImage(
                                        facility._key,
                                        facility.images.length,
                                      )
                                    }
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                  >
                                    <FaChevronRight className="w-5 h-5 text-gray-700" />
                                  </button>

                                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {facility.images.map((_, index) => (
                                      <button
                                        key={index}
                                        onClick={() =>
                                          setCurrentImageIndex((prev) => ({
                                            ...prev,
                                            [facility._key]: index,
                                          }))
                                        }
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                          index === currentIndex
                                            ? "bg-white"
                                            : "bg-white/50"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="p-8">
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg flex items-center justify-center mr-4`}
                            >
                              {getCategoryIcon(category)}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">
                                {facility.name}
                              </h3>
                              {facility.capacity && (
                                <p className="text-gray-600 flex items-center">
                                  <FaUsers className="w-4 h-4 mr-2" />
                                  {facility.capacity}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="prose prose-teal max-w-none mb-6">
                            <PortableTextComponent
                              value={facility.description}
                            />
                          </div>

                          {facility.features &&
                            facility.features.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">
                                  Key Features:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {facility.features.map((feature, index) => (
                                    <span
                                      key={index}
                                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubsectionTemplate>
  );
}
