"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.client";
import { motion } from "framer-motion";
import { Quote, Target, Lightbulb, Award } from "lucide-react";

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold">
            <Award className="w-4 h-4" />
            <span>Discover Our Story</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6">
            {section.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative h-[30rem] lg:h-[40rem] rounded-[2.5rem] overflow-hidden shadow-2xl glass border border-primary/10">
            <Image
              src={urlFor(section.heroImage).width(1600).height(800).url()}
              alt={section.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24 relative"
        >
          {/* Decorative floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 z-20 text-accent opacity-50 hidden md:block"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-4 z-20 text-primary opacity-30 hidden md:block"
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>

          <div className="glass rounded-[2.5rem] shadow-xl p-10 lg:p-16 border-t-[6px] border-t-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="prose prose-xl prose-p:text-foreground/80 max-w-4xl mx-auto text-center font-serif leading-relaxed relative z-10">
              <PortableText
                value={section.description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-6 last:mb-0">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 mt-12 flex items-center justify-center gap-4">
                        <span className="w-12 h-px bg-primary/30" />
                        {children}
                        <span className="w-12 h-px bg-primary/30" />
                      </h2>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Person Message Section */}
        {section.personName && section.personMessage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-[3rem] p-10 lg:p-16 shadow-lg border border-primary/10 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote className="w-64 h-64 text-primary" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Person Profile */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                  {section.personImage ? (
                    <div className="relative mb-8 group">
                      <div className="w-56 h-56 relative rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
                        <Image
                          src={urlFor(section.personImage).width(400).height(400).url()}
                          alt={section.personName}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 w-56 h-56 rounded-full border border-primary/30 z-0 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="w-56 h-56 mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-6xl font-bold font-serif">
                        {section.personName.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2 font-serif">
                      {section.personName}
                    </h3>
                    {section.personRole && (
                      <p className="text-xl font-medium text-primary">
                        {section.personRole}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-8">
                  <div className="relative">
                    <Quote className="w-16 h-16 text-primary/20 absolute -top-8 -left-8" />
                    <div className="prose prose-xl max-w-none">
                      <PortableText
                        value={section.personMessage}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-foreground/80 leading-relaxed text-xl lg:text-2xl mb-6 italic font-serif last:mb-0">
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
          </motion.div>
        )}

        {/* Mission & Vision Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          {/* Mission Card */}
          <motion.div variants={fadeInUp} className="group">
            <div className="glass rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 border border-primary/10 h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-20 mix-blend-overlay" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-primary leading-none text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:-rotate-6 transition-transform duration-500">
                    <Target className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground font-serif">
                    {section.missionTitle || "Our Mission"}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex-1 flex items-center justify-center">
                <div className="prose prose-lg max-w-none text-center">
                  <PortableText
                    value={section.missionContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-foreground/70 leading-relaxed m-0">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeInUp} className="group">
            <div className="glass rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 border border-accent/10 h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-20 mix-blend-overlay" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-accent leading-none text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                    <Lightbulb className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground font-serif">
                    {section.visionTitle || "Our Vision"}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex-1 flex items-center justify-center">
                <div className="prose prose-lg max-w-none text-center">
                  <PortableText
                    value={section.visionContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-foreground/70 leading-relaxed m-0">
                            {children}
                          </p>
                        ),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* School Values or Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative background for footer */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 mix-blend-overlay" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold font-serif mb-6 drop-shadow-sm">
                Excellence in Education Since 1927
              </h3>
              <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-sm">
                Building tomorrow's leaders through innovative learning experiences and collaborative growth.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
