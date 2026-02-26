"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  Banknote,
  BookOpen,
  ClipboardList,
  Newspaper,
  FolderOpen,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Users,
  Headphones,
} from "lucide-react";
import SubsectionTemplate from "../subsection_template/subsection-template";

interface Document {
  _key: string;
  title: string;
  description?: string;
  file: any;
  category: string;
  fileSize?: string;
  lastUpdated?: string;
}

interface AdmissionStep {
  _key: string;
  stepNumber: number;
  title: string;
  description: string;
}

interface ContactInfo {
  phone?: string;
  email?: string;
  office?: string;
  hours?: string;
}

interface AdmissionsSectionProps {
  section: {
    title: string;
    subtitle?: string;
    heroImage?: any;
    introContent?: any[];
    documents: Document[];
    admissionProcess?: AdmissionStep[];
    contactInfo?: ContactInfo;
  };
}

export default function AdmissionsSection({ section }: AdmissionsSectionProps) {
  if (!section) return null;

  const getCategoryIcon = (category: string) => {
    const icons = {
      forms: <ClipboardList className="w-6 h-6 lg:w-8 lg:h-8" />,
      fees: <Banknote className="w-6 h-6 lg:w-8 lg:h-8" />,
      academic: <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />,
      guidelines: <FileText className="w-6 h-6 lg:w-8 lg:h-8" />,
      prospectus: <Newspaper className="w-6 h-6 lg:w-8 lg:h-8" />,
      other: <FolderOpen className="w-6 h-6 lg:w-8 lg:h-8" />,
    };
    return (
      icons[category as keyof typeof icons] || (
        <FileText className="w-6 h-6 lg:w-8 lg:h-8" />
      )
    );
  };

  const getCategoryTitle = (category: string) => {
    const titles = {
      forms: "Application Forms",
      fees: "Fee Structure",
      academic: "Academic Documents",
      guidelines: "Admission Guidelines",
      prospectus: "Prospectus",
      other: "Other Documents",
    };
    return titles[category as keyof typeof titles] || "Documents";
  };

  const groupedDocuments = section.documents ? section.documents.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = [];
      }
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, Document[]>,
  ) : {};

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
    <SubsectionTemplate
      title={section.title}
      subtitle={section.subtitle}
      introContent={section.introContent}
      heroImage={section.heroImage}
    >
      {/* Admission Process Section */}
      {section.admissionProcess && section.admissionProcess.length > 0 && (
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold">
                <ClipboardList className="w-4 h-4" />
                <span>Step by Step</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Admission Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Follow these simple steps to complete your admission and join our collaborative learning environment.
              </p>
            </motion.div>

            {/* Process Steps List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
            >
              {section.admissionProcess
                .sort((a, b) => a.stepNumber - b.stepNumber)
                .map((step, index) => (
                  <motion.div
                    variants={fadeInUp}
                    key={step._key}
                    className="relative"
                  >
                    <div className="glass p-8 rounded-[2rem] h-full border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.stepNumber}
                      </div>

                      <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow between steps - Desktop only */}
                    {index < section.admissionProcess!.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                        <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-primary/10 flex items-center justify-center text-primary/50">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Documents Section */}
      {section.documents && section.documents.length > 0 && (
        <section className="py-20 lg:py-28 bg-muted/40 border-y border-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16 lg:mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-semibold">
                <Download className="w-4 h-4" />
                <span>Download Center</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Required Documents
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Access all the necessary forms, guidelines, and information required for your application.
              </p>
            </motion.div>

            {/* Document Categories */}
            {Object.entries(groupedDocuments).map(
              ([category, docs], categoryIndex) => (
                <motion.div
                  key={category}
                  className="mb-16 last:mb-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-inner">
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold font-serif text-foreground">
                        {getCategoryTitle(category)}
                      </h3>
                      <p className="text-foreground/60">
                        {docs.length} document{docs.length > 1 ? "s" : ""} available
                      </p>
                    </div>
                  </div>

                  {/* Documents Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docs.map((doc) => (
                      <div
                        key={doc._key}
                        className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-primary/5 hover:border-primary/20 flex flex-col h-full"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-foreground/50 group-hover:text-primary transition-colors" />
                          </div>
                          {doc.fileSize && (
                            <span className="text-xs font-semibold px-3 py-1 bg-muted rounded-full text-foreground/60">
                              {doc.fileSize}
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {doc.title}
                        </h4>

                        {doc.description && (
                          <p className="text-sm text-foreground/70 mb-6 leading-relaxed flex-1">
                            {doc.description}
                          </p>
                        )}

                        {/* Divider */}
                        <div className="h-px bg-muted w-full my-6 opacity-60" />

                        <div className="flex items-center justify-between mt-auto">
                          {doc.lastUpdated && (
                            <div className="flex items-center gap-2 text-xs text-foreground/50 font-medium">
                              <CalendarDays className="w-4 h-4" />
                              <span>{new Date(doc.lastUpdated).toLocaleDateString()}</span>
                            </div>
                          )}

                          <a
                            href={doc.file?.asset?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-full transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </section>
      )}

      {/* Contact Information Section - Glassmorphic Dark */}
      {section.contactInfo && (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 border-t border-slate-800">
          {/* Decorative elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16 lg:mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full mb-6 font-semibold backdrop-blur-md border border-white/5">
                <Headphones className="w-4 h-4" />
                <span>Admissions Support</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
                Need Help Applying?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Our admissions team is here to assist you throughout the entire process. Feel free to reach out with any questions.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {section.contactInfo.phone && (
                <motion.div variants={fadeInUp} className="glass-dark p-8 rounded-[2rem] border border-white/10 hover:bg-white/5 transition-colors group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white/90 mb-2">Phone</h3>
                  <p className="text-white/60 font-medium">{section.contactInfo.phone}</p>
                </motion.div>
              )}

              {section.contactInfo.email && (
                <motion.div variants={fadeInUp} className="glass-dark p-8 rounded-[2rem] border border-white/10 hover:bg-white/5 transition-colors group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white/90 mb-2">Email</h3>
                  <p className="text-white/60 font-medium break-all">{section.contactInfo.email}</p>
                </motion.div>
              )}

              {section.contactInfo.office && (
                <motion.div variants={fadeInUp} className="glass-dark p-8 rounded-[2rem] border border-white/10 hover:bg-white/5 transition-colors group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white/90 mb-2">Office</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{section.contactInfo.office}</p>
                </motion.div>
              )}

              {section.contactInfo.hours && (
                <motion.div variants={fadeInUp} className="glass-dark p-8 rounded-[2rem] border border-white/10 hover:bg-white/5 transition-colors group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white/90 mb-2">Hours</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{section.contactInfo.hours}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}
    </SubsectionTemplate>
  );
}
