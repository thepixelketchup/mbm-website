"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { FaArrowLeft } from "react-icons/fa";
import { ReactNode } from "react";
import PortableTextComponent from "../PortableTextComponent";
import Link from "next/link";

interface SubsectionTemplateProps {
  title: string;
  subtitle?: string;
  heroImage?: any;
  introContent?: any[];
  children: ReactNode;
  backTo?: {
    text: string;
    url: string;
  };
}

export default function SubsectionTemplate({
  title,
  subtitle,
  heroImage,
  introContent,
  children,
  backTo,
}: SubsectionTemplateProps) {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center bg-white">
        <h1 className="text-center pt-16 md:pt-20 font-bold text-4xl md:text-6xl px-4">
          <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {subtitle && subtitle.trim().length && (
          <h3 className="text-center text-lg font-medium md:text-xl px-4">
            <span className="text-black font-sans">{subtitle}</span>
          </h3>
        )}
        <div className="w-[3px] h-24 md:h-40 bg-gradient-to-br from-primary to-secondary mt-2 mb-8 md:mb-12 opacity-80 rounded-full"></div>
      </section>

      <section className="w-full">
        {heroImage && (
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="bg-black shadow-xl p-1 rounded-2xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={urlFor(heroImage)
                    .width(1920)
                    .height(1080)
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt={title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1152px, (min-width: 1024px) 960px, (min-width: 640px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {introContent && introContent.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="prose prose-lg md:prose-xl max-w-none text-center">
              <PortableTextComponent value={introContent} />
            </div>
          </div>
        </section>
      )}

      {children}

      {backTo && (
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Link
              href={backTo.url}
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back To {backTo.text}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
