"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import {
  FaPlay,
  FaCalendarAlt,
  FaTimes,
  FaCamera,
  FaEye,
} from "react-icons/fa";
import { useState } from "react";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface MediaItem {
  _key: string;
  type: "image" | "video";
  image?: any;
  videoUrl?: string;
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

  if (!section) return null;

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
      {/* Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/10 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {section.mediaItems.length === 0 ? (
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
                  No media items available in this gallery.
                </p>
              </div>
            </div>
          ) : (
            /* Gallery Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {section.mediaItems.map((item, index) => (
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
                        alt="Gallery image"
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

                    {/* Date Overlay */}
                    {item.date && (
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <div className="flex items-center text-xs sm:text-sm opacity-90">
                          <FaCalendarAlt className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
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

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          {/* Modal Container */}
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
              {/* Media Content */}
              <div className="relative flex-1 min-h-0">
                {selectedItem.type === "image" && selectedItem.image ? (
                  <Image
                    src={urlFor(selectedItem.image)
                      .width(1200)
                      .height(800)
                      .url()}
                    alt="Gallery image"
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
                    title="Video"
                  />
                ) : null}
              </div>

              {/* Modal Footer - Only show if there's a date */}
              {selectedItem.date && (
                <div className="flex-shrink-0 p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {new Date(selectedItem.date).toLocaleDateString()}
                    </div>

                    {/* Media Type Badge */}
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
