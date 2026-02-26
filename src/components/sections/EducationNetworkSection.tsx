"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity.client";
import { ArrowRight, Globe } from "lucide-react";

interface EducationNetworkSectionProps {
  section: {
    sectionTitle: string;
    sectionSubtitle?: string;
    image: any;
    description: string;
    readMoreUrl?: string;
  };
}

export default function EducationNetworkSection({
  section,
}: EducationNetworkSectionProps) {
  if (!section) return null;

  // Split title if possible to highlight the first word
  const words = section.sectionTitle.split(" ");
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(" ");

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[100px] -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Globe className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide uppercase">
              Global Reach
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground mb-6">
            <span className="text-primary">{firstWord}</span> {restOfTitle}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />

          {section.sectionSubtitle && (
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {section.sectionSubtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-[2.5rem] -rotate-3 scale-105" />

            {section.image && (
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden glass border border-white/50 shadow-2xl">
                <Image
                  src={urlFor(section.image).url()}
                  alt={section.sectionTitle}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply" />
              </div>
            )}
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center glass p-8 md:p-12 xl:p-16 rounded-[2.5rem] shadow-xl border border-primary/10 relative overflow-hidden group"
          >
            {/* Internal gradient sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 font-medium">
                {section.description}
              </p>

              <Link
                href={section.readMoreUrl || "/about"}
                className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 overflow-hidden w-fit"
              >
                <span className="relative z-10 flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

