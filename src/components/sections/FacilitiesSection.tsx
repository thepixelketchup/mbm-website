"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaBuilding,
  FaFlask,
  FaFutbol,
  FaUtensils,
  FaBookOpen,
  FaShoppingCart,
  FaCogs,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaMapMarkerAlt,
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
      labs: (
        <FaFlask className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      sports: (
        <FaFutbol className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      dining: (
        <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      library: (
        <FaBookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      shops: (
        <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
      other: (
        <FaCogs className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      ),
    };
    return (
      icons[category as keyof typeof icons] || (
        <FaBuilding className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      labs: "from-accent to-secondary",
      sports: "from-secondary to-primary",
      dining: "from-primary to-accent",
      library: "from-accent to-primary",
      shops: "from-secondary to-accent",
      other: "from-primary to-secondary",
    };
    return colors[category as keyof typeof colors] || "from-primary to-accent";
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

  const goToImage = (facilityKey: string, imageIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [facilityKey]: imageIndex,
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedFacilities).map(
            ([category, facilities], categoryIndex) => (
              <div key={category} className="mb-12 sm:mb-16 lg:mb-20">
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${getCategoryColor(category)} rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
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
                        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold capitalize mb-1 sm:mb-2">
                          {category.replace("_", " ")}
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg">
                          {facilities.length} facilit
                          {facilities.length > 1 ? "ies" : "y"} available
                        </p>
                      </div>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/20 flex-shrink-0">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facilities Grid */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                  {facilities.map((facility, index) => {
                    const currentIndex = currentImageIndex[facility._key] || 0;
                    return (
                      <div
                        key={facility._key}
                        className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-muted group hover:-translate-y-2"
                      >
                        {/* Mobile Layout (xs-md) */}
                        <div className="block lg:hidden">
                          {/* Image Section - Updated with object-cover */}
                          {facility.images && facility.images.length > 0 && (
                            <div className="relative h-56 sm:h-64 md:h-72">
                              <Image
                                src={urlFor(facility.images[currentIndex])
                                  .width(800)
                                  .height(600)
                                  .url()}
                                alt={facility.name}
                                fill
                                style={{ objectFit: "cover" }}
                                className="object-cover"
                              />

                              {/* Image Navigation */}
                              {facility.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() =>
                                      prevImage(
                                        facility._key,
                                        facility.images.length,
                                      )
                                    }
                                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                                    aria-label="Previous image"
                                  >
                                    <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      nextImage(
                                        facility._key,
                                        facility.images.length,
                                      )
                                    }
                                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                                    aria-label="Next image"
                                  >
                                    <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                  </button>

                                  {/* Image Indicators */}
                                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
                                    {facility.images.map((_, imageIndex) => (
                                      <button
                                        key={imageIndex}
                                        onClick={() =>
                                          goToImage(facility._key, imageIndex)
                                        }
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                          imageIndex === currentIndex
                                            ? "bg-white shadow-lg scale-125"
                                            : "bg-white/60 hover:bg-white/80"
                                        }`}
                                        aria-label={`Go to image ${imageIndex + 1}`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          )}

                          {/* Content Section */}
                          <div className="p-4 sm:p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                              <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                              >
                                {getCategoryIcon(category)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                                  {facility.name}
                                </h3>
                                {facility.capacity && (
                                  <div className="flex items-center text-foreground/70 text-sm sm:text-base">
                                    <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                                    <span className="truncate">
                                      {facility.capacity}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Description */}
                            <div className="prose prose-sm sm:prose-base max-w-none mb-4 sm:mb-6">
                              <PortableTextComponent
                                value={facility.description}
                              />
                            </div>

                            {/* Features */}
                            {facility.features &&
                              facility.features.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">
                                    Key Features:
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {facility.features.map(
                                      (feature, featureIndex) => (
                                        <span
                                          key={featureIndex}
                                          className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                                        >
                                          {feature}
                                        </span>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>

                        {/* Desktop Layout (lg+) - Updated with flexible height */}
                        <div className="hidden lg:grid lg:grid-cols-2 gap-0">
                          {/* Image Section - Updated */}
                          <div className="relative min-h-[400px] xl:min-h-[480px]">
                            {facility.images && facility.images.length > 0 && (
                              <div className="relative h-full w-full">
                                <Image
                                  src={urlFor(facility.images[currentIndex])
                                    .width(800)
                                    .height(600)
                                    .url()}
                                  alt={facility.name}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  className="object-cover"
                                />

                                {/* Image Navigation */}
                                {facility.images.length > 1 && (
                                  <>
                                    <button
                                      onClick={() =>
                                        prevImage(
                                          facility._key,
                                          facility.images.length,
                                        )
                                      }
                                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                                      aria-label="Previous image"
                                    >
                                      <FaChevronLeft className="w-6 h-6 text-primary" />
                                    </button>
                                    <button
                                      onClick={() =>
                                        nextImage(
                                          facility._key,
                                          facility.images.length,
                                        )
                                      }
                                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                                      aria-label="Next image"
                                    >
                                      <FaChevronRight className="w-6 h-6 text-primary" />
                                    </button>

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                                      {facility.images.map((_, imageIndex) => (
                                        <button
                                          key={imageIndex}
                                          onClick={() =>
                                            goToImage(facility._key, imageIndex)
                                          }
                                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            imageIndex === currentIndex
                                              ? "bg-white shadow-lg scale-125"
                                              : "bg-white/60 hover:bg-white/80"
                                          }`}
                                          aria-label={`Go to image ${imageIndex + 1}`}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Content Section */}
                          <div className="p-8 xl:p-12 flex flex-col justify-center">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6 xl:mb-8">
                              <div
                                className={`w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                              >
                                {getCategoryIcon(category)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-2xl xl:text-3xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                                  {facility.name}
                                </h3>
                                {facility.capacity && (
                                  <div className="flex items-center text-foreground/70 text-lg">
                                    <FaUsers className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <span>{facility.capacity}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Description */}
                            <div className="prose prose-lg xl:prose-xl max-w-none mb-6 xl:mb-8">
                              <PortableTextComponent
                                value={facility.description}
                              />
                            </div>

                            {/* Features */}
                            {facility.features &&
                              facility.features.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-primary mb-4 xl:mb-6 text-lg xl:text-xl">
                                    Key Features:
                                  </h4>
                                  <div className="flex flex-wrap gap-3">
                                    {facility.features.map(
                                      (feature, featureIndex) => (
                                        <span
                                          key={featureIndex}
                                          className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm xl:text-base font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                                        >
                                          {feature}
                                        </span>
                                      ),
                                    )}
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
            ),
          )}
        </div>
      </section>
    </SubsectionTemplate>
  );
}
