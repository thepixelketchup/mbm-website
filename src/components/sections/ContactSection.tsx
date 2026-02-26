"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import SubsectionTemplate from "../subsection_template/subsection-template";

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

interface ContactSectionProps {
  section: {
    sectionTitle?: string;
    mapEmbed?: string;
    formFields?: Array<{
      name: string;
      label: string;
      type: string;
      required?: boolean;
      placeholder?: string;
    }>;
    headOffice?: any[];
    branches?: any[];
    faculty?: Array<{
      name: string;
      designation?: string;
      email?: string;
      phone?: string;
      imageUrl?: string;
    }>;
    socialLinks?: Array<{
      platform: string;
      url: string;
    }>;
  };
}

export default function ContactSection({ section }: ContactSectionProps) {
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
    <SubsectionTemplate title="Contact Us">
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          {/* Title Section */}
          {section.sectionTitle && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-foreground mb-6">
                {section.sectionTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </motion.div>
          )}

          {/* Map Section */}
          {section.mapEmbed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video glass border border-primary/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                <div
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  dangerouslySetInnerHTML={{ __html: section.mapEmbed }}
                />
              </div>
            </motion.div>
          )}

          {/* Contact Cards Grid */}
          <div className="space-y-20">
            {/* Office Information Cards */}
            {(section.headOffice || section.branches) && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {section.headOffice && (
                  <motion.div variants={fadeInUp}>
                    <ContactCard
                      icon={<MapPin className="w-8 h-8" />}
                      title="Head Office"
                      content={<PortableText value={section.headOffice} />}
                    />
                  </motion.div>
                )}
                {section.branches && (
                  <motion.div variants={fadeInUp}>
                    <ContactCard
                      icon={<MapPin className="w-8 h-8" />}
                      title="Branches"
                      content={<PortableText value={section.branches} />}
                    />
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Faculty Cards */}
            {section.faculty && section.faculty.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-3xl font-bold font-serif text-foreground">
                    Faculty Contacts
                  </h3>
                  <div className="h-px bg-primary/10 flex-1" />
                </div>
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {section.faculty.map((member, index) => (
                    <motion.div variants={fadeInUp} key={`${member.name}-${index}`}>
                      <FacultyCard member={member} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 w-full"
              >
                <div className="glass rounded-[2.5rem] shadow-xl overflow-hidden border border-primary/10">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12 border-b border-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif text-foreground mb-3 relative z-10">
                      Send us a Message
                    </h3>
                    <p className="text-foreground/70 text-lg relative z-10">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="p-8 lg:p-12">
                    <ContactForm fields={section.formFields || []} />
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              {section.socialLinks && section.socialLinks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-4"
                >
                  <div className="glass rounded-[2.5rem] shadow-xl p-8 lg:p-12 border border-primary/10 text-center h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold font-serif text-foreground mb-8">
                      Connect With Us
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {section.socialLinks.map((social, index) => {
                        const IconComponent =
                          socialIcons[social.platform as keyof typeof socialIcons];
                        return (
                          <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl shadow-sm border border-primary/10 flex items-center justify-center text-primary hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-accent transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                              {IconComponent ? (
                                <IconComponent className="w-6 h-6" />
                              ) : (
                                social.platform
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <p className="text-foreground/60 mt-8 text-sm">
                      Follow our social media channels to stay updated with the latest news and events.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SubsectionTemplate>
  );
}

// Contact Card Component
function ContactCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="glass rounded-[2rem] p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/30 group h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-serif text-foreground">
          {title}
        </h3>
      </div>
      <div className="prose prose-lg prose-p:text-foreground/70 max-w-none flex-1">
        {content}
      </div>
    </div>
  );
}

// Faculty Card Component
function FacultyCard({ member }: { member: any }) {
  return (
    <div className="glass rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group h-full hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        {member.imageUrl ? (
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-colors mb-4 flex-shrink-0">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold font-serif mb-4 ring-4 ring-primary/5 group-hover:ring-primary/20 transition-all">
            {member.name.charAt(0)}
          </div>
        )}
        <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {member.name}
        </h4>
        {member.designation && (
          <p className="text-sm text-primary font-medium mb-4">
            {member.designation}
          </p>
        )}
        <div className="space-y-2 w-full mt-auto">
          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm bg-muted/50 py-2 px-3 rounded-lg hover:bg-primary/5"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{member.email}</span>
            </Link>
          )}
          {member.phone && (
            <Link
              href={`tel:${member.phone}`}
              className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm bg-muted/50 py-2 px-3 rounded-lg hover:bg-primary/5"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{member.phone}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm({ fields }: { fields: any[] }) {
  if (!fields || fields.length === 0) return null;

  return (
    <form
      action="/api/contact"
      method="POST"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className={`group ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
            <label
              htmlFor={field.name}
              className="block text-sm font-bold text-foreground/80 mb-2 ml-1"
            >
              {field.label}
              {field.required && <span className="text-primary ml-1">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={5}
                className="w-full px-5 py-4 bg-white/50 border border-primary/20 rounded-xl shadow-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none text-foreground placeholder:text-foreground/40 backdrop-blur-sm hover:bg-white"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-5 py-4 bg-white/50 border border-primary/20 rounded-xl shadow-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-foreground placeholder:text-foreground/40 backdrop-blur-sm hover:bg-white"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="group w-full md:w-auto bg-gradient-to-r from-primary to-accent text-white py-4 px-10 rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg mt-8"
      >
        <span>Send Message</span>
        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}
