"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaCamera,
  FaPlay,
  FaCalendarAlt,
  FaTimes,
  FaImages,
  FaVideo,
  FaEye,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface MediaItem {
  _key: string;
  type: "image" | "video";
  image?: any;
  videoUrl?: string;
  title?: string;
  caption?: string;
  category?: string;
  date?: string;
}

interface PhotoVideoGallerySectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    mediaItems: MediaItem[];
  };
}

export default function PhotoVideoGallerySection({
  section,
}: PhotoVideoGallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!section) return null;

  const categories = [
    "all",
    ...Array.from(
      new Set(section.mediaItems.map((item) => item.category).filter(Boolean)),
    ),
  ];

  const filteredItems =
    selectedCategory === "all"
      ? section.mediaItems
      : section.mediaItems.filter((item) => item.category === selectedCategory);

  const getCategoryTitle = (category: string) => {
    const titles = {
      campus: "Campus Life",
      sports: "Sports Events",
      cultural: "Cultural Programs",
      academic: "Academic Activities",
      events: "Special Events",
      achievements: "Achievements",
      all: "All Media",
    };
    return titles[category as keyof typeof titles] || category;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      campus: <FaImages className="w-4 h-4 sm:w-5 sm:h-5" />,
      sports: <FaPlay className="w-4 h-4 sm:w-5 sm:h-5" />,
      cultural: <FaCamera className="w-4 h-4 sm:w-5 sm:h-5" />,
      academic: <FaImages className="w-4 h-4 sm:w-5 sm:h-5" />,
      events: <FaVideo className="w-4 h-4 sm:w-5 sm:h-5" />,
      achievements: <FaCamera className="w-4 h-4 sm:w-5 sm:h-5" />,
      all: <FaImages className="w-4 h-4 sm:w-5 sm:h-5" />,
    };
    return (
      icons[category as keyof typeof icons] || (
        <FaImages className="w-4 h-4 sm:w-5 sm:h-5" />
      )
    );
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
      backTo={{
        text: "Academics",
        url: "/academics",
      }}
    >
      {/* Filter Section */}
      <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-muted/30 to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-3 bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <FaFilter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">
                Filter Media
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4">
              Browse by Category
            </h2>
          </div>

          {/* Category Dropdown */}
          <div className="flex justify-center">
            <div className="relative" ref={dropdownRef}>
              {/* Dropdown Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-between gap-3 bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 min-w-[200px] sm:min-w-[250px]"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <div className="flex items-center gap-3">
                  {getCategoryIcon(selectedCategory)}
                  <span className="font-semibold text-sm sm:text-base">
                    {getCategoryTitle(selectedCategory)}
                  </span>
                </div>
                {isDropdownOpen ? (
                  <FaChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="py-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full flex items-center gap-3 px-4 sm:px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                          selectedCategory === category
                            ? "bg-purple-50 text-purple-600 border-r-4 border-purple-600"
                            : "text-gray-700"
                        }`}
                      >
                        {getCategoryIcon(category)}
                        <span className="font-medium text-sm sm:text-base">
                          {getCategoryTitle(category)}
                        </span>
                        {selectedCategory === category && (
                          <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Media Count */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base text-foreground/70">
              Showing{" "}
              <span className="font-semibold text-purple-600">
                {filteredItems.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-800">
                {section.mediaItems.length}
              </span>{" "}
              items
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/10 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <FaCamera className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-600" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">
                  No Media Found
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                  No media items found for the selected category. Try selecting
                  a different category.
                </p>
              </div>
            </div>
          ) : (
            /* Gallery Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item._key}
                  className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Media Container */}
                  <div className="relative aspect-square">
                    {item.type === "image" && item.image ? (
                      <Image
                        src={urlFor(item.image).width(400).height(400).url()}
                        alt={item.title || "Gallery image"}
                        fill
                        style={{ objectFit: "cover" }}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : item.type === "video" && item.videoUrl ? (
                      <div className="relative w-full h-full bg-purple-600 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                      </div>
                    ) : null}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      {item.title && (
                        <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                      )}
                      {item.date && (
                        <div className="flex items-center text-xs sm:text-sm opacity-90">
                          <FaCalendarAlt className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    {item.category && (
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className="bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                          {getCategoryTitle(item.category)}
                        </span>
                      </div>
                    )}

                    {/* Media Type Indicator */}
                    {item.type === "video" && (
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal - Responsive heights for all screen sizes */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          {/* Modal Container - Responsive dimensions */}
          <div className="relative w-[95vw] sm:w-[90vw] max-w-[900px] h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-8 sm:-top-12 md:-top-16 right-0 text-white hover:text-purple-400 transition-colors z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20"
              aria-label="Close modal"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Modal Content Container */}
            <div className="relative w-full h-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Media Content - Responsive with object-cover */}
              <div className="relative flex-1 min-h-0">
                {selectedItem.type === "image" && selectedItem.image ? (
                  <Image
                    src={urlFor(selectedItem.image)
                      .width(1200)
                      .height(800)
                      .url()}
                    alt={selectedItem.title || "Gallery image"}
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover"
                  />
                ) : selectedItem.type === "video" && selectedItem.videoUrl ? (
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    frameBorder="0"
                    title={selectedItem.title || "Video"}
                  />
                ) : null}
              </div>

              {/* Modal Footer - Responsive padding and typography */}
              {(selectedItem.title ||
                selectedItem.caption ||
                selectedItem.date ||
                selectedItem.category) && (
                <div className="flex-shrink-0 p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      {selectedItem.title && (
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
                          {selectedItem.title}
                        </h3>
                      )}
                      {selectedItem.caption && (
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {selectedItem.caption}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                        {selectedItem.date && (
                          <div className="flex items-center text-xs sm:text-sm text-gray-500">
                            <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            {new Date(selectedItem.date).toLocaleDateString()}
                          </div>
                        )}
                        {selectedItem.category && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            {getCategoryIcon(selectedItem.category)}
                            <span className="text-xs sm:text-sm font-medium text-purple-600">
                              {getCategoryTitle(selectedItem.category)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Media Type Badge - Responsive */}
                    <div className="flex-shrink-0">
                      <div
                        className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          selectedItem.type === "video"
                            ? "bg-orange-500 text-white"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        {selectedItem.type === "video" ? (
                          <FaPlay className="w-2 h-2 sm:w-3 sm:h-3" />
                        ) : (
                          <FaCamera className="w-2 h-2 sm:w-3 sm:h-3" />
                        )}
                        <span className="hidden sm:inline">
                          {selectedItem.type === "video" ? "Video" : "Image"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </SubsectionTemplate>
  );
}
